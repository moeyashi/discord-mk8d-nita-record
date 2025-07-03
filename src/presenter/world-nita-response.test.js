// @ts-check
import { describe, expect, test } from 'vitest';
import { worldNitaListResponse } from './world-nita-response.js';

describe(worldNitaListResponse, () => {
  describe('nitaListが空の場合', () => {
    const actual = worldNitaListResponse([]);
    test('0件メッセージが返却されること', () => {
      expect(actual).toEqual({
        content: 'NITAのタイムが登録されていません。`/world-nita`コマンドを使って記録を登録してみましょう。',
      });
    });
  });
  describe('nitaListが空でない場合', () => {
    const discordUserId = '1';
    const trackList = [{ code: 'DMC01', trackName: 'ダミーコース1' }];
    describe('rank毎に色分けされたembedsが返却される', () => {
      describe('秒数の境界値テスト', () => {
        /**
         * @param {string} trackCode
         * @param {number} diff
         * @returns {{ nita: import('../types').Nita, track: import('../types').Track }}
         */
        const makeNitaTrack = (trackCode, diff) => {
          const milliseconds = 2 * 60 * 1000;
          return {
            nita: { trackCode, discordUserId, milliseconds },
            track: {
              trackName: trackCode,
              code: trackCode,
              nitaVSWRMilliseconds: milliseconds - diff,
              nitaAllCombinationWRMilliseconds: 0,
              nitaVSWRUrl: '',
              aliases: [],
            },
          };
        };
        const nitaList = [makeNitaTrack(trackList[0].code, 1000)];
        const actual = worldNitaListResponse(nitaList);
        test('1落ちのembedが返却されること', () => {
          expect(actual.embeds?.[0]).toEqual({
            title: '1落ち',
            color: 13632027,
            fields: [
              {
                name: nitaList[0].track.trackName,
                value: '2:00.000 WR + 1秒',
              },
            ],
          });
        });
      });
    });
  });
});
