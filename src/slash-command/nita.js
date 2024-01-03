// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';
import { planetScaleRepository } from '../infra/repository/planetscale.js';
import { ApplicationCommandOptionType, ApplicationCommandType, InteractionResponseType, MessageFlags } from 'discord-api-types/v10.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('nita')
    .setDescription('set nita time')
    .addStringOption(option => option.setName('track').setDescription('コース名').setRequired(true))
    .addIntegerOption(option => option.setName('time').setDescription('タイム(1:53.053の場合は153053と入力)').setRequired(true)),
  execute: async (interaction) => {
    try {
      if (interaction.data.type !== ApplicationCommandType.ChatInput) {
        return {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: 'このコマンドはスラッシュコマンドです',
            flags: MessageFlags.Ephemeral,
          },
        };
      }

      const { track: trackQuery, time: inputTime } = interaction.data.options?.reduce((acc, cur) => {
        if (cur.type === ApplicationCommandOptionType.String) {
          acc[cur.name] = cur.value;
        } else if (cur.type === ApplicationCommandOptionType.Integer) {
          acc[cur.name] = cur.value;
        }
        return acc;
      }, { track: undefined, time: undefined }) || { track: undefined, time: undefined };

      if (!trackQuery) {
        return {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: 'コース名を指定してください',
            flags: MessageFlags.Ephemeral,
          },
        };
      }

      const trackCode = searchTrack(trackQuery);
      if (!trackCode) {
        return {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: 'コース名が見つかりませんでした',
            flags: MessageFlags.Ephemeral,
          },
        };
      }

      if (!inputTime) {
        return {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: 'タイムを指定してください',
            flags: MessageFlags.Ephemeral,
          },
        };
      }
      const newMilliseconds = toMilliseconds(inputTime);

      const discordUserId = interaction.user?.id;
      if (!discordUserId) {
        return {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: 'ユーザーIDが取得できませんでした',
            flags: MessageFlags.Ephemeral,
          },
        };
      }

      const repository = planetScaleRepository();

      const lastRecord = await repository.selectNitaByUserAndTrack(discordUserId, trackCode);

      if (lastRecord && lastRecord.milliseconds <= newMilliseconds) {
        return {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: `前回のタイムより遅いです。\n前回のタイム: ${displayMilliseconds(lastRecord.milliseconds)}`,
            flags: MessageFlags.Ephemeral,
          },
        };
      }

      /** @type {import('../types').Nita} */
      const newNita = { trackCode, discordUserId, milliseconds: newMilliseconds };
      if (lastRecord === null) {
        await repository.insertNita(newNita);
      } else {
        await repository.updateNita(newNita);
      }

      return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          content: `${trackCode}のタイムを登録しました。\n今回のタイム: ${displayMilliseconds(newMilliseconds)}`,
        },
      };
    } catch (error) {
      console.error(error);
      return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          content: 'エラーが発生しました。',
        },
      };
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
