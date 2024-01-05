// @ts-check
import { SlashCommandBuilder } from 'discord.js';
import { InteractionResponseType } from 'discord-api-types/v10';
import { discordInteractionFollowupRepository } from '../infra/repository/discord-interaction-followup.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('test-deferred')
    .setDescription('test'),
  execute: async (interaction) => {
    doBackgroundProcess(interaction);
    return {
      type: InteractionResponseType.DeferredChannelMessageWithSource,
    };
  },
};

/**
 * @param {import('discord-api-types/v10').APIApplicationCommandInteraction} interaction
 */
const doBackgroundProcess = async (interaction) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const discordInteractionFollowupRepo = await discordInteractionFollowupRepository();
    return await discordInteractionFollowupRepo.followup(interaction, { content: 'test' });
  } catch (e) {
    console.error(e);
    const discordInteractionFollowupRepo = await discordInteractionFollowupRepository();
    return await discordInteractionFollowupRepo.followup(interaction, { content: `エラーが発生しました: ${e}` });
  }
};
