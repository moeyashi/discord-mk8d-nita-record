// @ts-check
import { describe, expect, test } from 'vitest';
import { searchTrack, trackCodeSet } from './mkwr-track.js';

describe('trackCodeSet', () => {
  test('trackCodeSetが30件の要素を持つ', () => {
    expect(trackCodeSet).toHaveLength(30);
  });

  describe('trackCodeSetの要素', () => {
    test('マリオブラザーズサーキットを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('マリオブラザーズサーキット');
    });
    test('トロフィーシティを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('トロフィーシティ');
    });
    test('シュポポコースターを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('シュポポコースター');
    });
    test('DKうちゅうセンターを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('DKうちゅうセンター');
    });
    test('サンサンさばくを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('サンサンさばく');
    });
    test('ヘイホーカーニバルを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ヘイホーカーニバル');
    });
    test('ワリオスタジアムを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ワリオスタジアム');
    });
    test('キラーシップを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('キラーシップ');
    });
    test('DKスノーマウンテンを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('DKスノーマウンテン');
    });
    test('ロゼッタてんもんだいを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ロゼッタてんもんだい');
    });
    test('アイスビルディングを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('アイスビルディング');
    });
    test('ワリオシップを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ワリオシップ');
    });
    test('ノコノコビーチを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ノコノコビーチ');
    });
    test('リバーサイドサファリを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('リバーサイドサファリ');
    });
    test('ピーチスタジアムを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ピーチスタジアム');
    });
    test('ピーチビーチを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ピーチビーチ');
    });
    test('ソルティータウンを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ソルティータウン');
    });
    test('ディノディノジャングルを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ディノディノジャングル');
    });
    test('ハテナしんでんを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ハテナしんでん');
    });
    test('プクプクフォールズを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('プクプクフォールズ');
    });
    test('ショーニューロードを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ショーニューロード');
    });
    test('おばけシネマを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('おばけシネマ');
    });
    test('ホネホネツイスターを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('ホネホネツイスター');
    });
    test('モーモーカントリーを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('モーモーカントリー');
    });
    test('チョコマウンテンを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('チョコマウンテン');
    });
    test('キノピオファクトリーを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('キノピオファクトリー');
    });
    test('クッパキャッスルを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('クッパキャッスル');
    });
    test('どんぐりツリーハウスを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('どんぐりツリーハウス');
    });
    test('マリオサーキットを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('マリオサーキット');
    });
    test('レインボーロードを含む', ({ expect }) => {
      expect(trackCodeSet).toContain('レインボーロード');
    });
  });
});

describe('searchTrack', () => {
  test('存在するコース名で検索した場合', () => {
    const track = searchTrack('マリオブラザーズサーキット');
    expect(track?.code).toEqual('マリオブラザーズサーキット');
  });

  test('存在しないコース名で検索した場合', () => {
    const track = searchTrack('存在しないコース');
    expect(track).toBeNull();
  });
});
