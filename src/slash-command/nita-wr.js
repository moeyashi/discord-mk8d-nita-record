// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { searchTrack } from '../const/track.js';
import { displayMilliseconds } from '../util/time.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('nita-wr')
    .setDescription('NITAのWRタイムを確認します。')
    .addStringOption((option) => option.setName('track').setDescription('コース名').setRequired(true)),
  execute: async (interaction) => {
    const trackQuery = interaction.options.getString('track');

    if (!trackQuery) {
      throw new Error('コース名を指定してください');
    }

    const track = searchTrack(trackQuery);
    if (!track) {
      throw new Error(`コースが見つかりませんでした。\n入力されたコース名:  ${trackQuery}`);
    }

    await interaction.reply({
      embeds: [
        {
          title: `${track.trackName}のWR`,
          fields: [
            {
              name: 'VSカスタム',
              value: displayMilliseconds(track.nitaVSWRMilliseconds),
            },
            {
              name: '全カスタム',
              value: displayMilliseconds(track.nitaAllCombinationWRMilliseconds),
            },
          ],
          url: track.nitaVSWRUrl,
        },
      ],
    });
    return;
  },
};
