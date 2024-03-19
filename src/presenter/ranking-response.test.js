// @ts-check
import { describe, expect, test } from 'vitest';
import { rankingResponse } from './ranking-response.js';

describe(rankingResponse, () => {
  const sampleTrack = {
    code: 'MKS',
    trackName: 'マリオカートスタジアム',
    // 値は適当
    nitaVSWRMilliseconds: 60 * 1000 + 48 * 1000 + 256,
    nitaAllCombinationWRMilliseconds: 60 * 1000 + 47 * 1000 + 825,
    aliases: [],
  };
  describe('contentに何位から何位までのメッセージが含まれる', () => {
    describe('ランキング件数が20件の場合', () => {
      const ranking = Array.from({ length: 20 }).map((_, i) => ({
        member: makeGuildMember({ nickname: `user${i + 1}` }),
        milliseconds: 60 * 1000 + 48 * 1000 + 256 + i,
      }));
      describe('1ページ目の場合', () => {
        const actual = rankingResponse(sampleTrack, 1, ranking);
        test('1位から20位までのメッセージが返却されること', () => {
          expect(actual.content).toEqual('## NITAランキング - マリオカートスタジアム\n1位から20位まで');
        });
      });
      describe('2ページ目の場合', () => {
        const actual = rankingResponse(sampleTrack, 2, ranking);
        test('21位から40位までのメッセージが返却されること', () => {
          expect(actual.content).toEqual('## NITAランキング - マリオカートスタジアム\n21位から40位まで');
        });
      });
    });
    describe('ランキング件数が19件の場合', () => {
      const ranking = Array.from({ length: 19 }).map((_, i) => ({
        member: makeGuildMember({ nickname: `user${i + 1}` }),
        milliseconds: 60 * 1000 + 48 * 1000 + 256 + i,
      }));
      describe('1ページ目の場合', () => {
        const actual = rankingResponse(sampleTrack, 1, ranking);
        test('1位から19位までのメッセージが返却されること', () => {
          expect(actual.content).toEqual('## NITAランキング - マリオカートスタジアム\n1位から19位まで');
        });
      });
      describe('2ページ目の場合', () => {
        const actual = rankingResponse(sampleTrack, 2, ranking);
        test('21位から39位までのメッセージが返却されること', () => {
          expect(actual.content).toEqual('## NITAランキング - マリオカートスタジアム\n21位から39位まで');
        });
      });
    });
  });
  test('正常系', () => {
    const actual = rankingResponse(
      sampleTrack,
      1,
      [
        { member: makeGuildMember({ nickname: 'user1' }), milliseconds: 60 * 1000 + 48 * 1000 + 356 },
      ],
    );
    const expected = {
      content: '## NITAランキング - マリオカートスタジアム\n1位から1位まで',
      embeds: [
        {
          title: '1落ち - 1 users',
          color: 13632027,
          fields: [
            {
              name: 'user1',
              value: '1:48.356 WR + 0.1秒',
            },
          ],
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  describe('ランキングが空の場合', () => {
    const actual = rankingResponse(sampleTrack, 1, []);
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
