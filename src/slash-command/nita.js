// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';
import { planetScaleRepository } from '../infra/repository/planetscale.js';
import { ceilDiff, displayMilliseconds, toMilliseconds } from '../util/time.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('nita')
    .setDescription('NITAのタイムを登録・確認します。timeを指定しない場合は確認のみします。')
    .addStringOption(option => option.setName('track').setDescription('コース名').setRequired(true))
    .addIntegerOption(option => option.setName('time').setDescription('タイム(1:53.053の場合は153053と入力)')),
  execute: async (interaction) => {
    const trackQuery = interaction.options.getString('track');
    const inputTime = interaction.options.getInteger('time');

    if (!trackQuery) {
      throw new Error('コース名を指定してください');
    }

    const track = searchTrack(trackQuery);
    if (!track) {
      throw new Error('コースが見つかりませんでした');
    }

    const discordUserId = interaction.member?.user?.id;
    if (!discordUserId) {
      throw new Error('ユーザーIDが取得できませんでした');
    }

    const repository = planetScaleRepository();

    const lastRecord = await repository.selectNitaByUserAndTrack(discordUserId, track.code);

    if (!inputTime) {
      await interaction.reply(doProcessGetLastRecordCommand(track, lastRecord));
      return;
    }

    const newMilliseconds = toMilliseconds(inputTime);

    if (lastRecord && lastRecord.milliseconds <= newMilliseconds) {
      await interaction.reply({
        content: `前回のタイムより速いです。\n\n${makeMetaMessage(track, lastRecord, newMilliseconds)}`,
      });
      return;
    }

    /** @type {import('../types').Nita} */
    const newNita = { trackCode: track.code, discordUserId, milliseconds: newMilliseconds };
    if (lastRecord === null) {
      await repository.insertNita(newNita);
    } else {
      await repository.updateNita(newNita);
    }

    await interaction.reply({
      content: `タイムを登録しました。\n\n${makeMetaMessage(track, lastRecord, newMilliseconds)}`,
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
      content: `タイムは登録されていません\n\n${makeMetaMessage(track, lastRecord)}`,
    };
  } else {
    return {
      content: makeMetaMessage(track, lastRecord),
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
