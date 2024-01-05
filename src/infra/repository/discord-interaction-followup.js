// @ts-check
import { REST, Routes } from 'discord.js';
export const discordInteractionFollowupRepository = async () => {
  const token = process.env.DISCORD_BOT_TOKEN || '';
  const rest = new REST().setToken(token);

  return {
    /**
     * @param {string} applicationId
     * @param {string} interactionToken
     * @param {import('discord-api-types/v10').RESTPostAPIWebhookWithTokenJSONBody} body
     */
    followup: async (applicationId, interactionToken, body) => {
      await rest.post(Routes.webhook(applicationId, interactionToken), { body });
    },
  };
};
