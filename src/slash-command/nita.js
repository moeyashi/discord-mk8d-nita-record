// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';
import { planetScaleRepository } from '../infra/repository/planetscale.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('nita')
    .setDescription('set nita time')
    .addStringOption(option => option.setName('track').setDescription('コース名').setRequired(true))
    .addIntegerOption(option => option.setName('time').setDescription('タイム(1:53.053の場合は153053と入力)').setRequired(true)),
  execute: async (interaction) => {
    try {
      const trackQuery = interaction.options.getString('track');
      if (!trackQuery) {
        await interaction.reply('コース名を指定してください');
        return;
      }

      const trackCode = searchTrack(trackQuery);
      if (!trackCode) {
        await interaction.reply('コース名が見つかりませんでした');
        return;
      }

      const inputTime = interaction.options.getInteger('time');
      if (!inputTime) {
        await interaction.reply('タイムを指定してください');
        return;
      }
      const newMilliseconds = toMilliseconds(inputTime);

      const discordUserId = interaction.user.id;

      const repository = planetScaleRepository();

      const lastRecord = await repository.selectNitaByUserAndTrack(discordUserId, trackCode);

      if (lastRecord && lastRecord.milliseconds <= newMilliseconds) {
        await interaction.reply(`前回のタイムより遅いです。\n前回のタイム: ${displayMilliseconds(lastRecord.milliseconds)}`);
        return;
      }

      /** @type {import('../types').Nita} */
      const newNita = { trackCode, discordUserId, milliseconds: newMilliseconds };
      if (lastRecord === null) {
        await repository.insertNita(newNita);
      } else {
        await repository.updateNita(newNita);
      }

      await interaction.reply(`${trackCode}のタイムを登録しました。\n今回のタイム: ${displayMilliseconds(newMilliseconds)}`);
    } catch (error) {
      console.error(error);
      await interaction.reply('エラーが発生しました。');
    }
  },
};

/**
 * @param {number} milliseconds
 */
const displayMilliseconds = (milliseconds) => {
  const millisecondsStr = Math.floor(milliseconds % 1000).toString().padStart(3, '0');
  const seconds = Math.floor(milliseconds / 1000);
  const secondsStr = (seconds % 60).toString().padStart(2, '0');
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${secondsStr}.${millisecondsStr}`;
};

/**
 * @param {number} inputTime 1:53.053の場合は153053
 */
const toMilliseconds = (inputTime) => {
  const inputMilliseconds = inputTime % 1000;
  const inputSeconds = Math.floor(inputTime / 1000) % 100;
  const inputMinutes = Math.floor(inputTime / 100000);
  return inputMilliseconds + inputSeconds * 1000 + inputMinutes * 60 * 1000;
};
