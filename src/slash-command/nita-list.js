// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { planetScaleRepository } from '../infra/repository/planetscale.js';
import { getByCode } from '../const/track.js';
import { displayMilliseconds } from '../util/time.js';
import { colorByTimeRank } from '../const/color.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('nita-list')
    .setDescription('NITAのタイムを確認します。'),
  execute: async (interaction) => {
    const discordUserId = interaction.member?.user?.id || interaction.user?.id;
    if (!discordUserId) {
      throw new Error('ユーザーIDが取得できませんでした');
    }

    const repository = planetScaleRepository();

    const nitaList = await repository.selectNitaByUser(discordUserId);
    if (nitaList.length === 0) {
      await interaction.reply({
        content: 'NITAのタイムが登録されていません。',
      });
      return;
    }

    const groupedNitaAndTrackList = groupByRank(nitaList.map((nita) => {
      const track = getByCode(nita.trackCode);
      return {
        nita,
        track,
        diffWRnNita: track?.nitaVSWRMilliseconds ? nita.milliseconds - track.nitaVSWRMilliseconds : Number.MAX_SAFE_INTEGER,
      };
    }).sort((a, b) => a.diffWRnNita - b.diffWRnNita));

    await interaction.reply({
      embeds: groupedNitaAndTrackList.map(([rank, color, nitaAndTrackList]) => ({
        title: `${rank}`,
        color,
        fields: nitaAndTrackList.map((nitaAndTrack) => ({
          name: nitaAndTrack.track?.trackName || nitaAndTrack.nita.trackCode,
          value: `${displayMilliseconds(nitaAndTrack.nita.milliseconds)} WR + ${nitaAndTrack.diffWRnNita / 1000}秒`,
        })),
      })),
    });
  },
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
    if (nitaAndTrack.diffWRnNita < 1000) {
      ret[0][2].push(nitaAndTrack);
    } else if (nitaAndTrack.diffWRnNita < 2000) {
      ret[1][2].push(nitaAndTrack);
    } else if (nitaAndTrack.diffWRnNita < 3000) {
      ret[2][2].push(nitaAndTrack);
    } else if (nitaAndTrack.diffWRnNita < 4000) {
      ret[3][2].push(nitaAndTrack);
    } else if (nitaAndTrack.diffWRnNita < 5000) {
      ret[4][2].push(nitaAndTrack);
    } else {
      ret[5][2].push(nitaAndTrack);
    }
  });
  return ret.filter(([, , arr]) => arr.length > 0);
};
