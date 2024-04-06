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
  MKS: makeTrack('マリオカートスタジアム', 'MKS', 139745, 'https://www.youtube.com/watch?v=lQH-iX37plc', 138637, ['マリカス']),
  WP: makeTrack('ウォーターパーク', 'WP', 141575, 'https://youtu.be/ekGa6RD0N2c', 141163, ['ウォタパ']),
  SSC: makeTrack('スイーツキャニオン', 'SSC', 153874, 'https://youtu.be/Egiq2yPXcZ8', 153874, ['スイキャニ']),
  TR: makeTrack('ドッスンいせき', 'TR', 152714, 'https://www.youtube.com/watch?v=ph_5uW1RNwY', 151942, ['遺跡', 'ドッスン', 'いせき', 'ドッスン遺跡']),
  MC: makeTrack('マリオサーキット', 'MC', 148053, 'https://youtu.be/AjwmGP8LDwE', 148053, ['新マリサ', 'しんマリサ']),
  TH: makeTrack('キノピオハーバー', 'TH', 204894, 'https://www.youtube.com/watch?v=p6ZN3n349Xc', 204894, ['ハーバー']),
  TM: makeTrack('ねじれマンション', 'TM', 158715, 'https://youtu.be/Lxi-gQHRfyQ', 158447, ['ねじマン', 'ねじれ']),
  SGF: makeTrack('ヘイホーこうざん', 'SGF', 158316, 'https://www.youtube.com/watch?v=2TfZpzcjpxM', 158316, ['ヘイホー鉱山', 'ヘイこう', 'こうざん']),
  SA: makeTrack('サンシャインくうこう', 'SA', 200913, 'https://youtu.be/3AfMY-Sjkps', 200498, ['サンシャイン空港', '空港', 'くうこう', 'サンシャイン']),
  DS: makeTrack('ドルフィンみさき', 'DS', 157289, 'https://youtu.be/OfzlAJrm4M4', 156408, ['ドルミ']),
  Ed: makeTrack('エレクトロドリーム', 'Ed', 200835, 'https://youtu.be/fJPQQ2FARz8', 200835, ['エレドリ']),
  MW: makeTrack('ワリオスノーマウンテン', 'MW', 143553, 'https://youtu.be/0eNt-KRGyik', 143553, ['ワリスノ', '雪山']),
  CC: makeTrack('スカイガーデン', 'CC', 202060, 'https://youtu.be/b7kwhqM4iYg', 201884, ['スカガ', '新スカガ']),
  BDD: makeTrack('ホネホネさばく', 'BDD', 151705, 'https://youtu.be/H4_tuUeAg3I', 151705, ['ホネサバ', 'ホネホネ']),
  BC: makeTrack('クッパキャッスル', 'BC', 202832, 'https://youtu.be/r9lQyn5TTNU', 202250, ['クパキャ']),
  RR: makeTrack('レインボーロード', 'RR', 201161, 'https://youtu.be/CQTN8CS5v28', 201161, ['新虹', 'しんにじ', 'しん虹', '新にじ']),
  rMMM: makeTrack('Wii モーモーカントリー', 'rMMM', 127209, 'https://youtu.be/8is3VAS8qa4', 127209, ['Wiiモーモーカントリー', 'モモカン', 'モーモーカントリー', 'MMM']),
  rMC: makeTrack('GBA マリオサーキット', 'rMC', 127355, 'https://youtu.be/0LkKnfmTbSE', 127355, ['GBAマリオサーキット', 'グバマリ', 'GBAマリサ']),
  rCCB: makeTrack('DS プクプクビーチ', 'rCCB', 149560, 'https://youtu.be/Rde0jzOzis0', 149560, ['プクプクビーチ', 'プクビ', 'プクプク', 'CCB']),
  rTT: makeTrack('N64 キノピオハイウェイ', 'rTT', 147996, 'https://youtu.be/nDBYdsrXtIE', 147148, ['ハイウェイ', 'キノピオハイウェイ', 'TT']),
  rDDD: makeTrack('GC カラカラさばく', 'rDDD', 200486, 'https://www.youtube.com/watch?v=zel3p5VK1jA', 200486, ['GCカラカラさばく', 'カラカラさばく', 'カラサバ']),
  rDP3: makeTrack('SFC ドーナツへいや3', 'rDP3', 117640, 'https://youtu.be/ZSfssw5QDcM', 117640, ['ドーナツへいや3', '平野', 'へいや', 'ドーナツへいや', 'DP3']),
  rRRy: makeTrack('N64 ピーチサーキット', 'rRRy', 158992, 'https://youtu.be/B4UU6ckrYHk', 158857, ['ピチサ', 'ピーチサーキット', 'RRy']),
  rDKJ: makeTrack('3DS DKジャングル', 'rDKJ', 203906, 'https://www.youtube.com/watch?v=IUHApcXjlNk', 203839, ['ジャングル', 'DKジャングル', 'DKJ', 'DK じゃんぐる']),
  rWS: makeTrack('DS ワリオスタジアム', 'rWS', 152817, 'https://youtu.be/lEA1pSWjiOw', 152817, ['ワリスタ', 'ワリオスタジアム', 'WS']),
  rSL: makeTrack('GC シャーベットランド', 'rSL', 150329, 'https://youtu.be/jEoY2huGjgk', 149804, ['シャベラン', 'シャーベットランド', 'SL']),
  rMP: makeTrack('3DS ミュージックパーク', 'rMP', 153013, 'https://youtu.be/ixVfhaGFKR8', 152998, ['ミューパ', 'ミュージックパーク', 'MP']),
  rYV: makeTrack('N64 ヨッシーバレー', 'rYV', 203216, 'https://youtu.be/SFFvCpPkweM', 202975, ['ヨシバ', 'ヨッシーバレー', 'YV']),
  rTTC: makeTrack('DS チクタクロック', 'rTTC', 144130, 'https://www.youtube.com/watch?v=xHR8akw17os', 143377, ['チクタク', 'チクタクロック', 'TTC']),
  rPPS: makeTrack('3DS パックンスライダー', 'rPPS', 203268, 'https://youtu.be/W0vohnC5nEo', 202681, ['パクスラ', 'パックンスライダー', 'PPS']),
  rGV: makeTrack('Wii グラグラかざん', 'rGV', 155341, 'https://www.youtube.com/watch?v=YIM0BrZL01I', 155341, ['火山', 'かざん', 'グラグラかざん', 'GV']),
  rRRd: makeTrack('N64 レインボーロード', 'rRRd', 121195, 'https://www.youtube.com/watch?v=QF0o9vMVRb0', 120766, ['N64レインボーロード', '64レインボーロード', 'N64レインボー', 'N64虹', 'N64にじ', '64虹', '64にじ', '64レインボー', 'RRd']),
  dYC: makeTrack('GC ヨッシーサーキット', 'dYC', 146171, 'https://youtu.be/88OkOf_PXjQ', 146171, ['ヨシサ', 'ヨッシーサーキット', 'YC']),
  dEA: makeTrack('エキサイトバイク', 'dEA', 142947, 'https://www.youtube.com/watch?v=gcOB_QeUS_g', 142914, ['エキバ', 'EA']),
  dDD: makeTrack('ドラゴンロード', 'dDD', 145817, 'https://www.youtube.com/watch?v=EFLtWRU7uiE', 145399, ['ドラロ', 'DD']),
  dMC: makeTrack('ミュートシティ', 'dMC', 155281, 'https://youtu.be/efNP7B73uNU', 154919, ['ミュート']),
  dWGM: makeTrack('Wii ワリオこうざん', 'dWGM', 204175, 'https://youtu.be/wYDVC4udwQc', 204175, ['ワリこう', 'ワリオこうざん', 'WGM', 'ワリ鉱', 'ワリオ鉱山']),
  dRR: makeTrack('SFC レインボーロード', 'dRR', 128456, 'https://youtu.be/eYRy1iKpxSg', 128456, ['SFCレインボーロード', 'SFC虹', 'SFCにじ', 'SFCレインボー']),
  dIIO: makeTrack('ツルツルツイスター', 'dIIO', 147725, 'https://youtu.be/WpH6qwjrM_k', 147409, ['ツツツ', 'ツルツル', 'IIO']),
  dHC: makeTrack('ハイラルサーキット', 'dHC', 150981, 'https://www.youtube.com/watch?v=DLpuUC_fEQ8', 150930, ['ハイラル', 'HC']),
  dBP: makeTrack('GC ベビィパーク', 'dBP', 104043, 'https://youtu.be/KMdWxRubzpA', 103764, ['ベビィパーク', 'ベビーパーク', 'ベビパ', 'BP']),
  dCL: makeTrack('GBA チーズランド', 'dCL', 148853, 'https://youtu.be/_swYjseaP4U', 148397, ['チーズ', 'チーズランド', 'CL']),
  dWW: makeTrack('ネイチャーロード', 'dWW', 147908, 'https://youtu.be/aRFuoiB4nnI', 147789, ['ネイチャー', 'WW']),
  dAC: makeTrack('どうぶつの森', 'dAC', 141409, 'https://youtu.be/HnCIV1MPyIE', 140935, ['どうぶつのもり', 'どうもり', 'どう森', 'AC']),
  dNBC: makeTrack('3DS ネオクッパシティ', 'dNBC', 146187, 'https://www.youtube.com/watch?v=J2JJ2p6qjy8', 146187, ['ネオパ', 'ネオクッパ', 'ネオクッパシティ', 'NBC']),
  dRiR: makeTrack('GBA リボンロード', 'dRiR', 151168, 'https://youtu.be/qrw_JImJsi0', 150681, ['リボン', 'リボロ', 'リボンロード', 'RiR']),
  dSBS: makeTrack('リンリンメトロ', 'dSBS', 144599, 'https://www.youtube.com/watch?v=Y7_nJLQsTyY', 144599, ['リンメト', 'SBS']),
  dBB: makeTrack('ビッグブルー', 'dBB', 126165, 'https://youtu.be/uh3BxtUdo1I', 125983, ['BB', 'ビックブルー']),
  bPP: makeTrack('Tour パリプロムナード', 'bPP', 151756, 'https://www.youtube.com/watch?v=KWsuSpC-VMA', 151539, ['パリ', 'パリプロムナード', 'PP']),
  bTC: makeTrack('3DS キノピオサーキット', 'bTC', 124337, 'https://vt.tiktok.com/ZSNTHB93V', 124307, ['キノサ', 'キノピオサーキット', 'TC']),
  bCMo: makeTrack('N64 チョコマウンテン', 'bCMo', 154347, 'https://www.youtube.com/watch?v=Yl7EVR0ecm0', 154347, ['チョコマ', 'チョコマウンテン', 'CMo']),
  bCMa: makeTrack('Wii ココナッツモール', 'bCMa', 144141, 'https://youtu.be/M7m0XG5Y8lY', 144141, ['ココモ', 'ココナッツモール', 'CMa']),
  bTB: makeTrack('Tour トーキョースクランブル', 'bTB', 127806, 'https://www.youtube.com/watch?v=9CxetJwDksI', 127522, ['東京', 'トーキョー', 'トーキョースクランブル', 'TB']),
  bSR: makeTrack('DS キノコリッジウェイ', 'bSR', 147948, 'https://www.youtube.com/watch?v=en1juGwAi0s', 147948, ['リッジウェイ', 'キノコリッジウェイ', 'キノコリッジ', 'SR']),
  bSG: makeTrack('GBA スカイガーデン', 'bSG', 130737, 'https://youtu.be/iPSJ011VLds', 130737, ['GBAスカイガーデン', 'グバスカ', 'GBAスカガ', 'SG']),
  bNH: makeTrack('Tour ニンニンドージョー', 'bNH', 154002, 'https://www.youtube.com/watch?v=wOSXC9p9G4o', 153645, ['ニンニン', 'ニンニンドージョー', 'NH']),
  bNYM: makeTrack('Tour ニューヨークドリーム', 'bNYM', 124883, 'https://youtu.be/9NtEilNzXME', 124883, ['ニューヨーク', 'ニューヨークドリーム', 'NYM', 'NY']),
  bMC3: makeTrack('SFC マリオサーキット3', 'bMC3', 135884, 'https://youtu.be/s0FHggDszt4', 135884, ['SFCマリオサーキット3', 'SFCマリオサーキット', 'マリオサーキット3', 'マリサ3', 'SFCマリサ', 'SFCマリサ3', 'MC3']),
  bKD: makeTrack('N64 カラカラさばく', 'bKD', 133895, 'https://youtu.be/NiBYq118t8c', 133844, ['N64カラカラさばく', '64カラカラさばく', '64カラサバ', 'KD']),
  bWP: makeTrack('DS ワルイージピンボール', 'bWP', 220832, 'https://www.youtube.com/watch?v=jtlc-CgGd9U', 220832, ['ワルピン', 'ワルイージピンボール']),
  bSS: makeTrack('Tour シドニーサンシャイン', 'bSS', 203216, 'https://youtube.com/watch?v=n_XAXMnFFJ4&si=3KusyNgrMHVCnPns', 203216, ['シドニー', 'シドニーサンシャイン', 'SS']),
  bSL: makeTrack('GBA スノーランド', 'bSL', 137009, 'https://www.youtube.com/watch?v=5FHD4FrCxyQ', 136568, ['スノラン', 'スノーランド']),
  bMG: makeTrack('Wii キノコキャニオン', 'bMG', 135837, 'https://www.youtube.com/watch?v=OnyzC_FlWAA', 135837, ['キノキャニ', 'キノコキャニオン', 'MG']),
  bSHS: makeTrack('アイスビルディング', 'bSHS', 156878, 'https://youtu.be/6ECo9K3m32I', 155364, ['アイス', 'アイビル', 'SHS']),
  bLL: makeTrack('Tour ロンドンアベニュー', 'bLL', 212411, 'https://youtu.be/uCOu7Z0qnfs', 211833, ['ロンドン', 'ロンドンアベニュー', 'アベニュー', 'LL']),
  bBL: makeTrack('GBA テレサレイク', 'bBL', 123455, 'https://youtu.be/NOIGu64i2EM', 123455, ['テレレ', 'テレサレイク', 'レイク', 'BL']),
  bRRM: makeTrack('3DS ロックロックマウンテン', 'bRRM', 215863, 'https://youtu.be/ISeXZIc4vpk', 214664, ['ロクマ', 'ロックロックマウンテン', 'RRM']),
  bMT: makeTrack('Wii メイプルツリーハウス', 'bMT', 225937, 'https://youtu.be/RvYHwSBSpmg', 225654, ['メイプル', 'メイプルツリーハウス', 'MT']),
  bBB: makeTrack('Tour ベルリンシュトラーセ', 'bBB', 159676, 'https://www.youtube.com/watch?v=CZWIY6BiHBU', 159482, ['ベルリン', 'ベルリンシュトラーセ']),
  bPG: makeTrack('DS ピーチガーデン', 'bPG', 208334, 'https://youtu.be/rnghyqYXQ70', 208334, ['ピチガ', 'ピーチガーデン', 'PG']),
  bMM: makeTrack('Tour メリーメリーマウンテン', 'bMM', 158006, 'https://youtu.be/HiOK1aEEUXQ', 157668, ['メリマ', 'メリーメリーマウンテン', 'メリマン', 'MM']),
  bRR7: makeTrack('3DS レインボーロード', 'bRR7', 138844, 'https://youtu.be/CSLAUflVl6Y', 138844, ['3DSレインボーロード', '7虹', '7にじ', '7レインボー', '3DSレインボー', '3DS虹', '3DSにじ', 'RR7']),
  bAD: makeTrack('Tour アムステルダムブルーム', 'bAD', 138142, 'https://www.youtube.com/watch?v=g36YC-z-LNQ', 138046, ['アムス', 'アムステルダム', 'アムステルダムブルーム', 'AD']),
  bRP: makeTrack('GBA リバーサイドパーク', 'bRP', 131733, 'https://youtu.be/d0Bk9KPwOvc', 131452, ['リバパ', 'リバーサイドパーク', 'リバーサイド', 'リバサ', 'RP']),
  bDKS: makeTrack('Wii DKスノーボードクロス', 'bDKS', 158415, 'https://youtu.be/p8Jz9si8c7g', 158415, ['スノボ', 'DKスノーボードクロス', 'スノーボードクロス', 'DKS']),
  bYI: makeTrack('ヨッシーアイランド', 'bYI', 200510, 'https://www.youtube.com/watch?v=zeglg4__3c4', 200510, ['ヨシアイ', 'YI']),
  bBR: makeTrack('Tour バンコクラッシュ', 'bBR', 144451, 'https://www.youtube.com/watch?v=oYzdRq492-k', 144451, ['バンコク', 'バンコクラッシュ', 'BR']),
  bMC: makeTrack('DS マリオサーキット', 'bMC', 141878, 'https://youtu.be/QN0oK_u2ETk', 141878, ['DSマリサ']),
  bWS: makeTrack('GC ワルイージスタジアム', 'bWS', 158367, 'https://www.youtube.com/watch?v=Y-M0xdexdCo&t=499s', 158367, ['ワルスタ', 'ワルイージスタジアム']),
  bSSy: makeTrack('Tour シンガポールスプラッシュ', 'bSSy', 158326, 'https://youtu.be/CA7j8J8BvZE', 158306, ['シンガポール', 'シンガポールスプラッシュ', 'SSy']),
  bAtD: makeTrack('Tour アテネポリス', 'bAtD', 141404, 'https://youtu.be/sj0HEqMD0Lw', 141404, ['アテネ', 'アテネポリス', 'AtD']),
  bDC: makeTrack('GC デイジークルーザー', 'bDC', 135686, 'https://youtu.be/_-HypEbIVyI', 135686, ['デイクル', 'デイジークルーザー', 'DC']),
  bMH: makeTrack('Wii ムーンリッジ＆ハイウェイ', 'bMH', 144765, 'https://www.youtube.com/watch?v=zdyNKfbqTzE', 144595, ['ムーンリッジ＆ハイウェイ', 'ムーンリッジ', 'ムーンリッジハイウェイ', 'ムンリ', 'MH', '月']),
  bSCS: makeTrack('シャボンロード', 'bSCS', 203804, 'https://youtu.be/Ag-7d0W4dME', 203804, ['シャボン', 'SCS']),
  bLAL: makeTrack('Tour ロサンゼルスコースト', 'bLAL', 149282, 'https://www.youtube.com/watch?v=Q9YcNuXJlt8', 149282, ['ロス', 'ロサンゼルス', 'ロサンゼルスコースト', 'LAL']),
  bSW: makeTrack('GBA サンセットこうや', 'bSW', 137096, 'https://youtu.be/gaxyww0xDGw', 137096, ['サンセット', 'こうや', 'サンセットこうや', 'SW']),
  bKC: makeTrack('Wii ノコノコみさき', 'bKC', 201294, 'https://youtu.be/XCaiynWK9W8', 201294, ['ノコみさ', 'ノコノコみさき', 'ノコノコ', 'のこみ', 'KC']),
  bVV: makeTrack('Tour バンクーバーバレー', 'bVV', 202333, 'https://www.youtube.com/watch?v=pwWDAaXGlwM', 202333, ['バンクーバー', 'バンクーバーバレー', 'VV']),
  bRA: makeTrack('Tour ローマアバンティ', 'bRA', 147193, 'https://www.youtube.com/watch?v=8UKVAGsdK9I', 147193, ['ローマ', 'ローマアバンティ', 'RA']),
  bDKM: makeTrack('GC DKマウンテン', 'bDKM', 211830, 'https://www.youtube.com/watch?v=WaheDErFJdM', 211830, ['DKマウンテン', 'DKM']),
  bDCt: makeTrack('Wii デイジーサーキット', 'bDCt', 150880, 'https://www.youtube.com/watch?v=Od6EEcASdN4', 150880, ['デイサ', 'デイジーサーキット', 'デジサ', 'DCt']),
  bPPC: makeTrack('Tour パックンしんでん', 'bPPC', 202812, 'https://www.youtube.com/watch?v=BrufrzVYiRM', 202812, ['パクしん', 'パックンしんでん', 'PPC']),
  bMD: makeTrack('Tour マドリードグランデ', 'bMD', 159924, 'https://youtu.be/QzzP53exnqo', 159924, ['マドリード', 'マドリードグランデ', 'MD']),
  bRIW: makeTrack('3DS ロゼッタプラネット', 'bRIW', 159970, 'https://www.youtube.com/watch?v=QbdeIpuHCEc', 159970, ['ロゼプラ', 'ロゼッタプラネット', 'RIW']),
  bBC3: makeTrack('SFC クッパじょう3', 'bBC3', 143278, 'https://youtu.be/3D76rvRx7j4', 143278, ['クッパじょう', 'クッパ城', 'クッパ城3', 'クッパじょう3', 'BC3']),
  bRRw: makeTrack('Wii レインボーロード', 'bRRw', 234834, 'https://www.youtube.com/watch?v=5i2H4fu-0ZA', 233931, ['Wiiレインボーロード', 'Wii虹', 'Wiiにじ', 'Wiiレインボー', 'RRw']),
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
