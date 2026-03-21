// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { getByCode } from '../const/track.js';
import { nitaListResponse } from '../presenter/nita-list-response.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder().setName('nita-list').setDescription('NITAのタイムを確認します。'),
  execute: async (interaction, { nitaRepository }) => {
    const discordUserId = interaction.member?.user?.id || interaction.user?.id;
    if (!discordUserId) {
      throw new Error('ユーザーIDが取得できませんでした');
    }

    const nitaList = await nitaRepository.selectNitaByUser(discordUserId);
    const nitaTrackList = joinTrack(nitaList);
    await interaction.reply(nitaListResponse(nitaTrackList));
  },
};

/**
 * @param {import('../types.js').Nita[]} nitaList
 * @returns {Parameters<typeof import('../presenter/nita-list-response.js').nitaListResponse>[0]}
 */
const joinTrack = (nitaList) => {
  return nitaList.map((nita) => {
    const track = getByCode(nita.trackCode);
    if (!track) {
      throw new Error(`track not found: ${nita.trackCode}`);
    }
    return {
      nita,
      track,
    };
  });
};
