// @ts-check
const track = Object.freeze({
  MKS: ['MKS', 'マリオカートスタジアム', 'マリカス'],
  WP: ['WP', 'ウォーターパーク', 'ウォタパ'],
  SSC: ['SSC', 'スイーツキャニオン', 'スイキャニ'],
  TR: ['TR', 'ドッスンいせき', '遺跡'],
  MC: ['MC', 'マリオサーキット', '新マリサ'],
  TH: ['TH', 'ツアーズハイウェイ', 'ツアハイ'],
  TM: ['TM', 'ねじれマンション', 'ねじマン'],
  SGF: ['SGF', 'ヘイホーこうざん', 'ヘイホー鉱山'],
  SA: ['SA', 'サンシャインくうこう', '空港'],
  DS: ['DS', 'ドルフィンみさき', 'ドルミ'],
  Ed: ['Ed', 'エレクトロドリーム', 'エレドリ'],
  MW: ['MW', 'ワリオスノーマウンテン', 'ワリスノ'],
  CC: ['CC', 'スカイガーデン', 'スカガ'],
  BDD: ['BDD', 'ホネホネさばく', 'ホネサバ'],
  BC: ['BC', 'クッパキャッスル', 'クパキャ'],
  RR: ['RR', 'レインボーロード', '新虹'],
  MMM: ['rMMM', 'Wii モーモーカントリー', 'モモカン'],
  rMC: ['rMC', 'GBA マリオサーキット', 'グバマリ'],
  CCB: ['rCCB', 'DS プクプクビーチ', 'プクビ'],
  TT: ['rTT', 'N64 キノピオハイウェイ', 'ハイウェイ'],
  DDD: ['rDDD', 'GC カラカラさばく', 'カラサバ'],
  DP3: ['rDP3', 'SFC ドーナツへいや3', '平野'],
  rRRy: ['rRRy', 'N64 ピーチサーキット', 'ピチサ'],
  DKJ: ['rDKJ', '3DS DKジャングル', 'ジャングル'],
  WS: ['rWS', 'DS ワリオスタジアム', 'ワリスタ'],
  SL: ['rSL', 'GC シャーベットランド', 'シャベラン'],
  MP: ['rMP', '3DS ミュージックパーク', 'ミューパ'],
  YV: ['rYV', 'N64 ヨッシーバレー', 'ヨシバ'],
  TTC: ['rTTC', 'DS チクタクロック', 'チクタク'],
  PPS: ['rPPS', '3DS パックンスライダー', 'パクスラ'],
  GV: ['rGV', 'Wii グラグラかざん', '火山'],
  rRRd: ['rRRd', 'N64 レインボーロード', '64虹'],
  dYC: ['dYC', 'GC ヨッシーサーキット', 'ヨシサ'],
  dEA: ['dEA', 'エキサイトバイク', 'エキバ'],
  dDD: ['dDD', 'ドラゴンロード', 'ドラロ'],
  dMC: ['dMC', 'ミュートシティ', 'ミュート'],
  dWGM: ['dWGM', 'ワリオこうざん', 'ワリこう'],
  dRR: ['dRR', 'SFC レインボーロード', 'SFC虹'],
  dIIO: ['dIIO', 'ツルツルツイスター', 'ツツツ'],
  dHC: ['dHC', 'ハイラルサーキット', 'ハイラル'],
  dBP: ['dBP', 'GC ベビィパーク', 'ベビパ'],
  dCL: ['dCL', 'GBA チーズランド', 'チーズ'],
  dWW: ['dWW', 'ネイチャーロード', 'ネイチャー'],
  dAC: ['dAC', 'どうぶつの森', 'どう森'],
  dNBC: ['dNBC', '3DS ネオクッパシティ', 'ネオパ'],
  dRiR: ['dRiR', 'GBA リボンロード', 'リボン'],
  dSBS: ['dSBS', 'リンリンメトロ', 'リンメト'],
  dBB: ['dBB', 'ビッグブルー', 'BB'],
});

export const trackCodeSet = new Set(Object.keys(track));

/** @type {Map<string, string>} */
const trackCodeMap = Object.entries(track).reduce((acc, [key, value]) => {
  value.forEach((v) => {
    acc.set(v, key);
  });
  return acc;
}, new Map());

export const searchTrack = (
  /** @type {string} */
  query,
) => {
  const code = trackCodeMap.get(query);
  if (code) {
    return code;
  }
  return null;
};
