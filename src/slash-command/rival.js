// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { rivalResponse } from '../presenter/rival-response.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('rival')
    .setDescription('サーバー内のユーザーと記録を比較します')
    .addUserOption((option) => option.setName('rival').setDescription('比較対象').setRequired(true)),
  execute: async (interaction, nitaRepository) => {
    if (!interaction.guild) {
      if (!interaction.inGuild()) {
        throw new Error('サーバー内で実行してください。rivalコマンドはDMやグループDMでは実行できません。');
      }
      // https://github.com/discordjs/discord.js/blob/main/packages/discord.js/src/structures/BaseInteraction.js#L180-L182
      // https://github.com/moeyashi/discord-mk8d-nita-record/issues/78
      // https://scrapbox.io/discordjs-japan/%E3%83%9E%E3%83%8D%E3%83%BC%E3%82%B8%E3%83%A3%E3%83%BC%E3%81%8B%E3%82%89%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E5%8F%96%E5%BE%97%E3%81%99%E3%82%8B
      // interaction.guildはキャッシュから取得しているしているため、interaction.guildがfalsyでinteraction.guildIdがtruthyの場合はfetchして取得する
      await interaction.client.guilds.fetch(interaction.guildId);
      if (!interaction.guild) {
        throw new Error('不明なエラー：サーバーが見つかりませんでした。スクショして連絡してもらえたらありがたいです！');
      }
    }

    const userQuery = interaction.options.getUser('rival');
    if (!userQuery) {
      throw new Error('比較対象を指定してください');
    }

    await interaction.deferReply();

    const tracks = await nitaRepository.selectRival(interaction.user.id, userQuery.id);
    await interaction.followUp(rivalResponse(userQuery, tracks));
  },
};
