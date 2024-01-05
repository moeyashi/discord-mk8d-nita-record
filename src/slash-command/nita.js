// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';
import { planetScaleRepository } from '../infra/repository/planetscale.js';
import { ApplicationCommandOptionType, InteractionResponseType, MessageFlags } from 'discord-api-types/v10';
import { ceilDiff, displayMilliseconds, toMilliseconds } from '../util/time.js';
import { validateSlashCommand } from '../util/validate-slash-command.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('nita')
    .setDescription('NITAのタイムを登録・確認します。timeを指定しない場合は確認のみします。')
    .addStringOption(option => option.setName('track').setDescription('コース名').setRequired(true))
    .addIntegerOption(option => option.setName('time').setDescription('タイム(1:53.053の場合は153053と入力)')),
  execute: async (interaction) => {
    try {
      const { data, err } = validateSlashCommand(interaction);
      if (err) {
        return err;
      }

      const { track: trackQuery, time: inputTime } = data.options?.reduce((acc, cur) => {
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

      const track = searchTrack(trackQuery);
      if (!track) {
        return {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: 'コースが見つかりませんでした',
            flags: MessageFlags.Ephemeral,
          },
        };
      }

      const discordUserId = interaction.member?.user?.id;
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

      const lastRecord = await repository.selectNitaByUserAndTrack(discordUserId, track.code);

      if (!inputTime) {
        return makeResponseForGetLastRecordCommand(track, lastRecord);
      }

      const newMilliseconds = toMilliseconds(inputTime);

      if (lastRecord && lastRecord.milliseconds <= newMilliseconds) {
        return {
          type: InteractionResponseType.ChannelMessageWithSource,
          data: {
            content: `前回のタイムより遅いです。\n\n${makeMetaMessage(track, lastRecord, newMilliseconds)}`,
          },
        };
      }

      /** @type {import('../types').Nita} */
      const newNita = { trackCode: track.code, discordUserId, milliseconds: newMilliseconds };
      if (lastRecord === null) {
        await repository.insertNita(newNita);
      } else {
        await repository.updateNita(newNita);
      }

      return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          content: `タイムを登録しました。\n\n${makeMetaMessage(track, lastRecord, newMilliseconds)}`,
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
 * @param {import('../types').Track} track
 * @param {import('../types').Nita | null} lastRecord
 * @returns {import('discord-api-types/v10').APIInteractionResponse}
 */
const makeResponseForGetLastRecordCommand = (track, lastRecord) => {
  if (lastRecord === null) {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: `タイムは登録されていません\n\n${makeMetaMessage(track, lastRecord)}`,
      },
    };
  } else {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: makeMetaMessage(track, lastRecord),
      },
    };
  }
};

/**
 * @param {import('../types').Track} track
 * @param {import('../types').Nita | null} lastRecord
 * @param {number | null} newMilliseconds
 * @returns {string}
 */
const makeMetaMessage = (track, lastRecord, newMilliseconds = null) => {
  let ret = track.trackName;
  if (newMilliseconds !== null) {
    ret += `\n今回のタイム: ${displayMilliseconds(newMilliseconds)} ${ceilDiff(track.nitaVSWRMilliseconds, newMilliseconds)}落ち`;
  }
  if (lastRecord) {
    ret += `\n前回のタイム: ${displayMilliseconds(lastRecord.milliseconds)} ${ceilDiff(track.nitaVSWRMilliseconds, lastRecord.milliseconds)}落ち`;
  }
  ret += `\nWR: ${displayMilliseconds(track.nitaVSWRMilliseconds)}`;
  return ret;
};
