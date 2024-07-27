// @ts-check
import 'dotenv/config';
import { connect } from '@planetscale/database';

/**
 * @typedef {import('../../types').Nita} InsertNitaParameters
 */

/**
 * @typedef {import('../../types').Nita} UpdateNitaParameters
 */

export const planetScaleRepository = () => {
  const config = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  };

  const conn = connect(config);

  return {
    /**
     * @param {InsertNitaParameters} params
     */
    async insertNita(params) {
      const { trackCode, discordUserId, milliseconds, lastMilliseconds } = params;
      const results = await conn.execute(
        'INSERT INTO nita (track_code, discord_user_id, milliseconds, last_milliseconds) VALUES (?, ?, ?, ?)',
        [trackCode, discordUserId, milliseconds, lastMilliseconds],
      );
      return results;
    },
    /**
     * @param {UpdateNitaParameters} params
     */
    async updateNita(params) {
      const { trackCode, discordUserId, milliseconds, lastMilliseconds } = params;
      const results = await conn.execute(
        'UPDATE nita SET milliseconds = ?, last_milliseconds = ? WHERE discord_user_id = ? AND track_code = ?',
        [milliseconds, lastMilliseconds, discordUserId, trackCode],
      );
      return results;
    },
    /**
     * @param {string} discordUserId
     * @param {string} trackCode
     */
    async deleteNita(discordUserId, trackCode) {
      const results = await conn.execute('DELETE FROM nita WHERE discord_user_id = ? AND track_code = ?', [
        discordUserId,
        trackCode,
      ]);
      return results;
    },
    /**
     * @param {string} discordUserId
     * @param {string} trackCode
     * @returns {Promise<import('../../types').Nita | null>}
     */
    async selectNitaByUserAndTrack(discordUserId, trackCode) {
      const results = await conn.execute(
        'SELECT milliseconds, last_milliseconds FROM nita WHERE discord_user_id = ? AND track_code = ?',
        [discordUserId, trackCode],
      );
      if (results.size === 0) {
        return null;
      }
      // console.log(results.rows[0]);
      return {
        trackCode,
        discordUserId,
        milliseconds: results.rows[0].milliseconds,
        lastMilliseconds: results.rows[0].last_milliseconds,
      };
    },
    /**
     * @param {string} discordUserId
     * @returns {Promise<import('../../types').Nita[]>}
     */
    async selectNitaByUser(discordUserId) {
      const results = await conn.execute(
        'SELECT track_code, milliseconds, last_milliseconds FROM nita WHERE discord_user_id = ?',
        [discordUserId],
      );
      return results.rows.map((row) => ({
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
      const results = await conn.execute(
        'SELECT discord_user_id, milliseconds FROM nita WHERE discord_user_id IN (?) AND track_code = ? ORDER BY milliseconds ASC',
        [discordUserIds, trackCode],
      );
      return results.rows.map((row) => ({
        member: discordMembers.find((member) => member.user.id === row.discord_user_id) || discordMembers[0],
        milliseconds: row.milliseconds,
      }));
    },
  };
};
