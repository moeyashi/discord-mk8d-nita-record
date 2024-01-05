// @ts-check
import { REST, Routes } from 'discord.js';
export const discordInteractionFollowupRepository = async () => {
  const token = process.env.DISCORD_BOT_TOKEN || '';
  const rest = new REST().setToken(token);

  return {
    /**
     * @param {import('discord-api-types/v10').APIApplicationCommandInteraction} interaction
     * @param {import('discord-api-types/v10').RESTPostAPIWebhookWithTokenJSONBody} body
     */
    followup: async (interaction, body) => {
      await rest.post(Routes.webhook(interaction.application_id, interaction.token), { body });
    },
  };
};
