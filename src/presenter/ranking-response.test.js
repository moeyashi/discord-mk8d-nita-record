// @ts-check
import { describe, expect, test } from 'vitest';
import { rankingResponse } from './ranking-response.js';

describe(rankingResponse, () => {
  const sampleTrack = {
    code: 'MKS',
    trackName: 'マリオカートスタジアム',
    // 値は適当
    nitaVSWRMilliseconds: 60 * 1000 + 48 * 1000 + 256,
    nitaVSWRUrl: 'https://example.com',
    nitaAllCombinationWRMilliseconds: 60 * 1000 + 47 * 1000 + 825,
    aliases: [],
  };
  describe('contentに何位から何位までのメッセージが含まれる', () => {
    describe('ランキング件数が20件の場合', () => {
      const ranking = Array.from({ length: 20 }).map((_, i) => ({
        member: makeGuildMember({ nickname: `user${i + 1}` }),
        milliseconds: sampleTrack.nitaVSWRMilliseconds + i,
      }));
      describe('1ページ目の場合', () => {
        const actual = rankingResponse(sampleTrack, 1, ranking, null, 50);
        test('1位から20位までのメッセージが返却されること', () => {
          expect(actual.content).toEqual('### NITAランキング - マリオカートスタジアム\n全50位のうち 1位から20位まで');
        });
      });
      describe('2ページ目の場合', () => {
        const actual = rankingResponse(sampleTrack, 2, ranking, null, 50);
        test('21位から40位までのメッセージが返却されること', () => {
          expect(actual.content).toEqual('### NITAランキング - マリオカートスタジアム\n全50位のうち 21位から40位まで');
        });
      });
    });
    describe('ランキング件数が19件の場合', () => {
      const ranking = Array.from({ length: 19 }).map((_, i) => ({
        member: makeGuildMember({ nickname: `user${i + 1}` }),
        milliseconds: sampleTrack.nitaVSWRMilliseconds + i,
      }));
      describe('1ページ目の場合', () => {
        const actual = rankingResponse(sampleTrack, 1, ranking, null, 19);
        test('1位から19位までのメッセージが返却されること', () => {
          expect(actual.content).toEqual('### NITAランキング - マリオカートスタジアム\n全19位のうち 1位から19位まで');
        });
      });
      describe('2ページ目の場合', () => {
        const actual = rankingResponse(sampleTrack, 2, ranking, null, 39);
        test('21位から39位までのメッセージが返却されること', () => {
          expect(actual.content).toEqual('### NITAランキング - マリオカートスタジアム\n全39位のうち 21位から39位まで');
        });
      });
    });
  });
  describe('contentに自分の順位が含まれる', () => {
    const ranking = [
      {
        member: makeGuildMember({ nickname: 'user' }),
        milliseconds: sampleTrack.nitaVSWRMilliseconds,
      },
    ];
    describe('自分の順位が1位の場合', () => {
      const actual = rankingResponse(sampleTrack, 1, ranking, 1, 1);
      test('自分の順位が含まれるメッセージが返却されること', () => {
        expect(actual.content).toEqual(
          '### NITAランキング - マリオカートスタジアム\n全1位のうち 1位から1位まで\n\nあなたの順位: 1位',
        );
      });
    });
    describe('自分の記録が未登録の場合', () => {
      const actual = rankingResponse(sampleTrack, 1, ranking, null, 1);
      test('自分の順位が含まれないメッセージが返却されること', () => {
        expect(actual.content).toEqual('### NITAランキング - マリオカートスタジアム\n全1位のうち 1位から1位まで');
      });
    });
  });
  describe('rank毎に色分けされたembedsが返却される', () => {
    describe('秒数の境界値テスト', () => {
      const actual = rankingResponse(
        sampleTrack,
        1,
        [
          {
            member: makeGuildMember({ nickname: 'user1' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds - 1,
          },
          {
            member: makeGuildMember({ nickname: 'user2' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds,
          },
          {
            member: makeGuildMember({ nickname: 'user3' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 1,
          },
          {
            member: makeGuildMember({ nickname: 'user4' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 999,
          },
          {
            member: makeGuildMember({ nickname: 'user5' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 1000,
          },
          {
            member: makeGuildMember({ nickname: 'user6' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 1001,
          },
          {
            member: makeGuildMember({ nickname: 'user7' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 1999,
          },
          {
            member: makeGuildMember({ nickname: 'user8' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 2000,
          },
          {
            member: makeGuildMember({ nickname: 'user9' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 2001,
          },
          {
            member: makeGuildMember({ nickname: 'user10' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 2999,
          },
          {
            member: makeGuildMember({ nickname: 'user11' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 3000,
          },
          {
            member: makeGuildMember({ nickname: 'user12' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 3001,
          },
          {
            member: makeGuildMember({ nickname: 'user13' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 3999,
          },
          {
            member: makeGuildMember({ nickname: 'user14' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 4000,
          },
          {
            member: makeGuildMember({ nickname: 'user15' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 4001,
          },
          {
            member: makeGuildMember({ nickname: 'user16' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 4999,
          },
          {
            member: makeGuildMember({ nickname: 'user17' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 5000,
          },
          {
            member: makeGuildMember({ nickname: 'user18' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 5001,
          },
          {
            member: makeGuildMember({ nickname: 'user19' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 5999,
          },
          {
            member: makeGuildMember({ nickname: 'user20' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 6000,
          },
          {
            member: makeGuildMember({ nickname: 'user21' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 6001,
          },
          {
            member: makeGuildMember({ nickname: 'user22' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 6999,
          },
          {
            member: makeGuildMember({ nickname: 'user23' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 7000,
          },
          {
            member: makeGuildMember({ nickname: 'user24' }),
            milliseconds: sampleTrack.nitaVSWRMilliseconds + 7001,
          },
        ],
        null,
        24,
      );
      test('1落ちのembedが返却されること', () => {
        expect(actual.embeds?.[0]).toEqual({
          title: '1落ち - 5 users',
          color: 13632027,
          fields: [
            { name: 'user1', value: '1:48.255 WR + -0.001秒' },
            { name: 'user2', value: '1:48.256 WR + 0秒' },
            { name: 'user3', value: '1:48.257 WR + 0.001秒' },
            { name: 'user4', value: '1:49.255 WR + 0.999秒' },
            { name: 'user5', value: '1:49.256 WR + 1秒' },
          ],
        });
      });
      test('2落ちのembedが返却されること', () => {
        expect(actual.embeds?.[1]).toEqual({
          title: '2落ち - 3 users',
          color: 16312092,
          fields: [
            { name: 'user6', value: '1:49.257 WR + 1.001秒' },
            { name: 'user7', value: '1:50.255 WR + 1.999秒' },
            { name: 'user8', value: '1:50.256 WR + 2秒' },
          ],
        });
      });
      test('3落ちのembedが返却されること', () => {
        expect(actual.embeds?.[2]).toEqual({
          title: '3落ち - 3 users',
          color: 8311585,
          fields: [
            { name: 'user9', value: '1:50.257 WR + 2.001秒' },
            { name: 'user10', value: '1:51.255 WR + 2.999秒' },
            { name: 'user11', value: '1:51.256 WR + 3秒' },
          ],
        });
      });
      test('4落ちのembedが返却されること', () => {
        expect(actual.embeds?.[3]).toEqual({
          title: '4落ち - 3 users',
          color: 4886754,
          fields: [
            { name: 'user12', value: '1:51.257 WR + 3.001秒' },
            { name: 'user13', value: '1:52.255 WR + 3.999秒' },
            { name: 'user14', value: '1:52.256 WR + 4秒' },
          ],
        });
      });
      test('5落ちのembedが返却されること', () => {
        expect(actual.embeds?.[4]).toEqual({
          title: '5落ち - 3 users',
          color: 12390624,
          fields: [
            { name: 'user15', value: '1:52.257 WR + 4.001秒' },
            { name: 'user16', value: '1:53.255 WR + 4.999秒' },
            { name: 'user17', value: '1:53.256 WR + 5秒' },
          ],
        });
      });
      test('6落ち以上のembedが返却されること', () => {
        expect(actual.embeds?.[5]).toEqual({
          title: '6落ち以上 - 7 users',
          color: undefined,
          fields: [
            { name: 'user18', value: '1:53.257 WR + 5.001秒' },
            { name: 'user19', value: '1:54.255 WR + 5.999秒' },
            { name: 'user20', value: '1:54.256 WR + 6秒' },
            { name: 'user21', value: '1:54.257 WR + 6.001秒' },
            { name: 'user22', value: '1:55.255 WR + 6.999秒' },
            { name: 'user23', value: '1:55.256 WR + 7秒' },
            { name: 'user24', value: '1:55.257 WR + 7.001秒' },
          ],
        });
      });
    });
    describe('同一ランクに26ユーザー以上存在する場合はembedが分割される', () => {
      describe('ユーザー数の境界値テスト', () => {
        test('25ユーザーの場合embedが1つ', () => {
          const actual = rankingResponse(
            sampleTrack,
            1,
            Array.from({ length: 25 }).map((_, i) => ({
              member: makeGuildMember({ nickname: `user${i + 1}` }),
              milliseconds: sampleTrack.nitaVSWRMilliseconds,
            })),
            null,
            25,
          );
          expect(actual.embeds?.length).toEqual(1);
        });
        test('26ユーザーの場合embedが2つ', () => {
          const actual = rankingResponse(
            sampleTrack,
            1,
            Array.from({ length: 26 }).map((_, i) => ({
              member: makeGuildMember({ nickname: `user${i + 1}` }),
              milliseconds: sampleTrack.nitaVSWRMilliseconds,
            })),
            null,
            26,
          );
          expect(actual.embeds?.length).toEqual(2);
        });
      });
    });
  });

  describe('ランキングが空の場合', () => {
    const actual = rankingResponse(sampleTrack, 1, [], null, 0);
    test('タイムが登録されていないメッセージが返却されること', () => {
      const expected = {
        content: 'まだマリオカートスタジアムのNITAのタイムが登録されていません。',
      };
      expect(actual).toEqual(expected);
    });
  });
});

/**
 * @param {Pick<Partial<import('discord.js').GuildMember>, 'nickname'>} member
 * @returns {import('discord.js').GuildMember}
 */
const makeGuildMember = (member) => {
  // @ts-expect-error
  return member;
};
