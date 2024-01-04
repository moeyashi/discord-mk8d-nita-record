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
  TR: makeTrack('ドッスンいせき', 'TR', 152742, ['遺跡']),
  MC: makeTrack('マリオサーキット', 'MC', 148538, ['新マリサ']),
  TH: makeTrack('キノピオハーバー', 'TH', 205466, ['ハーバー']),
  TM: makeTrack('ねじれマンション', 'TM', 158878, ['ねじマン']),
  SGF: makeTrack('ヘイホーこうざん', 'SGF', 159079, ['ヘイホー鉱山']),
  SA: makeTrack('サンシャインくうこう', 'SA', 200913, ['空港']),
  DS: makeTrack('ドルフィンみさき', 'DS', 157416, ['ドルミ']),
  Ed: makeTrack('エレクトロドリーム', 'Ed', 200835, ['エレドリ']),
  MW: makeTrack('ワリオスノーマウンテン', 'MW', 143553, ['ワリスノ']),
  CC: makeTrack('スカイガーデン', 'CC', 202245, ['スカガ']),
  BDD: makeTrack('ホネホネさばく', 'BDD', 151705, ['ホネサバ']),
  BC: makeTrack('クッパキャッスル', 'BC', 202832, ['クパキャ']),
  RR: makeTrack('レインボーロード', 'RR', 201161, ['新虹']),
  rMMM: makeTrack('Wii モーモーカントリー', 'rMMM', 127217, ['モモカン']),
  rMC: makeTrack('GBA マリオサーキット', 'rMC', 127355, ['グバマリ']),
  rCCB: makeTrack('DS プクプクビーチ', 'rCCB', 149767, ['プクビ']),
  rTT: makeTrack('N64 キノピオハイウェイ', 'rTT', 148072, ['ハイウェイ']),
  rDDD: makeTrack('GC カラカラさばく', 'rDDD', 200486, ['カラサバ']),
  rDP3: makeTrack('SFC ドーナツへいや3', 'rDP3', 117640, ['平野']),
  rRRy: makeTrack('N64 ピーチサーキット', 'rRRy', 158999, ['ピチサ']),
  rDKJ: makeTrack('3DS DKジャングル', 'rDKJ', 203906, ['ジャングル']),
  rWS: makeTrack('DS ワリオスタジアム', 'rWS', 152817, ['ワリスタ']),
  rSL: makeTrack('GC シャーベットランド', 'rSL', 150329, ['シャベラン']),
  rMP: makeTrack('3DS ミュージックパーク', 'rMP', 153013, ['ミューパ']),
  rYV: makeTrack('N64 ヨッシーバレー', 'rYV', 203466, ['ヨシバ']),
  rTTC: makeTrack('DS チクタクロック', 'rTTC', 144130, ['チクタク']),
  rPPS: makeTrack('3DS パックンスライダー', 'rPPS', 203357, ['パクスラ']),
  rGV: makeTrack('Wii グラグラかざん', 'rGV', 155509, ['火山']),
  rRRd: makeTrack('N64 レインボーロード', 'rRRd', 121195, ['64虹']),
  dYC: makeTrack('GC ヨッシーサーキット', 'dYC', 146171, ['ヨシサ']),
  dEA: makeTrack('エキサイトバイク', 'dEA', 142947, ['エキバ']),
  dDD: makeTrack('ドラゴンロード', 'dDD', 145919, ['ドラロ']),
  dMC: makeTrack('ミュートシティ', 'dMC', 155281, ['ミュート']),
  dWGM: makeTrack('ワリオこうざん', 'dWGM', 204175, ['ワリこう']),
  dRR: makeTrack('SFC レインボーロード', 'dRR', 128456, ['SFC虹']),
  dIIO: makeTrack('ツルツルツイスター', 'dIIO', 147725, ['ツツツ']),
  dHC: makeTrack('ハイラルサーキット', 'dHC', 150981, ['ハイラル']),
  dBP: makeTrack('GC ベビィパーク', 'dBP', 104189, ['ベビパ']),
  dCL: makeTrack('GBA チーズランド', 'dCL', 148853, ['チーズ']),
  dWW: makeTrack('ネイチャーロード', 'dWW', 147908, ['ネイチャー']),
  dAC: makeTrack('どうぶつの森', 'dAC', 142777, ['どう森']),
  dNBC: makeTrack('3DS ネオクッパシティ', 'dNBC', 146204, ['ネオパ']),
  dRiR: makeTrack('GBA リボンロード', 'dRiR', 151168, ['リボン']),
  dSBS: makeTrack('リンリンメトロ', 'dSBS', 144599, ['リンメト']),
  dBB: makeTrack('ビッグブルー', 'dBB', 126165, ['BB']),
  bPP: makeTrack('パリプロムナード', 'bPP', 151756, ['パリ']),
  bTC: makeTrack('3DS キノピオサーキット', 'bTC', 124419, ['キノサ']),
  bCMo: makeTrack('N64 チョコマウンテン', 'bMC', 154347, ['チョコマ']),
  bCMa: makeTrack('Wii ココナッツモール', 'bCM', 144141, ['ココモ']),
  bTB: makeTrack('Tour トーキョースクランブル', 'bTB', 127885, ['東京']),
  bSR: makeTrack('DS キノコリッジウェイ', 'bSR', 147948, ['リッジウェイ']),
  bSG: makeTrack('GBA スカイガーデン', 'bSG', 130737, ['グバスカ']),
  bNH: makeTrack('Tour ニンニンドージョー', 'bNH', 154035, ['ニンニン']),
  bNYM: makeTrack('Tour ニューヨークドリーム', 'bNYM', 124890, ['ニューヨーク']),
  bMC3: makeTrack('SFC マリオサーキット3', 'bMC3', 135884, ['マリサ3']),
  bKD: makeTrack('N64 カラカラさばく', 'bKD', 133895, ['64カラサバ']),
  bWP: makeTrack('DS ワルイージピンボール', 'bWP', 220832, ['ワルピン']),
  bSS: makeTrack('Tour シドニーサンシャイン', 'bSS', 203471, ['シドニー']),
  bSL: makeTrack('GBA スノーランド', 'bSL', 137009, ['スノラン']),
  bMG: makeTrack('Wii キノコキャニオン', 'bMG', 135837, ['キノキャニ']),
  bSHS: makeTrack('アイスビルディング', 'bSHS', 156974, ['アイス']),
  bLL: makeTrack('Tour ロンドンアベニュー', 'bLL', 212503, ['ロンドン']),
  bBL: makeTrack('GBA テレサレイク', 'bBL', 123545, ['テレレ']),
  bRRM: makeTrack('3DS ロックロックマウンテン', 'bRRM', 216884, ['ロクマ']),
  bMT: makeTrack('Wii メイプルツリーハウス', 'bMT', 225937, ['メイプル']),
  bBB: makeTrack('Tour ベルリンシュトラーセ', 'bBB', 159676, ['ベルリン']),
  bPG: makeTrack('DS ピーチガーデン', 'bPG', 208501, ['ピチガ']),
  bMM: makeTrack('Tour メリーメリーマウンテン', 'bMM', 158006, ['メリマ']),
  bRR7: makeTrack('3DS レインボーロード', 'bRR', 138885, ['7虹']),
  bAD: makeTrack('Tour アムステルダムブルーム', 'bAD', 138142, ['アムス']),
  bRP: makeTrack('GBA リバーサイドパーク', 'bRP', 131733, ['リバパ']),
  bDKS: makeTrack('Wii DKスノーボードクロス', 'bDKS', 158415, ['スノボ']),
  bYI: makeTrack('ヨッシーアイランド', 'bYI', 201157, ['ヨシアイ']),
  bBR: makeTrack('Tour バンコクラッシュ', 'bBR', 144718, ['バンコク']),
  bMC: makeTrack('DS マリオサーキット', 'bMC', 141878, ['DSマリサ']),
  bWS: makeTrack('GC ワルイージスタジアム', 'bWS', 158939, ['ワルスタ']),
  bSSy: makeTrack('Tour シンガポールスプラッシュ', 'bSS', 158326, ['シンガポール']),
  bAtD: makeTrack('Tour アテネポリス', 'bAD', 141404, ['アテネ']),
  bDC: makeTrack('GC デイジークルーザー', 'bDC', 135782, ['デイクル']),
  bMH: makeTrack('Wii ムーンリッジ＆ハイウェイ', 'bMH', 144765, ['ムーンリッジ']),
  bSCS: makeTrack('シャボンロード', 'bSCS', 203804, ['シャボン']),
  bLAL: makeTrack('Tour ロサンゼルスコースト', 'bLAL', 149282, ['ロス']),
  bSW: makeTrack('GBA サンセットこうや', 'bSW', 137096, ['サンセット']),
  bVV: makeTrack('Tour バンクーバーバレー', 'bVV', 202333, ['バンクーバー']),
  bRA: makeTrack('Tour ローマアバンティ', 'bRA', 147540, ['ローマ']),
  bDKM: makeTrack('GC DKマウンテン', 'bDKM', 213412, ['DKマウンテン']),
  bDCt: makeTrack('Wii デイジーサーキット', 'bDC', 150966, ['デイサ']),
  bPPC: makeTrack('Tour パックンしんでん', 'bPPC', 202914, ['パクしん']),
  bMD: makeTrack('Tour マドリードグランデ', 'bMD', 159924, ['マドリード']),
  bRIW: makeTrack('3DS ロゼッタプラネット', 'bRIW', 159970, ['ロゼプラ']),
  bBC3: makeTrack('SFC クッパじょう3', 'bBC', 143899, ['クッパじょう']),
  bRRw: makeTrack('Wii レインボーロード', 'bRRo', 234877, ['Wii虹']),
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
