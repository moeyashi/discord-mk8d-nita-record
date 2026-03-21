// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';
import { ceilDiff, displayMilliseconds } from '../util/time.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('back')
    .setDescription('1つ前の状態に戻します。連続して実行はできません。')
    .addStringOption((option) => option.setName('track').setDescription('コース名').setRequired(true)),
  execute: async (interaction, { nitaRepository }) => {
    const trackQuery = interaction.options.getString('track');

    if (!trackQuery) {
      throw new Error('コース名を指定してください');
    }

    const track = searchTrack(trackQuery);
    if (!track) {
      throw new Error(`コースが見つかりませんでした。\n入力されたコース名:  ${trackQuery}`);
    }

    const discordUserId = interaction.member?.user?.id || interaction.user?.id;
    if (!discordUserId) {
      throw new Error('ユーザーIDが取得できませんでした');
    }

    const lastRecord = await nitaRepository.selectNitaByUserAndTrack(discordUserId, track.code);

    if (!lastRecord) {
      await interaction.reply({
        content: `タイムが登録されていません。\n\n${makeMetaMessage(track, lastRecord)}`,
      });
      return;
    }

    const newMilliseconds = lastRecord.lastMilliseconds;

    if (newMilliseconds) {
      lastRecord.lastMilliseconds = undefined;
      lastRecord.milliseconds = newMilliseconds;
      await nitaRepository.updateNita(lastRecord);
      await interaction.reply({
        content: `タイムを戻しました。\n\n${makeMetaMessage(track, lastRecord)}`,
      });
      return;
    }
    // 履歴がない場合は削除する
    await nitaRepository.deleteNita(discordUserId, track.code);
    await interaction.reply({
      content: `${track.trackName}のタイムを削除しました。`,
    });
    return;
  },
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
