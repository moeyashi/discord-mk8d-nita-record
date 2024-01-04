// @ts-check
/**
 * @param {string} trackName
 * @param {string} code
 * @param {number} nitaVSWRMilliseconds
 * @param {string[]} aliases
 * @return {import('../types').Track}
 */
const makeTrack = (trackName, code, nitaVSWRMilliseconds, aliases) => ({
  trackName,
  code,
  nitaVSWRMilliseconds,
  aliases,
});

const trackDict = Object.freeze({
  MKS: makeTrack('マリオカートスタジアム', 'MKS', 999999, ['マリカス']),
  WP: makeTrack('ウォーターパーク', 'WP', 999999, ['ウォタパ']),
  SSC: makeTrack('スイーツキャニオン', 'SSC', 999999, ['スイキャニ']),
  TR: makeTrack('ドッスンいせき', 'TR', 999999, ['遺跡']),
  MC: makeTrack('マリオサーキット', 'MC', 999999, ['新マリサ']),
  TH: makeTrack('キノピオハーバー', 'TH', 999999, ['ハーバー']),
  TM: makeTrack('ねじれマンション', 'TM', 999999, ['ねじマン']),
  SGF: makeTrack('ヘイホーこうざん', 'SGF', 999999, ['ヘイホー鉱山']),
  SA: makeTrack('サンシャインくうこう', 'SA', 999999, ['空港']),
  DS: makeTrack('ドルフィンみさき', 'DS', 999999, ['ドルミ']),
  Ed: makeTrack('エレクトロドリーム', 'Ed', 999999, ['エレドリ']),
  MW: makeTrack('ワリオスノーマウンテン', 'MW', 999999, ['ワリスノ']),
  CC: makeTrack('スカイガーデン', 'CC', 999999, ['スカガ']),
  BDD: makeTrack('ホネホネさばく', 'BDD', 999999, ['ホネサバ']),
  BC: makeTrack('クッパキャッスル', 'BC', 999999, ['クパキャ']),
  RR: makeTrack('レインボーロード', 'RR', 999999, ['新虹']),
  rMMM: makeTrack('Wii モーモーカントリー', 'rMMM', 999999, ['モモカン']),
  rMC: makeTrack('GBA マリオサーキット', 'rMC', 999999, ['グバマリ']),
  rCCB: makeTrack('DS プクプクビーチ', 'rCCB', 999999, ['プクビ']),
  rTT: makeTrack('N64 キノピオハイウェイ', 'rTT', 999999, ['ハイウェイ']),
  rDDD: makeTrack('GC カラカラさばく', 'rDDD', 999999, ['カラサバ']),
  rDP3: makeTrack('SFC ドーナツへいや3', 'rDP3', 999999, ['平野']),
  rRRy: makeTrack('N64 ピーチサーキット', 'rRRy', 999999, ['ピチサ']),
  rDKJ: makeTrack('3DS DKジャングル', 'rDKJ', 999999, ['ジャングル']),
  rWS: makeTrack('DS ワリオスタジアム', 'rWS', 999999, ['ワリスタ']),
  rSL: makeTrack('GC シャーベットランド', 'rSL', 999999, ['シャベラン']),
  rMP: makeTrack('3DS ミュージックパーク', 'rMP', 999999, ['ミューパ']),
  rYV: makeTrack('N64 ヨッシーバレー', 'rYV', 999999, ['ヨシバ']),
  rTTC: makeTrack('DS チクタクロック', 'rTTC', 999999, ['チクタク']),
  rPPS: makeTrack('3DS パックンスライダー', 'rPPS', 999999, ['パクスラ']),
  rGV: makeTrack('Wii グラグラかざん', 'rGV', 999999, ['火山']),
  rRRd: makeTrack('N64 レインボーロード', 'rRRd', 999999, ['64虹']),
  dYC: makeTrack('GC ヨッシーサーキット', 'dYC', 999999, ['ヨシサ']),
  dEA: makeTrack('エキサイトバイク', 'dEA', 999999, ['エキバ']),
  dDD: makeTrack('ドラゴンロード', 'dDD', 999999, ['ドラロ']),
  dMC: makeTrack('ミュートシティ', 'dMC', 999999, ['ミュート']),
  dWGM: makeTrack('ワリオこうざん', 'dWGM', 999999, ['ワリこう']),
  dRR: makeTrack('SFC レインボーロード', 'dRR', 999999, ['SFC虹']),
  dIIO: makeTrack('ツルツルツイスター', 'dIIO', 999999, ['ツツツ']),
  dHC: makeTrack('ハイラルサーキット', 'dHC', 999999, ['ハイラル']),
  dBP: makeTrack('GC ベビィパーク', 'dBP', 999999, ['ベビパ']),
  dCL: makeTrack('GBA チーズランド', 'dCL', 999999, ['チーズ']),
  dWW: makeTrack('ネイチャーロード', 'dWW', 999999, ['ネイチャー']),
  dAC: makeTrack('どうぶつの森', 'dAC', 999999, ['どう森']),
  dNBC: makeTrack('3DS ネオクッパシティ', 'dNBC', 999999, ['ネオパ']),
  dRiR: makeTrack('GBA リボンロード', 'dRiR', 999999, ['リボン']),
  dSBS: makeTrack('リンリンメトロ', 'dSBS', 999999, ['リンメト']),
  dBB: makeTrack('ビッグブルー', 'dBB', 999999, ['BB']),
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
