// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('delete')
    .setDescription('自分の記録を削除します。コース名に`all`を入力することですべての記録を削除できます。')
    .addStringOption((option) => option.setName('track').setDescription('コース名').setRequired(true)),
  execute: async (interaction, { nitaRepository }) => {
    const trackQuery = interaction.options.getString('track');

    if (!trackQuery) {
      throw new Error('コース名を指定してください');
    }

    const discordUserId = interaction.member?.user?.id || interaction.user?.id;
    if (!discordUserId) {
      throw new Error('ユーザーIDが取得できませんでした');
    }

    if (trackQuery === 'all') {
      await nitaRepository.deleteAllNita(discordUserId);
      await interaction.reply({
        content: '全てのタイムを削除しました。',
      });
      return;
    }

    const track = searchTrack(trackQuery);
    if (!track) {
      throw new Error(`コースが見つかりませんでした。\n入力されたコース名:  ${trackQuery}`);
    }

    await nitaRepository.deleteNita(discordUserId, track.code);
    await interaction.reply({
      content: `${track.trackName}のタイムを削除しました。`,
    });
    return;
  },
};
