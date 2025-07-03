// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';
import { rankingResponse } from '../presenter/ranking-response.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('ranking')
    .setDescription('サーバー内のランキングを表示します。')
    .addStringOption((option) => option.setName('track').setDescription('コース名').setRequired(true))
    .addIntegerOption((option) =>
      option.setName('page').setDescription('1の場合1位から20位を、2の場合21位から40位を出力します'),
    ),
  execute: async (interaction, { nitaRepository }) => {
    if (!interaction.guild) {
      if (!interaction.inGuild()) {
        throw new Error('サーバー内で実行してください。rankingコマンドはDMやグループDMでは実行できません。');
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

    const serverMembers = Array.from((await interaction.guild.members.fetch()).values());
    const ranking = await nitaRepository.selectRanking(track.code, serverMembers, 20, (page - 1) * 20);
    const myRank = await nitaRepository.selectRankByUser(track.code, interaction.user.id, serverMembers);
    const rankingSize = await nitaRepository.countExistsNita(track.code, serverMembers);

    await interaction.followUp(rankingResponse(track, page, ranking, myRank, rankingSize));
  },
};
