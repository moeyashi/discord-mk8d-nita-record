// @ts-check
import { test } from 'vitest';
import { makePostgresConnection } from './lib.js';

/**
 * @type {import('vitest').TestAPI<{sql: import('postgres').Sql<{}>}>}
 */
export const testWithPostgres = test.extend({
  // biome-ignore lint/correctness/noEmptyPattern: vitestの仕様で`_`だとエラーになるため。
  sql: async ({}, use) => {
    const sql = makePostgresConnection();
    try {
      await sql.begin(async (subSql) => {
        await use(subSql);
        throw 'testWithPostgres';
      });
    } catch (e) {
      if (e !== 'testWithPostgres') {
        throw e;
      }
    }
  },
});
