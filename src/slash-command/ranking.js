// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';
import { displayMilliseconds } from '../util/time.js';
import { colorByTimeRank } from '../const/color.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('ranking')
    .setDescription('サーバー内のランキングを表示します。')
    .addStringOption(option => option.setName('track').setDescription('コース名').setRequired(true)),
  execute: async (interaction, nitaRepository) => {
    if (!interaction.guild) {
      if (!interaction.inGuild()) {
        throw new Error('サーバー内で実行してください。rankingコマンドはDMやグループDMでは実行できません。');
      }
      throw new Error('不明なエラー：サーバーが見つかりませんでした。スクショしてXで連絡してもらえたらありがたいです！');
    }

    const trackQuery = interaction.options.getString('track');
    if (!trackQuery) {
      throw new Error('コース名を指定してください');
    }

    const track = searchTrack(trackQuery);
    if (!track) {
      interaction.reply({
        content: `コースが見つかりませんでした。\n入力されたコース名:  ${trackQuery}`,
      });
      return;
    }

    await interaction.deferReply();

    const serverMembers = await interaction.guild.members.fetch({ limit: 200 });

    const ranking = await nitaRepository.selectRanking(track.code, Array.from(serverMembers.values()));

    if (ranking.length === 0) {
      await interaction.followUp({
        content: `まだ${track.trackName}のNITAのタイムが登録されていません。`,
      });
      return;
    }

    const groupedRanking = groppByRank(track, ranking);

    await interaction.followUp({
      content: `NITAランキング - ${track.trackName}`,
      embeds: groupedRanking.flatMap(([rank, color, nita]) => {
        /** @type {import('discord.js').APIEmbed[]} */
        const embeds = [];
        return nita.reduce((pv, cv, i) => {
          if (i % 25 === 0) {
            pv.push({
              title: `${rank}`,
              color,
              fields: [],
            });
          }
          const diffWRnNita = cv.milliseconds - track.nitaVSWRMilliseconds;
          pv[pv.length - 1].fields?.push({
            name: cv.member.nickname || cv.member.user.username,
            value: `${displayMilliseconds(cv.milliseconds)} WR + ${diffWRnNita / 1000}秒`,
          });
          return pv;
        }, embeds);
      }),
    });
  },
};

/**
 * @param {import('../types').Track} track
 * @param {Array<{ member: import('discord.js').GuildMember, milliseconds: number }>} ranking
 * @returns {Array<[string, number|undefined, Array<{ member: import('discord.js').GuildMember, milliseconds: number }>]>}
 */
const groppByRank = (track, ranking) => {
  /** @type {Array<[string, number|undefined, Array<{ member: import('discord.js').GuildMember, milliseconds: number }>]>} */
  const ret = [
    ['1落ち', colorByTimeRank(1), []],
    ['2落ち', colorByTimeRank(2), []],
    ['3落ち', colorByTimeRank(3), []],
    ['4落ち', colorByTimeRank(4), []],
    ['5落ち', colorByTimeRank(5), []],
    ['6落ち以上', colorByTimeRank(6), []],
  ];
  ranking.forEach((nita) => {
    const diffWRnNita = nita.milliseconds - track.nitaVSWRMilliseconds;
    if (diffWRnNita < 1000) {
      ret[0][2].push(nita);
    } else if (diffWRnNita < 2000) {
      ret[1][2].push(nita);
    } else if (diffWRnNita < 3000) {
      ret[2][2].push(nita);
    } else if (diffWRnNita < 4000) {
      ret[3][2].push(nita);
    } else if (diffWRnNita < 5000) {
      ret[4][2].push(nita);
    } else {
      ret[5][2].push(nita);
    }
  });
  return ret.filter(([, , arr]) => arr.length > 0);
};
