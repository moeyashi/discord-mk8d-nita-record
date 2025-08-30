// @ts-check
// 参考
// https://docs.google.com/spreadsheets/d/e/2PACX-1vRBXBdqpurvBmR--bzj9RJmgr7HxAoWVZmlwmhaBK-LYf_BbXn8iAPdH-ogBtXiAwxlTkQgn45PkeRW/pubhtml?gid=0&single=true

import { toMilliseconds } from '../util/time.js';

/**
 * @param {string} trackName
 * @param {string} code
 * @param {number} nitaVSWR 1:53.053の場合は153053
 * @param {string} nitaVSWRUrl
 * @param {number} nitaAllCombinationWR
 * @param {string[]} aliases
 * @return {import('../types').Track}
 */
const makeTrack = (trackName, code, nitaVSWR, nitaVSWRUrl, nitaAllCombinationWR, aliases) => {
  return {
    trackName,
    code,
    nitaVSWRMilliseconds: toMilliseconds(nitaVSWR),
    nitaVSWRUrl,
    nitaAllCombinationWRMilliseconds: toMilliseconds(nitaAllCombinationWR),
    aliases,
  };
};

const trackDict = Object.freeze({
  MKS: makeTrack('マリオカートスタジアム', 'MKS', 0, '', 0, ['マリカス']),
  WP: makeTrack('ウォーターパーク', 'WP', 0, '', 0, ['ウォタパ']),
  SSC: makeTrack('スイーツキャニオン', 'SSC', 0, '', 0, ['スイキャニ']),
  TR: makeTrack('ドッスンいせき', 'TR', 0, '', 0, ['遺跡', 'ドッスン', 'いせき', 'ドッスン遺跡']),
  MC: makeTrack('マリオサーキット', 'MC', 0, '', 0, ['新マリサ', 'しんマリサ']),
  TH: makeTrack('キノピオハーバー', 'TH', 0, '', 0, ['ハーバー']),
  TM: makeTrack('ねじれマンション', 'TM', 0, '', 0, ['ねじマン', 'ねじれ']),
  SGF: makeTrack('ヘイホーこうざん', 'SGF', 0, '', 0, ['ヘイホー鉱山', 'ヘイこう', 'こうざん']),
  SA: makeTrack('サンシャインくうこう', 'SA', 0, '', 0, ['サンシャイン空港', '空港', 'くうこう', 'サンシャイン']),
  DS: makeTrack('ドルフィンみさき', 'DS', 0, '', 0, ['ドルミ']),
  Ed: makeTrack('エレクトロドリーム', 'Ed', 0, '', 0, ['エレドリ']),
  MW: makeTrack('ワリオスノーマウンテン', 'MW', 0, '', 0, ['ワリスノ', '雪山']),
  CC: makeTrack('スカイガーデン', 'CC', 0, '', 0, ['スカガ', '新スカガ']),
  BDD: makeTrack('ホネホネさばく', 'BDD', 0, '', 0, ['ホネサバ', 'ホネホネ', 'ホネホネ砂漠']),
  BC: makeTrack('クッパキャッスル', 'BC', 0, '', 0, ['クパキャ']),
  RR: makeTrack('レインボーロード', 'RR', 0, '', 0, ['新虹', 'しんにじ', 'しん虹', '新にじ']),
  rMMM: makeTrack('Wii モーモーカントリー', 'rMMM', 0, '', 0, ['Wiiモーモーカントリー', 'モモカン', 'モーモーカントリー', 'MMM']),
  rMC: makeTrack('GBA マリオサーキット', 'rMC', 0, '', 0, ['GBAマリオサーキット', 'グバマリ', 'GBAマリサ']),
  rCCB: makeTrack('DS プクプクビーチ', 'rCCB', 0, '', 0, ['プクプクビーチ', 'プクビ', 'プクプク', 'CCB']),
  rTT: makeTrack('N64 キノピオハイウェイ', 'rTT', 0, '', 0, ['ハイウェイ', 'キノピオハイウェイ', 'TT']),
  rDDD: makeTrack('GC カラカラさばく', 'rDDD', 0, '', 0, ['GCカラカラさばく', 'カラカラさばく', 'カラカラ砂漠', 'カラサバ']),
  rDP3: makeTrack('SFC ドーナツへいや3', 'rDP3', 0, '', 0, ['ドーナツへいや3', '平野', 'へいや', 'SFCドーナツへいや3', 'ドーナツへいや', 'ドーナツ平野', 'DP3']),
  rRRy: makeTrack('N64 ピーチサーキット', 'rRRy', 0, '', 0, ['ピチサ', 'ピーチサーキット', 'RRy']),
  rDKJ: makeTrack('3DS DKジャングル', 'rDKJ', 0, '', 0, ['ジャングル', 'DKジャングル', 'DKJ', 'DK じゃんぐる']),
  rWS: makeTrack('DS ワリオスタジアム', 'rWS', 0, '', 0, ['ワリスタ', 'ワリオスタジアム', 'WS']),
  rSL: makeTrack('GC シャーベットランド', 'rSL', 0, '', 0, ['シャベラン', 'シャーベットランド', 'SL']),
  rMP: makeTrack('3DS ミュージックパーク', 'rMP', 0, '', 0, ['ミューパ', 'ミュージックパーク', 'MP']),
  rYV: makeTrack('N64 ヨッシーバレー', 'rYV', 0, '', 0, ['ヨシバ', 'ヨッシーバレー', 'YV']),
  rTTC: makeTrack('DS チクタクロック', 'rTTC', 0, '', 0, ['チクタク', 'チクタクロック', 'TTC']),
  rPPS: makeTrack('3DS パックンスライダー', 'rPPS', 0, '', 0, ['パクスラ', 'パックンスライダー', 'PPS']),
  rGV: makeTrack('Wii グラグラかざん', 'rGV', 0, '', 0, ['火山', 'かざん', 'グラグラ', 'グラグラ火山', 'グラグラかざん', 'GV']),
  rRRd: makeTrack('N64 レインボーロード', 'rRRd', 0, '', 0, ['N64レインボーロード', '64レインボーロード', 'N64レインボー', 'N64虹', 'N64にじ', '64虹', '64にじ', '64レインボー', 'RRd']),
  dYC: makeTrack('GC ヨッシーサーキット', 'dYC', 0, '', 0, ['ヨシサ', 'ヨッシーサーキット', 'YC']),
  dEA: makeTrack('エキサイトバイク', 'dEA', 0, '', 0, ['エキバ', 'EA']),
  dDD: makeTrack('ドラゴンロード', 'dDD', 0, '', 0, ['ドラロ', 'DD']),
  dMC: makeTrack('ミュートシティ', 'dMC', 0, '', 0, ['ミュート', 'ミュートシティー']),
  dWGM: makeTrack('Wii ワリオこうざん', 'dWGM', 0, '', 0, ['ワリこう', 'ワリオこうざん', 'WGM', 'ワリ鉱', 'ワリオ鉱山']),
  dRR: makeTrack('SFC レインボーロード', 'dRR', 0, '', 0, ['SFCレインボーロード', 'SFC虹', 'SFCにじ', 'SFCレインボー']),
  dIIO: makeTrack('ツルツルツイスター', 'dIIO', 0, '', 0, ['ツツツ', 'ツルツル', 'IIO']),
  dHC: makeTrack('ハイラルサーキット', 'dHC', 0, '', 0, ['ハイラル', 'HC']),
  dBP: makeTrack('GC ベビィパーク', 'dBP', 0, '', 0, ['ベビィパーク', 'ベビーパーク', 'ベビパ', 'BP']),
  dCL: makeTrack('GBA チーズランド', 'dCL', 0, '', 0, ['チーズ', 'チーズランド', 'CL']),
  dWW: makeTrack('ネイチャーロード', 'dWW', 0, '', 0, ['ネイチャー', 'ネイチャ', 'WW']),
  dAC: makeTrack('どうぶつの森', 'dAC', 0, '', 0, ['どうぶつのもり', 'どうもり', 'どう森', 'AC']),
  dNBC: makeTrack('3DS ネオクッパシティ', 'dNBC', 0, '', 0, ['ネオパ', 'ネオクッパ', 'ネオクッパシティ', 'NBC']),
  dRiR: makeTrack('GBA リボンロード', 'dRiR', 0, '', 0, ['リボン', 'リボロ', 'リボンロード', 'RiR']),
  dSBS: makeTrack('リンリンメトロ', 'dSBS', 0, '', 0, ['リンメト', 'SBS']),
  dBB: makeTrack('ビッグブルー', 'dBB', 0, '', 0, ['BB', 'ビックブルー']),
  bPP: makeTrack('Tour パリプロムナード', 'bPP', 0, '', 0, ['パリ', 'パリプロムナード', 'PP']),
  bTC: makeTrack('3DS キノピオサーキット', 'bTC', 0, '', 0, ['キノサ', 'キノピオサーキット', 'TC']),
  bCMo: makeTrack('N64 チョコマウンテン', 'bCMo', 0, '', 0, ['チョコマ', 'チョコマウンテン', 'CMo']),
  bCMa: makeTrack('Wii ココナッツモール', 'bCMa', 0, '', 0, ['ココモ', 'ココナッツモール', 'CMa']),
  bTB: makeTrack('Tour トーキョースクランブル', 'bTB', 0, '', 0, ['東京', 'トウキョウ', 'トウキョウスクランブル', 'トーキョー', 'トーキョースクランブル', 'TB']),
  bSR: makeTrack('DS キノコリッジウェイ', 'bSR', 0, '', 0, ['リッジウェイ', 'キノコリッジウェイ', 'キノコリッジ', 'リッジ', 'SR']),
  bSG: makeTrack('GBA スカイガーデン', 'bSG', 0, '', 0, ['GBAスカイガーデン', 'グバスカ', 'GBAスカガ', 'SG']),
  bNH: makeTrack('Tour ニンニンドージョー', 'bNH', 0, '', 0, ['ニンニン', 'ニンニンドージョー', 'NH']),
  bNYM: makeTrack('Tour ニューヨークドリーム', 'bNYM', 0, '', 0, ['ニューヨーク', 'ニューヨークドリーム', 'NYM', 'NY']),
  bMC3: makeTrack('SFC マリオサーキット3', 'bMC3', 0, '', 0, ['SFCマリオサーキット3', 'SFCマリオサーキット', 'マリオサーキット3', 'マリサ3', 'SFCマリサ', 'SFCマリサ3', 'MC3']),
  bKD: makeTrack('N64 カラカラさばく', 'bKD', 0, '', 0, ['N64カラカラさばく', '64カラカラさばく', '64カラサバ', 'KD']),
  bWP: makeTrack('DS ワルイージピンボール', 'bWP', 0, '', 0, ['ワルピン', 'ワルイージピンボール']),
  bSS: makeTrack('Tour シドニーサンシャイン', 'bSS', 0, '', 0, ['シドニー', 'シドニーサンシャイン', 'SS']),
  bSL: makeTrack('GBA スノーランド', 'bSL', 0, '', 0, ['スノラン', 'スノーランド']),
  bMG: makeTrack('Wii キノコキャニオン', 'bMG', 0, '', 0, ['キノキャニ', 'キノコキャニオン', 'MG']),
  bSHS: makeTrack('アイスビルディング', 'bSHS', 0, '', 0, ['アイス', 'アイビル', 'SHS']),
  bLL: makeTrack('Tour ロンドンアベニュー', 'bLL', 0, '', 0, ['ロンドン', 'ロンドンアベニュー', 'アベニュー', 'LL']),
  bBL: makeTrack('GBA テレサレイク', 'bBL', 0, '', 0, ['テレレ', 'テレサレイク', 'レイク', 'BL']),
  bRRM: makeTrack('3DS ロックロックマウンテン', 'bRRM', 0, '', 0, ['ロクマ', 'ロックロックマウンテン', 'RRM']),
  bMT: makeTrack('Wii メイプルツリーハウス', 'bMT', 0, '', 0, ['メイプル', 'メイプルツリーハウス', 'MT']),
  bBB: makeTrack('Tour ベルリンシュトラーセ', 'bBB', 0, '', 0, ['ベルリン', 'ベルリンシュトラーセ']),
  bPG: makeTrack('DS ピーチガーデン', 'bPG', 0, '', 0, ['ピチガ', 'ピーチガーデン', 'PG']),
  bMM: makeTrack('Tour メリーメリーマウンテン', 'bMM', 0, '', 0, ['メリマ', 'メリーメリーマウンテン', 'メリマン', 'MM']),
  bRR7: makeTrack('3DS レインボーロード', 'bRR7', 0, '', 0, ['3DSレインボーロード', '7虹', '7にじ', '7レインボー', '3DSレインボー', '3DS虹', '3DSにじ', 'RR7']),
  bAD: makeTrack('Tour アムステルダムブルーム', 'bAD', 0, '', 0, ['アムス', 'アムステルダム', 'アムステルダムブルーム', 'AD']),
  bRP: makeTrack('GBA リバーサイドパーク', 'bRP', 0, '', 0, ['リバパ', 'リバーサイドパーク', 'リバーサイド', 'リバサ', 'RP']),
  bDKS: makeTrack('Wii DKスノーボードクロス', 'bDKS', 0, '', 0, ['スノボ', 'DKスノーボードクロス', 'スノーボードクロス', 'DKS', 'DKS01', '01']),
  bYI: makeTrack('ヨッシーアイランド', 'bYI', 0, '', 0, ['ヨシアイ', 'YI']),
  bBR: makeTrack('Tour バンコクラッシュ', 'bBR', 0, '', 0, ['バンコク', 'バンコクラッシュ', 'BR']),
  bMC: makeTrack('DS マリオサーキット', 'bMC', 0, '', 0, ['DSマリサ', 'DSマリオサーキット']),
  bWS: makeTrack('GC ワルイージスタジアム', 'bWS', 0, '', 0, ['ワルスタ', 'ワルイージスタジアム']),
  bSSy: makeTrack('Tour シンガポールスプラッシュ', 'bSSy', 0, '', 0, ['シンガポール', 'シンガポールスプラッシュ', 'SSy']),
  bAtD: makeTrack('Tour アテネポリス', 'bAtD', 0, '', 0, ['アテネ', 'アテネポリス', 'AtD']),
  bDC: makeTrack('GC デイジークルーザー', 'bDC', 0, '', 0, ['デイクル', 'デイジークルーザー', 'DC']),
  bMH: makeTrack('Wii ムーンリッジ＆ハイウェイ', 'bMH', 0, '', 0, ['ムーンリッジ＆ハイウェイ', 'ムーンリッジ', 'ムーンリッジハイウェイ', 'ムンリ', 'MH', '月']),
  bSCS: makeTrack('シャボンロード', 'bSCS', 0, '', 0, ['シャボン', 'SCS']),
  bLAL: makeTrack('Tour ロサンゼルスコースト', 'bLAL', 0, '', 0, ['ロス', 'ロサンゼルス', 'LA', 'ロサンゼルスコースト', 'LAL']),
  bSW: makeTrack('GBA サンセットこうや', 'bSW', 0, '', 0, ['サンセット', 'こうや', 'サンセット荒野', 'サンセットこうや', 'SW']),
  bKC: makeTrack('Wii ノコノコみさき', 'bKC', 0, '', 0, ['ノコみさ', 'ノコノコみさき', 'ノコノコ', 'のこみ', 'KC']),
  bVV: makeTrack('Tour バンクーバーバレー', 'bVV', 0, '', 0, ['バンクーバー', 'バンクーバーバレー', 'VV']),
  bRA: makeTrack('Tour ローマアバンティ', 'bRA', 0, '', 0, ['ローマ', 'ローマアバンティ', 'RA']),
  bDKM: makeTrack('GC DKマウンテン', 'bDKM', 0, '', 0, ['DKマウンテン', 'DK山', 'DKM']),
  bDCt: makeTrack('Wii デイジーサーキット', 'bDCt', 0, '', 0, ['デイサ', 'デイジーサーキット', 'デジサ', 'DCt']),
  bPPC: makeTrack('Tour パックンしんでん', 'bPPC', 0, '', 0, ['パクしん', 'パックンしんでん', 'パックン神殿', 'パク神', 'PPC']),
  bMD: makeTrack('Tour マドリードグランデ', 'bMD', 0, '', 0, ['マドリード', 'マドリードグランデ', 'MD']),
  bRIW: makeTrack('3DS ロゼッタプラネット', 'bRIW', 0, '', 0, ['ロゼプラ', 'ロゼッタプラネット', 'RIW']),
  bBC3: makeTrack('SFC クッパじょう3', 'bBC3', 0, '', 0, ['クッパじょう', 'クッパ城', 'クッパ城3', 'クッパじょう3', 'BC3']),
  bRRw: makeTrack('Wii レインボーロード', 'bRRw', 0, '', 0, ['Wiiレインボーロード', 'Wii虹', 'Wiiにじ', 'Wiiレインボー', 'RRw']),
});

export const trackCodeSet = new Set(Object.keys(trackDict));

/**
 * コース名を変換する
 *
 * - 大文字を小文字に
 * - 全角カタカナをひらがなに
 * - 全角英数を半角に
 *
 * @param {string} trackName
 */
const normalizeTrackName = (trackName) => {
  return trackName.replace(/[ァ-ン]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0x60)).replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xFEE0)).toLowerCase();
};

/** @type {Map<string, string>} */
const trackCodeMap = Object.entries(trackDict).reduce((acc, [key, track]) => {
  acc.set(normalizeTrackName(key), key);
  acc.set(normalizeTrackName(track.trackName), key);
  track.aliases.forEach((v) => {
    acc.set(normalizeTrackName(v), key);
  });
  return acc;
}, new Map());

/**
 * @param {string} query
 * @return {import('../types').Track | null}
 */
export const searchTrack = (query) => {
  const code = trackCodeMap.get(normalizeTrackName(query));
  if (code) {
    return trackDict[code] || null;
  }
  return null;
};

/**
 * @param {string} code
 * @return {import('../types').Track | null}
 */
export const getByCode = (code) => {
  return trackDict[code] || null;
};
