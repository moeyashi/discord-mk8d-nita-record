// @ts-check
import { InteractionResponseType, MessageFlags } from 'discord-api-types/v10';
import { SlashCommandBuilder } from 'discord.js';

/** @type { import('../types').SlashCommand } */
export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  execute: async () => {
    return {
      type: InteractionResponseType.ChannelMessageWithSource,
      data: {
        content: 'Pong!',
        flags: MessageFlags.Ephemeral,
      },
    };
  },
};
