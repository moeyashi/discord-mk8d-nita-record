import { describe } from 'vitest';
import { testWithPostgres } from '../../test-utils.js';
import { postgresWorldNitaRepository } from './world-nita-repository.js';

describe('postgresWorldNitaRepository', () => {
  describe('selectRanking', () => {
    const trackCode = 'DMC01';
    const users = Array.from({ length: 21 }).map((_, i) => ({
      user: { id: `${i + 1}` },
    }));

    testWithPostgres('上位20名が取得されること', async ({ sql, expect }) => {
      const repo = postgresWorldNitaRepository(sql);
      await insert21NitaRecords(repo, trackCode, users);
      const ranking = await repo.selectRanking(trackCode, users);
      expect(ranking.length).toBe(20);
    });

    testWithPostgres('offsetが効くこと', async ({ sql, expect }) => {
      const repo = postgresWorldNitaRepository(sql);
      await insert21NitaRecords(repo, trackCode, users);
      const ranking = await repo.selectRanking(trackCode, users, 20, 1);
      expect(ranking.length).toBe(20);
    });
  });
});

const insert21NitaRecords = async (repo, trackCode, users) => {
  for (const i of users) {
    await repo.insertNita({
      discordUserId: i.user.id,
      trackCode,
      milliseconds: i.user.id === '2' ? 99999 : 1000 + Number(i.user.id),
    });
  }
};
