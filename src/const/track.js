// @ts-check

import { toMilliseconds } from '../util/time.js';

/**
 * @param {string} trackName
 * @param {string} code
 * @param {number} nitaVSWR 1:53.053の場合は153053
 * @param {string[]} aliases
 * @return {import('../types').Track}
 */
const makeTrack = (trackName, code, nitaVSWR, aliases) => {
  return {
    trackName,
    code,
    nitaVSWRMilliseconds: toMilliseconds(nitaVSWR),
    aliases,
  };
};

const trackDict = Object.freeze({
  MKS: makeTrack('マリオカートスタジアム', 'MKS', 139745, ['マリカス']),
  WP: makeTrack('ウォーターパーク', 'WP', 141575, ['ウォタパ']),
  SSC: makeTrack('スイーツキャニオン', 'SSC', 154309, ['スイキャニ']),
  TR: makeTrack('ドッスンいせき', 'TR', 152742, ['遺跡', 'ドッスン', 'いせき']),
  MC: makeTrack('マリオサーキット', 'MC', 148538, ['新マリサ']),
  TH: makeTrack('キノピオハーバー', 'TH', 205466, ['ハーバー']),
  TM: makeTrack('ねじれマンション', 'TM', 158878, ['ねじマン', 'ねじれ']),
  SGF: makeTrack('ヘイホーこうざん', 'SGF', 159079, ['ヘイホー鉱山']),
  SA: makeTrack('サンシャインくうこう', 'SA', 200913, ['空港', 'くうこう']),
  DS: makeTrack('ドルフィンみさき', 'DS', 157416, ['ドルミ']),
  Ed: makeTrack('エレクトロドリーム', 'Ed', 200835, ['エレドリ']),
  MW: makeTrack('ワリオスノーマウンテン', 'MW', 143553, ['ワリスノ', '雪山']),
  CC: makeTrack('スカイガーデン', 'CC', 202245, ['スカガ', '新スカガ']),
  BDD: makeTrack('ホネホネさばく', 'BDD', 151705, ['ホネサバ']),
  BC: makeTrack('クッパキャッスル', 'BC', 202832, ['クパキャ']),
  RR: makeTrack('レインボーロード', 'RR', 201161, ['新虹']),
  rMMM: makeTrack('Wii モーモーカントリー', 'rMMM', 127217, ['モモカン', 'モーモーカントリー']),
  rMC: makeTrack('GBA マリオサーキット', 'rMC', 127355, ['グバマリ', 'GBAマリサ']),
  rCCB: makeTrack('DS プクプクビーチ', 'rCCB', 149767, ['プクビ', 'プクプクビーチ']),
  rTT: makeTrack('N64 キノピオハイウェイ', 'rTT', 148072, ['ハイウェイ', 'キノピオハイウェイ']),
  rDDD: makeTrack('GC カラカラさばく', 'rDDD', 200486, ['カラサバ']),
  rDP3: makeTrack('SFC ドーナツへいや3', 'rDP3', 117640, ['平野', 'へいや', 'ドーナツへいや']),
  rRRy: makeTrack('N64 ピーチサーキット', 'rRRy', 158999, ['ピチサ', 'ピーチサーキット']),
  rDKJ: makeTrack('3DS DKジャングル', 'rDKJ', 203906, ['ジャングル', 'dkj', 'DKJ', 'DKジャングル']),
  rWS: makeTrack('DS ワリオスタジアム', 'rWS', 152817, ['ワリスタ', 'ワリオスタジアム']),
  rSL: makeTrack('GC シャーベットランド', 'rSL', 150329, ['シャベラン', 'シャーベットランド']),
  rMP: makeTrack('3DS ミュージックパーク', 'rMP', 153013, ['ミューパ', 'ミュージックパーク', 'mp', 'MP']),
  rYV: makeTrack('N64 ヨッシーバレー', 'rYV', 203466, ['ヨシバ', 'ヨッシーバレー']),
  rTTC: makeTrack('DS チクタクロック', 'rTTC', 144130, ['チクタク', 'チクタクロック', 'ttc', 'TTC']),
  rPPS: makeTrack('3DS パックンスライダー', 'rPPS', 203357, ['パクスラ', 'パックンスライダー', 'pps', 'PPS']),
  rGV: makeTrack('Wii グラグラかざん', 'rGV', 155509, ['火山', 'かざん', 'グラグラかざん']),
  rRRd: makeTrack('N64 レインボーロード', 'rRRd', 121195, ['64虹', '64にじ', '64レインボー']),
  dYC: makeTrack('GC ヨッシーサーキット', 'dYC', 146171, ['ヨシサ', 'ヨッシーサーキット']),
  dEA: makeTrack('エキサイトバイク', 'dEA', 142947, ['エキバ', 'ea', 'EA']),
  dDD: makeTrack('ドラゴンロード', 'dDD', 145919, ['ドラロ']),
  dMC: makeTrack('ミュートシティ', 'dMC', 155281, ['ミュート']),
  dWGM: makeTrack('Wii ワリオこうざん', 'dWGM', 204175, ['ワリこう', 'ワリオこうざん']),
  dRR: makeTrack('SFC レインボーロード', 'dRR', 128456, ['SFC虹', 'SFCにじ', 'SFCレインボー']),
  dIIO: makeTrack('ツルツルツイスター', 'dIIO', 147725, ['ツツツ', 'ツルツル']),
  dHC: makeTrack('ハイラルサーキット', 'dHC', 150981, ['ハイラル']),
  dBP: makeTrack('GC ベビィパーク', 'dBP', 104189, ['ベビパ', 'ベビィパーク']),
  dCL: makeTrack('GBA チーズランド', 'dCL', 148853, ['チーズ', 'チーズランド']),
  dWW: makeTrack('ネイチャーロード', 'dWW', 147908, ['ネイチャー', 'ww', 'WW']),
  dAC: makeTrack('どうぶつの森', 'dAC', 142777, ['どう森']),
  dNBC: makeTrack('3DS ネオクッパシティ', 'dNBC', 146204, ['ネオパ', 'ネオクッパ', 'ネオクッパシティ', 'nbc', 'NBC']),
  dRiR: makeTrack('GBA リボンロード', 'dRiR', 151168, ['リボン', 'リボロ', 'リボンロード']),
  dSBS: makeTrack('リンリンメトロ', 'dSBS', 144599, ['リンメト']),
  dBB: makeTrack('ビッグブルー', 'dBB', 126165, ['BB', 'bb']),
  bPP: makeTrack('Tour パリプロムナード', 'bPP', 151756, ['パリ', 'パリプロムナード']),
  bTC: makeTrack('3DS キノピオサーキット', 'bTC', 124419, ['キノサ', 'キノピオサーキット']),
  bCMo: makeTrack('N64 チョコマウンテン', 'bCMo', 154347, ['チョコマ', 'チョコマウンテン']),
  bCMa: makeTrack('Wii ココナッツモール', 'bCMa', 144141, ['ココモ', 'ココナッツモール']),
  bTB: makeTrack('Tour トーキョースクランブル', 'bTB', 127885, ['東京', 'トーキョー', 'トーキョースクランブル']),
  bSR: makeTrack('DS キノコリッジウェイ', 'bSR', 147948, ['リッジウェイ', 'キノコリッジウェイ']),
  bSG: makeTrack('GBA スカイガーデン', 'bSG', 130737, ['グバスカ', 'GBAスカガ']),
  bNH: makeTrack('Tour ニンニンドージョー', 'bNH', 154035, ['ニンニン', 'ニンニンドージョー']),
  bNYM: makeTrack('Tour ニューヨークドリーム', 'bNYM', 124890, ['ニューヨーク', 'ニューヨークドリーム']),
  bMC3: makeTrack('SFC マリオサーキット3', 'bMC3', 135884, ['マリサ3', 'SFCマリサ']),
  bKD: makeTrack('N64 カラカラさばく', 'bKD', 133895, ['64カラサバ']),
  bWP: makeTrack('DS ワルイージピンボール', 'bWP', 220832, ['ワルピン', 'ワルイージピンボール']),
  bSS: makeTrack('Tour シドニーサンシャイン', 'bSS', 203471, ['シドニー', 'シドニーサンシャイン']),
  bSL: makeTrack('GBA スノーランド', 'bSL', 137009, ['スノラン', 'スノーランド']),
  bMG: makeTrack('Wii キノコキャニオン', 'bMG', 135837, ['キノキャニ', 'キノコキャニオン']),
  bSHS: makeTrack('アイスビルディング', 'bSHS', 156974, ['アイス']),
  bLL: makeTrack('Tour ロンドンアベニュー', 'bLL', 212503, ['ロンドン', 'ロンドンアベニュー']),
  bBL: makeTrack('GBA テレサレイク', 'bBL', 123545, ['テレレ', 'テレサレイク']),
  bRRM: makeTrack('3DS ロックロックマウンテン', 'bRRM', 216884, ['ロクマ', 'ロックロックマウンテン']),
  bMT: makeTrack('Wii メイプルツリーハウス', 'bMT', 225937, ['メイプル', 'メイプルツリーハウス']),
  bBB: makeTrack('Tour ベルリンシュトラーセ', 'bBB', 159676, ['ベルリン', 'ベルリンシュトラーセ']),
  bPG: makeTrack('DS ピーチガーデン', 'bPG', 208501, ['ピチガ', 'ピーチガーデン']),
  bMM: makeTrack('Tour メリーメリーマウンテン', 'bMM', 158006, ['メリマ', 'メリーメリーマウンテン']),
  bRR7: makeTrack('3DS レインボーロード', 'bRR7', 138885, ['7虹', '7にじ', '7レインボー', '3DSレインボー']),
  bAD: makeTrack('Tour アムステルダムブルーム', 'bAD', 138142, ['アムス', 'アムステルダム', 'アムステルダムブルーム']),
  bRP: makeTrack('GBA リバーサイドパーク', 'bRP', 131733, ['リバパ', 'リバーサイドパーク']),
  bDKS: makeTrack('Wii DKスノーボードクロス', 'bDKS', 158415, ['スノボ', 'DKスノーボードクロス', 'dks', 'DKS']),
  bYI: makeTrack('ヨッシーアイランド', 'bYI', 201157, ['ヨシアイ']),
  bBR: makeTrack('Tour バンコクラッシュ', 'bBR', 144718, ['バンコク', 'バンコクラッシュ']),
  bMC: makeTrack('DS マリオサーキット', 'bMC', 141878, ['DSマリサ']),
  bWS: makeTrack('GC ワルイージスタジアム', 'bWS', 158939, ['ワルスタ', 'ワルイージスタジアム']),
  bSSy: makeTrack('Tour シンガポールスプラッシュ', 'bSSy', 158326, ['シンガポール', 'シンガポールスプラッシュ']),
  bAtD: makeTrack('Tour アテネポリス', 'bAtD', 141404, ['アテネ', 'アテネポリス']),
  bDC: makeTrack('GC デイジークルーザー', 'bDC', 135782, ['デイクル', 'デイジークルーザー']),
  bMH: makeTrack('Wii ムーンリッジ＆ハイウェイ', 'bMH', 144765, ['ムーンリッジ', 'ムーンリッジハイウェイ']),
  bSCS: makeTrack('シャボンロード', 'bSCS', 203804, ['シャボン']),
  bLAL: makeTrack('Tour ロサンゼルスコースト', 'bLAL', 149282, ['ロス', 'ロサンゼルス', 'ロサンゼルスコースト']),
  bSW: makeTrack('GBA サンセットこうや', 'bSW', 137096, ['サンセット', 'こうや', 'サンセットこうや']),
  bVV: makeTrack('Tour バンクーバーバレー', 'bVV', 202333, ['バンクーバー', 'バンクーバーバレー']),
  bRA: makeTrack('Tour ローマアバンティ', 'bRA', 147540, ['ローマ', 'ローマアバンティ']),
  bDKM: makeTrack('GC DKマウンテン', 'bDKM', 213412, ['DKマウンテン', 'dkm', 'DKM']),
  bDCt: makeTrack('Wii デイジーサーキット', 'bDCt', 150966, ['デイサ', 'デイジーサーキット']),
  bPPC: makeTrack('Tour パックンしんでん', 'bPPC', 202914, ['パクしん', 'パックンしんでん']),
  bMD: makeTrack('Tour マドリードグランデ', 'bMD', 159924, ['マドリード', 'マドリードグランデ']),
  bRIW: makeTrack('3DS ロゼッタプラネット', 'bRIW', 159970, ['ロゼプラ', 'ロゼッタプラネット']),
  bBC3: makeTrack('SFC クッパじょう3', 'bBC3', 143899, ['クッパじょう', 'クッパ城', 'クッパ城3', 'クッパじょう3']),
  bRRw: makeTrack('Wii レインボーロード', 'bRRw', 234877, ['Wii虹', 'Wiiにじ', 'Wiiレインボー']),
});

export const trackCodeSet = new Set(Object.keys(trackDict));

/** @type {Map<string, string>} */
const trackCodeMap = Object.entries(trackDict).reduce((acc, [key, track]) => {
  acc.set(key, key);
  acc.set(track.trackName, key);
  track.aliases.forEach((v) => {
    acc.set(v, key);
  });
  return acc;
}, new Map());

/**
 * @param {string} query
 * @return {import('../types').Track | null}
 */
export const searchTrack = (query) => {
  const code = trackCodeMap.get(query);
  if (code) {
    return trackDict[code] || null;
  }
  return null;
};
