import { execSync } from 'child_process';
import { expect, test, describe, beforeAll } from 'vitest';
import { postgresNitaRepository } from './nita.js';

describe('postgresNitaRepository', () => {
  const repo = postgresNitaRepository();
  describe('selectRanking', async () => {
    const trackCode = 'MKS';
    const users = Array.from({ length: 21 }).map((_, i) => ({
      user: { id: `${i + 1}` },
    }));
    beforeAll(async () => {
      execSync('npm run db:reset');
      for (const i of users) {
        await repo.insertNita({
          discordUserId: i.user.id,
          trackCode,
          milliseconds: i.user.id === '2' ? 99999 : 1000 + Number(i.user.id),
        });
      }
    });

    test('上位20名が取得されること', async () => {
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

    test('offsetが効くこと', async () => {
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
});