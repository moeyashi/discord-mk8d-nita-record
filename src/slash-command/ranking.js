// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';
import { rankingResponse } from '../presenter/ranking-response.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('ranking')
    .setDescription('サーバー内のランキングを表示します。')
    .addStringOption(option => option.setName('track').setDescription('コース名').setRequired(true))
    .addIntegerOption(option => option.setName('page').setDescription('1の場合1位から20位を、2の場合21位から40位を出力します')),
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

    const page = interaction.options.getInteger('page') || 1;

    const track = searchTrack(trackQuery);
    if (!track) {
      interaction.reply({
        content: `コースが見つかりませんでした。\n入力されたコース名:  ${trackQuery}`,
      });
      return;
    }

    await interaction.deferReply();

    const serverMembers = await interaction.guild.members.fetch({ limit: 200 });

    const ranking = await nitaRepository.selectRanking(track.code, Array.from(serverMembers.values()), 20, (page - 1) * 20);

    await interaction.followUp(rankingResponse(track, page, ranking));
  },
};
