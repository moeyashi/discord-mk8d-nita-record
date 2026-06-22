// @ts-check
// import 'dotenv/config';
// import postgres from 'postgres';

/**
 * @param {import('postgres').Sql<{}>} sql
 * @returns {import('../../types').NitaRepository}
 */
export const postgresWorldNitaRepository = (sql) => {
  return {
    async insertNita(params) {
      const { trackCode, discordUserId, milliseconds, lastMilliseconds } = params;
      await sql`
        INSERT INTO world_nita_records (track_code, discord_user_id, milliseconds, last_milliseconds) VALUES (${trackCode}, ${discordUserId}, ${milliseconds}, ${lastMilliseconds || null})
      `;
      return;
    },
    async updateNita(params) {
      const { trackCode, discordUserId, milliseconds, lastMilliseconds } = params;
      await sql`
        UPDATE world_nita_records SET milliseconds = ${milliseconds}, last_milliseconds = ${lastMilliseconds || null} WHERE discord_user_id = ${discordUserId} AND track_code = ${trackCode}
      `;
      return;
    },
    async deleteNita(discordUserId, trackCode) {
      await sql`
        DELETE FROM world_nita_records WHERE discord_user_id = ${discordUserId} AND track_code = ${trackCode}
      `;
      return;
    },
    async deleteAllNita(discordUserId) {
      await sql`
        DELETE FROM world_nita_records WHERE discord_user_id = ${discordUserId}
      `;
      return;
    },
    async selectNitaByUserAndTrack(discordUserId, trackCode) {
      const results = await sql`
        SELECT milliseconds, last_milliseconds FROM world_nita_records WHERE discord_user_id = ${discordUserId} AND track_code = ${trackCode}
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
    async selectNitaByUser(discordUserId) {
      const results = await sql`
        SELECT track_code, milliseconds, last_milliseconds FROM world_nita_records WHERE discord_user_id = ${discordUserId}
      `;
      return results.map((row) => ({
        trackCode: row.track_code,
        discordUserId,
        milliseconds: row.milliseconds,
        lastMilliseconds: row.last_milliseconds,
      }));
    },
    async selectRanking(trackCode, discordMembers, limit = 20, offset = 0) {
      const discordUserIds = discordMembers.map((member) => member.user.id);
      const results = await sql`
        SELECT discord_user_id, milliseconds
        FROM world_nita_records
        WHERE discord_user_id IN ${sql(discordUserIds)}
        AND track_code = ${trackCode}
        ORDER BY milliseconds ASC
        OFFSET ${offset}
        LIMIT ${limit}
      `;
      return results.map((row) => ({
        member: discordMembers.find((member) => member.user.id === row.discord_user_id) || discordMembers[0],
        milliseconds: row.milliseconds,
      }));
    },
    async selectRankByUser(trackCode, discordUserId, discordMembers) {
      const discordUserIds = discordMembers.map((member) => member.user.id);
      const results = await sql`
        SELECT COUNT(n1.discord_user_id) as rank
        FROM world_nita_records as n1
        INNER JOIN world_nita_records as n2 on n2.discord_user_id = ${discordUserId} AND n1.track_code = n2.track_code
        WHERE n1.discord_user_id IN ${sql(discordUserIds)}
        AND n1.track_code = ${trackCode}
        AND (
          n1.milliseconds < n2.milliseconds
          OR n1.discord_user_id = ${discordUserId}
        )
      `;
      const rank = Number(results[0].rank);
      return rank || null;
    },
    async countExistsNita(trackCode, discordMembers) {
      const discordUserIds = discordMembers.map((member) => member.user.id);
      const results = await sql`
        SELECT COUNT(*) as count
        FROM world_nita_records
        WHERE discord_user_id IN ${sql(discordUserIds)}
        AND track_code = ${trackCode}
      `;
      return Number(results[0].count);
    },
    async selectRival(executorDiscordId, rivalDiscordId) {
      const results = await sql`
        SELECT
          nita1.track_code,
          nita1.milliseconds AS executor_milliseconds,
          nita2.milliseconds AS rival_milliseconds
        FROM (SELECT * FROM world_nita_records WHERE discord_user_id = ${executorDiscordId}) AS nita1
        INNER JOIN (SELECT * FROM world_nita_records WHERE discord_user_id = ${rivalDiscordId}) AS nita2
          ON nita1.track_code = nita2.track_code
        ORDER BY nita1.milliseconds - nita2.milliseconds
      `;
      return results.map((row) => ({
        trackCode: row.track_code,
        executorMilliseconds: row.executor_milliseconds,
        rivalMilliseconds: row.rival_milliseconds,
      }));
    },
    async selectStats(trackCode, wrMilliseconds) {
      console.info(trackCode, wrMilliseconds);
      const results = await sql`
        SELECT
          count(*) as total,
          SUM(CASE WHEN milliseconds < ${wrMilliseconds + 1000} THEN 1 ELSE 0 END) as rank1,
          SUM(CASE WHEN milliseconds >= ${wrMilliseconds + 1000} AND milliseconds < ${wrMilliseconds + 2000} THEN 1 ELSE 0 END) as rank2,
          SUM(CASE WHEN milliseconds >= ${wrMilliseconds + 2000} AND milliseconds < ${wrMilliseconds + 3000} THEN 1 ELSE 0 END) as rank3,
          SUM(CASE WHEN milliseconds >= ${wrMilliseconds + 3000} AND milliseconds < ${wrMilliseconds + 4000} THEN 1 ELSE 0 END) as rank4,
          SUM(CASE WHEN milliseconds >= ${wrMilliseconds + 4000} AND milliseconds < ${wrMilliseconds + 5000} THEN 1 ELSE 0 END) as rank5,
          SUM(CASE WHEN milliseconds >= ${wrMilliseconds + 5000} THEN 1 ELSE 0 END) as over
        FROM world_nita_records
        WHERE track_code = ${trackCode}
      `;
      console.info(`
        SELECT
          count(*) as total,
          SUM(CASE WHEN milliseconds < ${wrMilliseconds + 1000} THEN 1 ELSE 0 END) as rank1,
          SUM(CASE WHEN milliseconds >= ${wrMilliseconds + 1000} AND milliseconds < ${wrMilliseconds + 2000} THEN 1 ELSE 0 END) as rank2,
          SUM(CASE WHEN milliseconds >= ${wrMilliseconds + 2000} AND milliseconds < ${wrMilliseconds + 3000} THEN 1 ELSE 0 END) as rank3,
          SUM(CASE WHEN milliseconds >= ${wrMilliseconds + 3000} AND milliseconds < ${wrMilliseconds + 4000} THEN 1 ELSE 0 END) as rank4,
          SUM(CASE WHEN milliseconds >= ${wrMilliseconds + 4000} AND milliseconds < ${wrMilliseconds + 5000} THEN 1 ELSE 0 END) as rank5,
          SUM(CASE WHEN milliseconds >= ${wrMilliseconds + 5000} THEN 1 ELSE 0 END) as over
        FROM world_nita_records
        WHERE track_code = ${trackCode}
      `);
      return {
        total: Number(results[0].total),
        rank1: Number(results[0].rank1),
        rank2: Number(results[0].rank2),
        rank3: Number(results[0].rank3),
        rank4: Number(results[0].rank4),
        rank5: Number(results[0].rank5),
        over: Number(results[0].over),
      };
    },
  };
};
