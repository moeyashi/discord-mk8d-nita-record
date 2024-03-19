// @ts-check
import { colorByTimeRank } from '../const/color.js';
import { displayMilliseconds } from '../util/time.js';

/**
 * @param {import('../types').Track} track
 * @param {number} page
 * @param {import('../types').UnwrapPromise<ReturnType<import('../types').NitaRepository['selectRanking']>>} ranking
 * @return {import('discord.js').InteractionReplyOptions}
 */
export const rankingResponse = (track, page, ranking) => {
  if (ranking.length === 0) {
    return {
      content: `まだ${track.trackName}のNITAのタイムが登録されていません。`,
    };
  }

  const groupedRanking = groupByRank(track, ranking);
  return {
    content: `## NITAランキング - ${track.trackName}\n${(page - 1) * 20 + 1}位から${Math.min(page * 20, (page - 1) * 20 + ranking.length)}位まで`,
    embeds: groupedRanking.flatMap(([rank, color, nita]) => {
      /** @type {import('discord.js').APIEmbed[]} */
      const embeds = [];
      const numOfUsers = nita.length;
      return nita.reduce((pv, cv, i) => {
        if (i % 25 === 0) {
          pv.push({
            title: `${rank} - ${numOfUsers} users`,
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
  };
};

/**
 * @param {import('../types').Track} track
 * @param {Array<{ member: import('discord.js').GuildMember, milliseconds: number }>} ranking
 * @returns {Array<[string, number|undefined, Array<{ member: import('discord.js').GuildMember, milliseconds: number }>]>}
 */
const groupByRank = (track, ranking) => {
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
