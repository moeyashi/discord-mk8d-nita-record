// @ts-check
import 'dotenv/config';
import postgres from 'postgres';

/**
 * @typedef {import('../../types').Nita} InsertNitaParameters
 */

/**
 * @typedef {import('../../types').Nita} UpdateNitaParameters
 */

/**
 * @returns {import('../../types').NitaRepository}
 */
export const postgresNitaRepository = () => {
  const config = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
  };

  const sql = postgres(config);

  return {
    /**
     * @param {InsertNitaParameters} params
     */
    async insertNita(params) {
      const { trackCode, discordUserId, milliseconds, lastMilliseconds } = params;
      const results = await sql`
        INSERT INTO nita (track_code, discord_user_id, milliseconds, last_milliseconds) VALUES (${trackCode}, ${discordUserId}, ${milliseconds}, ${lastMilliseconds || null})
      `;
      return results;
    },
    /**
     * @param {UpdateNitaParameters} params
     */
    async updateNita(params) {
      const { trackCode, discordUserId, milliseconds, lastMilliseconds } = params;
      const results = await sql`
        UPDATE nita SET milliseconds = ${milliseconds}, last_milliseconds = ${lastMilliseconds || null} WHERE discord_user_id = ${discordUserId} AND track_code = ${trackCode}
      `;
      return results;
    },
    /**
     * @param {string} discordUserId
     * @param {string} trackCode
     */
    async deleteNita(discordUserId, trackCode) {
      const results = await sql`
        DELETE FROM nita WHERE discord_user_id = ${discordUserId} AND track_code = ${trackCode}
      `;
      return results;
    },
    /**
     * @param {string} discordUserId
     * @param {string} trackCode
     * @returns {Promise<import('../../types').Nita | null>}
     */
    async selectNitaByUserAndTrack(discordUserId, trackCode) {
      const results = await sql`
        SELECT milliseconds, last_milliseconds FROM nita WHERE discord_user_id = ${discordUserId} AND track_code = ${trackCode}
      `;
      if (results.length === 0) {
        return null;
      }
      return {
        trackCode,
        discordUserId,
        milliseconds: results[0].milliseconds,
        lastMilliseconds: results[0].last_milliseconds,
      };
    },
    /**
     * @param {string} discordUserId
     * @returns {Promise<import('../../types').Nita[]>}
     */
    async selectNitaByUser(discordUserId) {
      const results = await sql`
        SELECT track_code, milliseconds, last_milliseconds FROM nita WHERE discord_user_id = ${discordUserId}
      `;
      return results.map((row) => ({
        trackCode: row.track_code,
        discordUserId,
        milliseconds: row.milliseconds,
        lastMilliseconds: row.last_milliseconds,
      }));
    },
    /**
     * @param {string} trackCode
     * @param {import('discord.js').GuildMember[]} discordMembers
     * @returns {Promise<{member: import('discord.js').GuildMember, milliseconds: number}[]>}
     */
    async selectRanking(trackCode, discordMembers) {
      const discordUserIds = discordMembers.map((member) => member.user.id);
      const results = await sql`
        SELECT discord_user_id, milliseconds FROM nita WHERE discord_user_id IN ${sql(discordUserIds)} AND track_code = ${trackCode} ORDER BY milliseconds ASC
      `;
      return results.map((row) => ({
        member: discordMembers.find(member => member.user.id === row.discord_user_id) || discordMembers[0],
        milliseconds: row.milliseconds,
      }));
    },
  };
};