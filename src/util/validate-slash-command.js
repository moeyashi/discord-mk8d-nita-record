// @ts-check
import { ApplicationCommandType, InteractionResponseType, MessageFlags } from 'discord-api-types/v10';

/**
 * @param {import('discord-api-types/v10').APIApplicationCommandInteraction} interaction
 * @returns {({ data: import('discord-api-types/v10').APIChatInputApplicationCommandInteractionData, err: null}) | ({data: null, err: import('discord-api-types/v10').APIInteractionResponse})}
 */
export const validateSlashCommand = (interaction) => {
  if (interaction.data.type !== ApplicationCommandType.ChatInput) {
    return {
      data: null,
      err: {
        type: InteractionResponseType.ChannelMessageWithSource,
        data: {
          content: 'このコマンドはスラッシュコマンドです',
          flags: MessageFlags.Ephemeral,
        },
      },
    };
  }
  return { data: interaction.data, err: null };
};
