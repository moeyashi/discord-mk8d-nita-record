// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';

/** @type { import('../types.js').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('stats')
    .setDescription('NITAの統計情報を確認します。')
    .addStringOption((option) => option.setName('track').setDescription('コース名').setRequired(true)),
  execute: async (interaction, { nitaRepository }) => {
    const trackQuery = interaction.options.getString('track');

    if (!trackQuery) {
      throw new Error('コース名を指定してください');
    }

    const track = searchTrack(trackQuery);
    if (!track) {
      throw new Error(`コースが見つかりませんでした。\n入力されたコース名:  ${trackQuery}`);
    }

    const stats = await nitaRepository.selectStats(track.code, track.nitaVSWRMilliseconds);
    console.info(stats);

    await interaction.reply({
      embeds: [
        {
          title: `${track.trackName}のstats`,
          fields: [
            {
              name: '1落ち',
              value: `${Math.round((stats.rank1 / stats.total) * 100 * 10) / 10}%`,
            },
            {
              name: '2落ち',
              value: `${Math.round((stats.rank2 / stats.total) * 100 * 10) / 10}%`,
            },
            {
              name: '3落ち',
              value: `${Math.round((stats.rank3 / stats.total) * 100 * 10) / 10}%`,
            },
            {
              name: '4落ち',
              value: `${Math.round((stats.rank4 / stats.total) * 100 * 10) / 10}%`,
            },
            {
              name: '5落ち',
              value: `${Math.round((stats.rank5 / stats.total) * 100 * 10) / 10}%`,
            },
            {
              name: '6落以上',
              value: `${Math.round((stats.over / stats.total) * 100 * 10) / 10}%`,
            },
          ],
        },
      ],
    });
    return;
  },
};
