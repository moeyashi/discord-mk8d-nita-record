// @ts-check
import { describe, expect, test } from 'vitest';
import { getByCode, trackCodeSet } from '../const/track.js';
import { nitaListResponse } from './nita-list-response.js';

describe(nitaListResponse, () => {
  describe('nitaListが空の場合', () => {
    const actual = nitaListResponse([]);
    test('0件メッセージが返却されること', () => {
      expect(actual).toEqual({
        content: 'NITAのタイムが登録されていません。`/nita`コマンドを使って記録を登録してみましょう。',
      });
    });
  });
  describe('nitaListが空でない場合', () => {
    const discordUserId = '1';
    const trackList = Object.freeze(Array.from(trackCodeSet));
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
        const nitaList = [
          makeNitaTrack(trackList[0], -1),
          makeNitaTrack(trackList[1], 0),
          makeNitaTrack(trackList[2], 1),
          makeNitaTrack(trackList[3], 999),
          makeNitaTrack(trackList[4], 1000),
          makeNitaTrack(trackList[5], 1001),
          makeNitaTrack(trackList[6], 1999),
          makeNitaTrack(trackList[7], 2000),
          makeNitaTrack(trackList[8], 2001),
          makeNitaTrack(trackList[9], 2999),
          makeNitaTrack(trackList[10], 3000),
          makeNitaTrack(trackList[11], 3001),
          makeNitaTrack(trackList[12], 3999),
          makeNitaTrack(trackList[13], 4000),
          makeNitaTrack(trackList[14], 4001),
          makeNitaTrack(trackList[15], 4999),
          makeNitaTrack(trackList[16], 5000),
          makeNitaTrack(trackList[17], 5001),
          makeNitaTrack(trackList[18], 5999),
          makeNitaTrack(trackList[19], 6000),
          makeNitaTrack(trackList[20], 6001),
          makeNitaTrack(trackList[21], 6999),
          makeNitaTrack(trackList[22], 7000),
          makeNitaTrack(trackList[23], 7001),
        ];
        const actual = nitaListResponse(nitaList);
        test('1落ちのembedが返却されること', () => {
          expect(actual.embeds?.[0]).toEqual({
            title: '1落ち',
            color: 13632027,
            fields: [
              {
                name: nitaList[0].track.trackName,
                value: '2:00.000 WR + -0.001秒',
              },
              { name: nitaList[1].track.trackName, value: '2:00.000 WR + 0秒' },
              {
                name: nitaList[2].track.trackName,
                value: '2:00.000 WR + 0.001秒',
              },
              {
                name: nitaList[3].track.trackName,
                value: '2:00.000 WR + 0.999秒',
              },
              { name: nitaList[4].track.trackName, value: '2:00.000 WR + 1秒' },
            ],
          });
        });
        test('2落ちのembedが返却されること', () => {
          expect(actual.embeds?.[1]).toEqual({
            title: '2落ち',
            color: 16312092,
            fields: [
              {
                name: nitaList[5].track.trackName,
                value: '2:00.000 WR + 1.001秒',
              },
              {
                name: nitaList[6].track.trackName,
                value: '2:00.000 WR + 1.999秒',
              },
              { name: nitaList[7].track.trackName, value: '2:00.000 WR + 2秒' },
            ],
          });
        });
        test('3落ちのembedが返却されること', () => {
          expect(actual.embeds?.[2]).toEqual({
            title: '3落ち',
            color: 8311585,
            fields: [
              {
                name: nitaList[8].track.trackName,
                value: '2:00.000 WR + 2.001秒',
              },
              {
                name: nitaList[9].track.trackName,
                value: '2:00.000 WR + 2.999秒',
              },
              {
                name: nitaList[10].track.trackName,
                value: '2:00.000 WR + 3秒',
              },
            ],
          });
        });
        test('4落ちのembedが返却されること', () => {
          expect(actual.embeds?.[3]).toEqual({
            title: '4落ち',
            color: 4886754,
            fields: [
              {
                name: nitaList[11].track.trackName,
                value: '2:00.000 WR + 3.001秒',
              },
              {
                name: nitaList[12].track.trackName,
                value: '2:00.000 WR + 3.999秒',
              },
              {
                name: nitaList[13].track.trackName,
                value: '2:00.000 WR + 4秒',
              },
            ],
          });
        });
        test('5落ちのembedが返却されること', () => {
          expect(actual.embeds?.[4]).toEqual({
            title: '5落ち',
            color: 12390624,
            fields: [
              {
                name: nitaList[14].track.trackName,
                value: '2:00.000 WR + 4.001秒',
              },
              {
                name: nitaList[15].track.trackName,
                value: '2:00.000 WR + 4.999秒',
              },
              {
                name: nitaList[16].track.trackName,
                value: '2:00.000 WR + 5秒',
              },
            ],
          });
        });
        test('6落ち以上のembedが返却されること', () => {
          expect(actual.embeds?.[5]).toEqual({
            title: '6落ち以上',
            color: undefined,
            fields: [
              {
                name: nitaList[17].track.trackName,
                value: '2:00.000 WR + 5.001秒',
              },
              {
                name: nitaList[18].track.trackName,
                value: '2:00.000 WR + 5.999秒',
              },
              {
                name: nitaList[19].track.trackName,
                value: '2:00.000 WR + 6秒',
              },
              {
                name: nitaList[20].track.trackName,
                value: '2:00.000 WR + 6.001秒',
              },
              {
                name: nitaList[21].track.trackName,
                value: '2:00.000 WR + 6.999秒',
              },
              {
                name: nitaList[22].track.trackName,
                value: '2:00.000 WR + 7秒',
              },
              {
                name: nitaList[23].track.trackName,
                value: '2:00.000 WR + 7.001秒',
              },
            ],
          });
        });
      });
    });
    describe('同一ランクに26コース以上存在する場合はembedが分割される', () => {
      // 96コースの場合をテストするので、26, 51, 76コースの場合はスキップする
      describe.skip('26コースの場合');
      describe.skip('51コースの場合');
      describe.skip('76コースの場合');
      describe('96コースの場合', () => {
        const actual = nitaListResponse(
          trackList.map((trackCode) => {
            const track = getByCode(trackCode);
            if (!track) {
              throw new Error(`track not found: ${trackCode}`);
            }
            const nita = {
              trackCode,
              discordUserId,
              milliseconds: track?.nitaVSWRMilliseconds || 0,
            };
            return { nita, track };
          }),
        );
        describe('25コース毎に4embedsが返却されること', () => {
          test('4embedsが返却されること', () => {
            expect(actual.embeds).toHaveLength(4);
          });
          test('1つ目のembedには25コースが含まれること', () => {
            const embed = actual.embeds?.[0];
            if (!embed) {
              throw new Error('embed is undefined');
            }
            if (!('fields' in embed)) {
              throw new Error('fields is undefined');
            }
            expect(embed.fields).toHaveLength(25);
          });
          test('2つ目のembedには25コースが含まれること', () => {
            const embed = actual.embeds?.[1];
            if (!embed) {
              throw new Error('embed is undefined');
            }
            if (!('fields' in embed)) {
              throw new Error('fields is undefined');
            }
            expect(embed.fields).toHaveLength(25);
          });
          test('3つ目のembedには25コースが含まれること', () => {
            const embed = actual.embeds?.[2];
            if (!embed) {
              throw new Error('embed is undefined');
            }
            if (!('fields' in embed)) {
              throw new Error('fields is undefined');
            }
            expect(embed.fields).toHaveLength(25);
          });
          test('4つ目のembedには21コースが含まれること', () => {
            const embed = actual.embeds?.[3];
            if (!embed) {
              throw new Error('embed is undefined');
            }
            if (!('fields' in embed)) {
              throw new Error('fields is undefined');
            }
            expect(embed.fields).toHaveLength(21);
          });
        });
      });
    });
  });
});
