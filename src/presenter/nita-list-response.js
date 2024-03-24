// @ts-check
import { colorByTimeRank } from '../const/color.js';
import { displayMilliseconds } from '../util/time.js';

/**
 * @param {{ nita: import('../types').Nita, track: import('../types').Track }[]} nitaTrackList
 * @return {import('discord.js').InteractionReplyOptions}
 */
export const nitaListResponse = (nitaTrackList) => {
  if (nitaTrackList.length === 0) {
    return {
      content: 'NITAのタイムが登録されていません。`/nita`コマンドを使って記録を登録してみましょう。',
    };
  }

  const groupedNitaAndTrackList = groupByRank(nitaTrackList.map(({ nita, track }) => {
    return {
      nita,
      track,
      diffWRnNita: nita.milliseconds - track.nitaVSWRMilliseconds,
    };
  }).sort((a, b) => a.diffWRnNita - b.diffWRnNita));
  return {
    // embedsは最大10個まで、fieldsは最大25個しか指定できないが、track数が96なので最悪のケースを考えても9embedsで済む
    // `[1落ち1fields, 2落ち1fields, 3落ち1fields, 4落ち1fields, 5落ち1fields, 6落ち以上25fields, 6落ち以上25fields, 6落ち以上25fields, 6落ち以上16fields]`
    embeds: groupedNitaAndTrackList.flatMap(([rank, color, nitaAndTrackList]) => {
      /** @type {import('discord.js').APIEmbed[]} */
      const embeds = [];
      return nitaAndTrackList.reduce((pv, cv, i) => {
        if (i % 25 === 0) {
          pv.push({
            title: `${rank}`,
            color,
            fields: [],
          });
        }
        pv[pv.length - 1].fields?.push({
          name: cv.track?.trackName || cv.nita.trackCode,
          value: `${displayMilliseconds(cv.nita.milliseconds)} WR + ${cv.diffWRnNita / 1000}秒`,
        });
        return pv;
      }, embeds);
    }),
  };
};

/**
 * @param {Array<{ nita: import('../types').Nita; track: import('../types').Track | null; diffWRnNita: number; }>} nitaAndTrackList
 * @returns {Array<[string, number|undefined, Array<{ nita: import('../types').Nita; track: import('../types').Track | null; diffWRnNita: number; }>]>}
 */
const groupByRank = (nitaAndTrackList) => {
  /** @type {Array<[string, number|undefined, Array<{ nita: import('../types').Nita; track: import('../types').Track | null; diffWRnNita: number; }>]>} */
  const ret = [
    ['1落ち', colorByTimeRank(1), []],
    ['2落ち', colorByTimeRank(2), []],
    ['3落ち', colorByTimeRank(3), []],
    ['4落ち', colorByTimeRank(4), []],
    ['5落ち', colorByTimeRank(5), []],
    ['6落ち以上', colorByTimeRank(6), []],
  ];
  nitaAndTrackList.forEach((nitaAndTrack) => {
    if (nitaAndTrack.diffWRnNita <= 1000) {
      ret[0][2].push(nitaAndTrack);
    } else if (nitaAndTrack.diffWRnNita <= 2000) {
      ret[1][2].push(nitaAndTrack);
    } else if (nitaAndTrack.diffWRnNita <= 3000) {
      ret[2][2].push(nitaAndTrack);
    } else if (nitaAndTrack.diffWRnNita <= 4000) {
      ret[3][2].push(nitaAndTrack);
    } else if (nitaAndTrack.diffWRnNita <= 5000) {
      ret[4][2].push(nitaAndTrack);
    } else {
      ret[5][2].push(nitaAndTrack);
    }
  });
  return ret.filter(([, , arr]) => arr.length > 0);
};
