// @ts-check
import 'dotenv/config';
import postgres from 'postgres';

export const makePostgresConnection = () => {
  /**
   * @type {import('postgres').Options<{}>}
   */
  const config = {
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    port: Number(process.env.DATABASE_PORT || '5432'),
  };

  /**
   * @type {import('postgres').Sql<{}>}
   */
  const sql = postgres(config);

  return sql;
};
