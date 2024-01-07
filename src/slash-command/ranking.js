// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';
import { planetScaleRepository } from '../infra/repository/planetscale.js';
import { ceilDiff, displayMilliseconds } from '../util/time.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('ranking')
    .setDescription('サーバー内のランキングを表示します。')
    .addStringOption(option => option.setName('track').setDescription('コース名').setRequired(true)),
  execute: async (interaction) => {
    if (!interaction.guild) {
      throw new Error('サーバー内で実行してください');
    }

    const trackQuery = interaction.options.getString('track');
    if (!trackQuery) {
      throw new Error('コース名を指定してください');
    }

    const track = searchTrack(trackQuery);
    if (!track) {
      interaction.reply({
        content: 'コースが見つかりませんでした',
      });
      return;
    }

    await interaction.deferReply();

    const serverMembers = await interaction.guild.members.fetch({ limit: 200 });

    const planetScaleRepo = planetScaleRepository();

    const ranking = await planetScaleRepo.selectRanking(track.code, Array.from(serverMembers.values()));

    /** @type {import('discord.js').APIEmbed[]} */
    const embeds = [];

    await interaction.followUp({
      embeds: ranking.reduce((pv, cv, i) => {
        if (i % 25 === 0) {
          pv.push({
            title: `${track.trackName}のNITAランキング`,
            fields: [],
          });
        }
        pv[pv.length - 1].fields?.push({
          name: cv.member.nickname || cv.member.user.username || 'unknown',
          value: `${displayMilliseconds(cv.milliseconds)} ${ceilDiff(track.nitaVSWRMilliseconds, cv.milliseconds)}落ち`,
        });
        return pv;
      }, embeds),
    });
    return;
  },
};
