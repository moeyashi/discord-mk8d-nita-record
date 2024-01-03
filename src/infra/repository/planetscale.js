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

  // const results = await conn.execute('select 1 from dual where 1=?', [1]);
  return {
    /**
     * @param {InsertNitaParameters} params
     */
    async insertNita(params) {
      const { trackCode, discordUserId, milliseconds } = params;
      const results = await conn.execute(
        'INSERT INTO nita (track_code, discord_user_id, milliseconds) VALUES (?, ?, ?)',
        [trackCode, discordUserId, milliseconds],
      );
      return results;
    },
    /**
     * @param {UpdateNitaParameters} params
     */
    async updateNita(params) {
      const { trackCode, discordUserId, milliseconds } = params;
      const results = await conn.execute(
        'UPDATE nita SET milliseconds = ? WHERE track_code = ? AND discord_user_id = ?',
        [milliseconds, trackCode, discordUserId],
      );
      return results;
    },
    /**
     * @param {string} discordUserId
     * @param {string} trackCode
     * @returns {Promise<import('../../types').Nita | null>}
     */
    async selectNitaByUserAndTrack(discordUserId, trackCode) {
      const results = await conn.execute(
        'SELECT milliseconds FROM nita WHERE discord_user_id = ? AND track_code = ?',
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
      };
    },
  };
};
