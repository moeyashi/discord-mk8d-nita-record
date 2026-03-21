// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/mkwr-track.js';
import { displayMilliseconds, toMilliseconds } from '../util/time.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('world-nita')
    .setDescription('マリオカートワールド（MKWR）のNITA記録を登録・表示します。')
    .addStringOption((option) => option.setName('track').setDescription('コース名').setRequired(true))
    .addIntegerOption((option) => option.setName('time').setDescription('タイム(1:53.053の場合は153053と入力)')),
  execute: async (interaction, { worldRepository }) => {
    const trackQuery = interaction.options.getString('track');
    const inputTime = interaction.options.getInteger('time');

    if (!trackQuery) {
      throw new Error('コース名を指定してください');
    }

    const track = searchTrack(trackQuery);
    if (!track) {
      throw new Error(`コースが見つかりませんでした。
入力されたコース名:  ${trackQuery}`);
    }

    const discordUserId = interaction.member?.user?.id || interaction.user?.id;
    if (!discordUserId) {
      throw new Error('ユーザーIDが取得できませんでした');
    }

    const lastRecord = await worldRepository.selectNitaByUserAndTrack(discordUserId, track.code);

    if (!inputTime) {
      await interaction.reply(doProcessGetLastRecordCommand(track, lastRecord));
      return;
    }

    const newMilliseconds = toMilliseconds(inputTime);

    if (lastRecord && lastRecord.milliseconds <= newMilliseconds) {
      await interaction.reply({
        content: '前回のタイムより遅いです。',
        embeds: [makeEmbed(track, lastRecord, newMilliseconds)],
      });
      return;
    }

    /** @type {import('../types').Nita} */
    const newNita = {
      trackCode: track.code,
      discordUserId,
      milliseconds: newMilliseconds,
      lastMilliseconds: lastRecord?.milliseconds,
    };
    if (lastRecord === null) {
      await worldRepository.insertNita(newNita);
    } else {
      await worldRepository.updateNita(newNita);
    }

    await interaction.reply({
      content: 'タイムを登録しました。',
      embeds: [makeEmbed(track, lastRecord, newMilliseconds)],
    });
    return;
  },
};

/**
 * @param {import('../types').Track} track
 * @param {import('../types').Nita | null} lastRecord
 * @returns {import('discord.js').InteractionReplyOptions}
 */
const doProcessGetLastRecordCommand = (track, lastRecord) => {
  if (lastRecord === null) {
    return {
      content: 'タイムは登録されていません。',
      embeds: [makeEmbed(track, lastRecord)],
    };
  }
  return {
    embeds: [makeEmbed(track, lastRecord)],
  };
};

/**
 * @param {import('../types').Track} track
 * @param {import('../types').Nita | null} lastRecord
 * @param {number | null} newMilliseconds
 * @returns {import('discord.js').APIEmbed}
 */
const makeEmbed = (track, lastRecord, newMilliseconds = null) => {
  /** @type {import('discord.js').APIEmbed} */
  const ret = {
    title: track.trackName,
    fields: [],
    url: track.nitaVSWRUrl,
  };
  if (newMilliseconds !== null) {
    if (lastRecord) {
      if (lastRecord.milliseconds > newMilliseconds) {
        ret.fields?.push({
          name: '更新',
          value: `${(lastRecord.milliseconds - newMilliseconds) / 1000}秒更新!`,
        });
      }
    } else {
      ret.fields?.push({
        name: 'new record!',
        value: 'new record!',
      });
    }
    ret.fields?.push({
      name: '今回のタイム',
      value: `${displayMilliseconds(newMilliseconds)}`,
    });
  }
  if (lastRecord) {
    if (newMilliseconds) {
      ret.fields?.push({
        name: '前回のタイム',
        value: `${displayMilliseconds(lastRecord.milliseconds)}`,
      });
    } else {
      ret.fields?.push({
        name: 'time',
        value: `${displayMilliseconds(lastRecord.milliseconds)}`,
      });
    }
  }
  return ret;
};
