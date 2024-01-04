// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { planetScaleRepository } from '../infra/repository/planetscale.js';
import { InteractionResponseType, MessageFlags } from 'discord-api-types/v10';
import { validateSlashCommand } from '../util/validate-slash-command.js';
import { searchTrack } from '../const/track.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('nita-list')
    .setDescription('NITAのタイムを確認します。'),
  execute: async (interaction) => {
    try {
      const { err } = validateSlashCommand(interaction);
      if (err) {
        return err;
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

      const nitaList = await repository.selectNitaByUser(discordUserId);
      const nitaAndTrackList = nitaList.map((nita) => {
        const track = searchTrack(nita.trackCode);
        return {
          nita,
          track,
          diffWRnNita: track?.nitaVSWRMilliseconds ? track.nitaVSWRMilliseconds - nita.milliseconds : Number.MAX_SAFE_INTEGER,
        };
      }).sort((a, b) => b.diffWRnNita - a.diffWRnNita);

      /** @type {import('discord-api-types/v10').APIEmbed[]} */
      const embeds = [];
      return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          embeds: nitaAndTrackList.reduce((pv, cv, i) => {
            if (i % 25 === 0) {
              pv.push({
                title: 'NITAタイム一覧',
                fields: [],
              });
            }
            pv[pv.length - 1].fields?.push({
              name: cv.track?.trackName || cv.nita.trackCode,
              value: `${displayMilliseconds(cv.nita.milliseconds)} ${Math.ceil(cv.diffWRnNita)}落ち`,
            });
            return pv;
          }, embeds),
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
