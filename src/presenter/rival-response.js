// @ts-check

import { BLUE, RED } from '../const/color.js';
import { searchTrack } from '../const/track.js';
import { displayMilliseconds } from '../util/time.js';

/**
 * @param {Pick<import('discord.js').User, 'username' | 'globalName'>} userQuery
 * @param {Awaited<ReturnType<import('../types').NitaRepository['selectRival']>>} tracks
 * @return {import('discord.js').InteractionReplyOptions}
 */
export const rivalResponse = (userQuery, tracks) => {
  const res = {
    content: `VS ${userQuery.username || userQuery.globalName}`,
  };
  if (tracks.length === 0) {
    res.content = `${res.content}\n\n記録がありません`;
    return res;
  }
  /** @type {import('discord.js').APIEmbed[]} */
  const embeds = [];
  let createLose = false;
  for (let i = 0; i < tracks.length; i++) {
    const { trackCode, executorMilliseconds, rivalMilliseconds } = tracks[i];
    const track = searchTrack(trackCode);
    const win = executorMilliseconds < rivalMilliseconds;
    if (needNewEmbed(i, win, createLose)) {
      embeds.push({
        title: win ? '勝ち' : '負け',
        fields: [],
        color: win ? BLUE : RED,
      });
      if (!win) {
        createLose = true;
      }
    }
    const diffRival = executorMilliseconds - rivalMilliseconds;
    embeds[embeds.length - 1].fields?.push({
      name: track?.trackName || '',
      value: `**${Math.abs(diffRival) / 1000}秒** (${displayMilliseconds(executorMilliseconds)} VS ${displayMilliseconds(rivalMilliseconds)})`,
    });
  }
  res.embeds = embeds;
  return res;
};

/**
 * 25コースごと、または勝ちから負けに変わった場合に新しいembedを作成
 *
 * @param {number} i
 * @param {boolean} win
 * @param {boolean} createLose
 * @returns {boolean}
 */
const needNewEmbed = (i, win, createLose) => i % 25 === 0 || (!win && !createLose);
