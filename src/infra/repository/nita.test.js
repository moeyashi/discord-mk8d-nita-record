import { describe } from 'vitest';
import { testWithPostgres } from '../../test-utils.js';
import { postgresNitaRepository } from './nita.js';

describe('postgresNitaRepository', () => {
  describe('selectRanking', () => {
    const trackCode = 'MKS';
    const users = Array.from({ length: 21 }).map((_, i) => ({
      user: { id: `${i + 1}` },
    }));

    testWithPostgres('上位20名が取得されること', async ({ sql, expect }) => {
      const repo = postgresNitaRepository(sql);
      await seedNita(repo, trackCode, users);
      const ranking = await repo.selectRanking(trackCode, users);
      expect(ranking).toEqual([
        { member: { user: { id: '1' } }, milliseconds: 1001 },
        { member: { user: { id: '3' } }, milliseconds: 1003 },
        { member: { user: { id: '4' } }, milliseconds: 1004 },
        { member: { user: { id: '5' } }, milliseconds: 1005 },
        { member: { user: { id: '6' } }, milliseconds: 1006 },
        { member: { user: { id: '7' } }, milliseconds: 1007 },
        { member: { user: { id: '8' } }, milliseconds: 1008 },
        { member: { user: { id: '9' } }, milliseconds: 1009 },
        { member: { user: { id: '10' } }, milliseconds: 1010 },
        { member: { user: { id: '11' } }, milliseconds: 1011 },
        { member: { user: { id: '12' } }, milliseconds: 1012 },
        { member: { user: { id: '13' } }, milliseconds: 1013 },
        { member: { user: { id: '14' } }, milliseconds: 1014 },
        { member: { user: { id: '15' } }, milliseconds: 1015 },
        { member: { user: { id: '16' } }, milliseconds: 1016 },
        { member: { user: { id: '17' } }, milliseconds: 1017 },
        { member: { user: { id: '18' } }, milliseconds: 1018 },
        { member: { user: { id: '19' } }, milliseconds: 1019 },
        { member: { user: { id: '20' } }, milliseconds: 1020 },
        { member: { user: { id: '21' } }, milliseconds: 1021 },
      ]);
    });

    testWithPostgres('offsetが効くこと', async ({ sql, expect }) => {
      const repo = postgresNitaRepository(sql);
      await seedNita(repo, trackCode, users);
      const ranking = await repo.selectRanking(trackCode, users, 20, 1);
      expect(ranking).toEqual([
        { member: { user: { id: '3' } }, milliseconds: 1003 },
        { member: { user: { id: '4' } }, milliseconds: 1004 },
        { member: { user: { id: '5' } }, milliseconds: 1005 },
        { member: { user: { id: '6' } }, milliseconds: 1006 },
        { member: { user: { id: '7' } }, milliseconds: 1007 },
        { member: { user: { id: '8' } }, milliseconds: 1008 },
        { member: { user: { id: '9' } }, milliseconds: 1009 },
        { member: { user: { id: '10' } }, milliseconds: 1010 },
        { member: { user: { id: '11' } }, milliseconds: 1011 },
        { member: { user: { id: '12' } }, milliseconds: 1012 },
        { member: { user: { id: '13' } }, milliseconds: 1013 },
        { member: { user: { id: '14' } }, milliseconds: 1014 },
        { member: { user: { id: '15' } }, milliseconds: 1015 },
        { member: { user: { id: '16' } }, milliseconds: 1016 },
        { member: { user: { id: '17' } }, milliseconds: 1017 },
        { member: { user: { id: '18' } }, milliseconds: 1018 },
        { member: { user: { id: '19' } }, milliseconds: 1019 },
        { member: { user: { id: '20' } }, milliseconds: 1020 },
        { member: { user: { id: '21' } }, milliseconds: 1021 },
        { member: { user: { id: '2' } }, milliseconds: 99999 },
      ]);
    });
  });

  describe('selectRankByUser', async () => {
    const trackCode = 'MKS';
    const users = Array.from({ length: 21 }).map((_, i) => ({
      user: { id: `${i + 1}` },
    }));
    const userId = '1';

    testWithPostgres('1位のユーザーを指定した場合1が返却されること', async ({ sql, expect }) => {
      const repo = postgresNitaRepository(sql);
      await seedNita(repo, trackCode, users);
      const actual = await repo.selectRankByUser(trackCode, userId, users);
      expect(actual).toEqual(1);
    });
    testWithPostgres('2位のユーザーを指定した場合2が返却されること', async ({ sql, expect }) => {
      const repo = postgresNitaRepository(sql);
      await seedNita(repo, trackCode, users);
      const actual = await repo.selectRankByUser(trackCode, '3', users);
      expect(actual).toEqual(2);
    });
    testWithPostgres('21位のユーザーを指定した場合21が返却されること', async ({ sql, expect }) => {
      const repo = postgresNitaRepository(sql);
      await seedNita(repo, trackCode, users);
      const actual = await repo.selectRankByUser(trackCode, '2', users);
      expect(actual).toEqual(21);
    });
    testWithPostgres('記録なしユーザーを指定した場合nullが返却されること', async ({ sql, expect }) => {
      const repo = postgresNitaRepository(sql);
      await seedNita(repo, trackCode, users);
      const actual = await repo.selectRankByUser(trackCode, '22', users);
      expect(actual).toBeNull();
    });
  });

  describe('countExistsNita', () => {
    const trackCode = 'MKS';

    testWithPostgres('0件の場合0を返却する', async ({ sql, expect }) => {
      const repo = postgresNitaRepository(sql);
      const users = Array.from({ length: 21 }).map((_, i) => ({
        user: { id: `${i + 1}` },
      }));
      const actual = await repo.countExistsNita(trackCode, users);
      expect(actual).toEqual(0);
    });

    testWithPostgres('1件の場合1を返却する', async ({ sql, expect }) => {
      const repo = postgresNitaRepository(sql);
      const users = Array.from({ length: 21 }).map((_, i) => ({
        user: { id: `${i + 1}` },
      }));
      await repo.insertNita({
        discordUserId: '1',
        trackCode,
        milliseconds: 1000,
      });
      const actual = await repo.countExistsNita(trackCode, users);
      expect(actual).toEqual(1);
      await repo.deleteNita('1', trackCode);
    });

    testWithPostgres('2件の場合2を返却する', async ({ sql, expect }) => {
      const repo = postgresNitaRepository(sql);
      const users = Array.from({ length: 21 }).map((_, i) => ({
        user: { id: `${i + 1}` },
      }));
      await repo.insertNita({
        discordUserId: '1',
        trackCode,
        milliseconds: 1000,
      });
      await repo.insertNita({
        discordUserId: '2',
        trackCode,
        milliseconds: 1000,
      });
      const actual = await repo.countExistsNita(trackCode, users);
      expect(actual).toEqual(2);
      await repo.deleteNita('1', trackCode);
      await repo.deleteNita('2', trackCode);
    });
  });
});

const seedNita = async (repo, trackCode, users) => {
  for (const i of users) {
    await repo.insertNita({
      discordUserId: i.user.id,
      trackCode,
      milliseconds: i.user.id === '2' ? 99999 : 1000 + Number(i.user.id),
    });
  }
};
