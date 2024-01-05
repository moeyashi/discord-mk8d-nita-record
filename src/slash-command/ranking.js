// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { planetScaleRepository } from '../infra/repository/planetscale.js';
import { ApplicationCommandOptionType, InteractionResponseType, MessageFlags } from 'discord-api-types/v10';
import { validateSlashCommand } from '../util/validate-slash-command.js';
import { searchTrack } from '../const/track.js';
import { discordMembersRepository } from '../infra/repository/discord-members.js';
import { ceilDiff, displayMilliseconds } from '../util/time.js';
import { discordInteractionFollowupRepository } from '../infra/repository/discord-interaction-followup.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('ranking')
    .setDescription('サーバー内のランキングを表示します。')
    .addStringOption(option => option.setName('track').setDescription('コース名').setRequired(true)),
  execute: async (interaction) => {
    const { data, err } = validateSlashCommand(interaction);
    if (err) {
      return err;
    }

    if (!interaction.guild_id) {
      return {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          content: 'サーバー内で実行してください',
          flags: MessageFlags.Ephemeral,
        },
      };
    }

    const trackOption = data.options?.find(option => option.name === 'track');
    if (trackOption?.type !== ApplicationCommandOptionType.String) {
      throw new Error('track option is not string');
    }
    const trackQuery = trackOption.value;
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

    doBackgroundProcess(interaction, track);

    return {
      type: InteractionResponseType.DeferredChannelMessageWithSource,
    };
  },
};

/**
 * @param {import('discord-api-types/v10').APIApplicationCommandInteraction} interaction
 * @param {import('../types').Track} track
 */
const doBackgroundProcess = async (interaction, track) => {
  try {
    const discordMembersRepo = await discordMembersRepository();
    if (!interaction.guild_id) {
      throw new Error('guild_id is empty');
    }
    const serverMembers = await discordMembersRepo.selectByGuildId(interaction.guild_id);

    const planetScaleRepo = planetScaleRepository();

    const ranking = await planetScaleRepo.selectRanking(track.code, serverMembers);

    /** @type {import('discord-api-types/v10').APIEmbed[]} */
    const embeds = [];

    const discordInteractionFollowupRepo = await discordInteractionFollowupRepository();
    return await discordInteractionFollowupRepo.followup(interaction, {
      embeds: ranking.reduce((pv, cv, i) => {
        if (i % 25 === 0) {
          pv.push({
            title: `${track.trackName}のNITAランキング`,
            fields: [],
          });
        }
        pv[pv.length - 1].fields?.push({
          name: cv.member.nick || cv.member.user?.username || 'unknown',
          value: `${displayMilliseconds(cv.milliseconds)} ${ceilDiff(track.nitaVSWRMilliseconds, cv.milliseconds)}落ち`,
        });
        return pv;
      }, embeds),
    });
  } catch (e) {
    console.error(e);
    const discordInteractionFollowupRepo = await discordInteractionFollowupRepository();
    return await discordInteractionFollowupRepo.followup(interaction, { content: `エラーが発生しました: ${e}` });
  }
};
