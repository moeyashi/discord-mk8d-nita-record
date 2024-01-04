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
  rMMM: ['rMMM', 'Wii モーモーカントリー', 'モモカン'],
  rMC: ['rMC', 'GBA マリオサーキット', 'グバマリ'],
  rCCB: ['rCCB', 'DS プクプクビーチ', 'プクビ'],
  rTT: ['rTT', 'N64 キノピオハイウェイ', 'ハイウェイ'],
  rDDD: ['rDDD', 'GC カラカラさばく', 'カラサバ'],
  rDP3: ['rDP3', 'SFC ドーナツへいや3', '平野'],
  rRRy: ['rRRy', 'N64 ピーチサーキット', 'ピチサ'],
  rDKJ: ['rDKJ', '3DS DKジャングル', 'ジャングル'],
  rWS: ['rWS', 'DS ワリオスタジアム', 'ワリスタ'],
  rSL: ['rSL', 'GC シャーベットランド', 'シャベラン'],
  rMP: ['rMP', '3DS ミュージックパーク', 'ミューパ'],
  rYV: ['rYV', 'N64 ヨッシーバレー', 'ヨシバ'],
  rTTC: ['rTTC', 'DS チクタクロック', 'チクタク'],
  rPPS: ['rPPS', '3DS パックンスライダー', 'パクスラ'],
  rGV: ['rGV', 'Wii グラグラかざん', '火山'],
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
