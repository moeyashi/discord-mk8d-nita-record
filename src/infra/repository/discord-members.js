// @ts-check
import { REST, Routes } from 'discord.js';
export const discordMembersRepository = async () => {
  const token = process.env.DISCORD_BOT_TOKEN || '';
  const rest = new REST().setToken(token);

  return {
    /**
     * @param {string} guildId
     */
    selectByGuildId: async (guildId) => {
      const data = await rest.get(Routes.guildMembers(guildId), { query: new URLSearchParams({ limit: '50' }) });
      return resolveTypeAs(
        /** @param {import('discord.js').RESTGetAPIGuildMembersResult} _ */
        (_) => _,
        data,
      );
    },
  };
};

// https://qiita.com/katai5plate/items/9405cecf11045b79bf64
/**
 * @template T
 * @param {(type: T) => any} def
 * @param {unknown} from
 * @returns {T}
 */
const resolveTypeAs = (def, from) => {
  // @ts-expect-error
  return from;
};
