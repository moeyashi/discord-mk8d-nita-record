// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { planetScaleRepository } from '../infra/repository/planetscale.js';
import { getByCode } from '../const/track.js';
import { displayMilliseconds } from '../util/time.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('nita-list')
    .setDescription('NITAのタイムを確認します。'),
  execute: async (interaction) => {
    const discordUserId = interaction.member?.user?.id;
    if (!discordUserId) {
      throw new Error('ユーザーIDが取得できませんでした');
    }

    const repository = planetScaleRepository();

    const nitaList = await repository.selectNitaByUser(discordUserId);
    const nitaAndTrackList = nitaList.map((nita) => {
      const track = getByCode(nita.trackCode);
      return {
        nita,
        track,
        diffWRnNita: track?.nitaVSWRMilliseconds ? nita.milliseconds - track.nitaVSWRMilliseconds : Number.MAX_SAFE_INTEGER,
      };
    }).sort((a, b) => a.diffWRnNita - b.diffWRnNita);

    const embeds = [];
    await interaction.reply({
      embeds: nitaAndTrackList.reduce((pv, cv, i) => {
        if (i % 25 === 0) {
          pv.push({
            title: 'NITAタイム一覧',
            fields: [],
          });
        }
        pv[pv.length - 1].fields?.push({
          name: cv.track?.trackName || cv.nita.trackCode,
          value: `${displayMilliseconds(cv.nita.milliseconds)} ${Math.ceil(cv.diffWRnNita / 1000)}落ち`,
        });
        return pv;
      }, embeds),
    });
  },
};
