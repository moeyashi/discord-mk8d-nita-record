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
  WP: makeTrack('ウォーターパーク', 'WP', 141443, 'https://youtu.be/pFPvN8M0rEo', 141163, ['ウォタパ']),
  SSC: makeTrack('スイーツキャニオン', 'SSC', 153874, 'https://youtu.be/Egiq2yPXcZ8?feature=shared', 153874, ['スイキャニ']),
  TR: makeTrack('ドッスンいせき', 'TR', 152571, 'https://www.youtube.com/watch?v=521O4FCa8qg&list=PLaKa6JcPOZu6MHCu7A51RvFvcZwh8TdUB&index=93&pp=iAQB', 151942, ['遺跡', 'ドッスン', 'いせき', 'ドッスン遺跡']),
  MC: makeTrack('マリオサーキット', 'MC', 147953, 'https://youtu.be/lJ0sKPNLf7Y?si=ew02hAqED5a77Lsc', 147953, ['新マリサ', 'しんマリサ']),
  TH: makeTrack('キノピオハーバー', 'TH', 204894, 'https://www.youtube.com/watch?v=p6ZN3n349Xc', 204894, ['ハーバー']),
  TM: makeTrack('ねじれマンション', 'TM', 158715, 'https://youtu.be/Lxi-gQHRfyQ?si=6bK3vHav1g8F2pNo', 158447, ['ねじマン', 'ねじれ']),
  SGF: makeTrack('ヘイホーこうざん', 'SGF', 158199, 'https://www.youtube.com/watch?v=sesaP1589Gw', 158199, ['ヘイホー鉱山', 'ヘイこう', 'こうざん']),
  SA: makeTrack('サンシャインくうこう', 'SA', 200913, 'https://youtu.be/3AfMY-Sjkps', 200498, ['サンシャイン空港', '空港', 'くうこう', 'サンシャイン']),
  DS: makeTrack('ドルフィンみさき', 'DS', 157289, 'https://youtu.be/OfzlAJrm4M4', 156408, ['ドルミ']),
  Ed: makeTrack('エレクトロドリーム', 'Ed', 200429, 'https://youtu.be/umy1WwRb28g?feature=shared', 200429, ['エレドリ']),
  MW: makeTrack('ワリオスノーマウンテン', 'MW', 143553, 'https://youtu.be/0eNt-KRGyik?si=pqvpUJur7d7PWGSU', 143553, ['ワリスノ', '雪山']),
  CC: makeTrack('スカイガーデン', 'CC', 201587, 'https://youtu.be/IKdqhZV-cdA', 201587, ['スカガ', '新スカガ']),
  BDD: makeTrack('ホネホネさばく', 'BDD', 151705, 'https://youtu.be/H4_tuUeAg3I', 151705, ['ホネサバ', 'ホネホネ', 'ホネホネ砂漠']),
  BC: makeTrack('クッパキャッスル', 'BC', 202474, 'https://youtu.be/iNaDIFFYaEM', 202250, ['クパキャ']),
  RR: makeTrack('レインボーロード', 'RR', 201161, 'https://youtu.be/CQTN8CS5v28', 200865, ['新虹', 'しんにじ', 'しん虹', '新にじ']),
  rMMM: makeTrack('Wii モーモーカントリー', 'rMMM', 127004, 'https://youtu.be/EQsHAZsiqd0?si=aB8_9DggBYA0uOi1', 127004, ['Wiiモーモーカントリー', 'モモカン', 'モーモーカントリー', 'MMM']),
  rMC: makeTrack('GBA マリオサーキット', 'rMC', 127146, 'https://www.youtube.com/watch?v=BzB5PrrhhTE', 127146, ['GBAマリオサーキット', 'グバマリ', 'GBAマリサ']),
  rCCB: makeTrack('DS プクプクビーチ', 'rCCB', 149469, 'https://youtu.be/j8ZCJwzlXjQ?si=fyRZUe7fReC5Tv1Z', 149469, ['プクプクビーチ', 'プクビ', 'プクプク', 'CCB']),
  rTT: makeTrack('N64 キノピオハイウェイ', 'rTT', 147996, 'https://youtu.be/nDBYdsrXtIE?si=B1KoUdA05j4JF6Fe', 147148, ['ハイウェイ', 'キノピオハイウェイ', 'TT']),
  rDDD: makeTrack('GC カラカラさばく', 'rDDD', 200486, 'https://www.youtube.com/watch?v=zel3p5VK1jA', 200486, ['GCカラカラさばく', 'カラカラさばく', 'カラカラ砂漠', 'カラサバ']),
  rDP3: makeTrack('SFC ドーナツへいや3', 'rDP3', 117640, 'https://youtu.be/ZSfssw5QDcM?si=28IwgSdmYaSlUv6l', 117640, ['ドーナツへいや3', '平野', 'へいや', 'SFCドーナツへいや3', 'ドーナツへいや', 'ドーナツ平野', 'DP3']),
  rRRy: makeTrack('N64 ピーチサーキット', 'rRRy', 158992, 'https://youtu.be/B4UU6ckrYHk', 158857, ['ピチサ', 'ピーチサーキット', 'RRy']),
  rDKJ: makeTrack('3DS DKジャングル', 'rDKJ', 203906, 'https://www.youtube.com/watch?v=IUHApcXjlNk', 203839, ['ジャングル', 'DKジャングル', 'DKJ', 'DK じゃんぐる']),
  rWS: makeTrack('DS ワリオスタジアム', 'rWS', 152817, 'https://youtu.be/lEA1pSWjiOw', 152817, ['ワリスタ', 'ワリオスタジアム', 'WS']),
  rSL: makeTrack('GC シャーベットランド', 'rSL', 150256, 'https://www.youtube.com/watch?v=M0Bu_9qELeE', 149804, ['シャベラン', 'シャーベットランド', 'SL']),
  rMP: makeTrack('3DS ミュージックパーク', 'rMP', 153013, 'https://youtu.be/ixVfhaGFKR8', 152998, ['ミューパ', 'ミュージックパーク', 'MP']),
  rYV: makeTrack('N64 ヨッシーバレー', 'rYV', 202853, 'https://youtu.be/2Qtqd1tvRF8', 202853, ['ヨシバ', 'ヨッシーバレー', 'YV']),
  rTTC: makeTrack('DS チクタクロック', 'rTTC', 143681, 'https://www.youtube.com/watch?v=NG57bGBBnfM', 143377, ['チクタク', 'チクタクロック', 'TTC']),
  rPPS: makeTrack('3DS パックンスライダー', 'rPPS', 203211, 'https://youtu.be/BSoCORqLH1s?si=BQCmOowf70Sd8S8s', 202676, ['パクスラ', 'パックンスライダー', 'PPS']),
  rGV: makeTrack('Wii グラグラかざん', 'rGV', 155341, 'https://www.youtube.com/watch?v=YIM0BrZL01I', 155341, ['火山', 'かざん', 'グラグラ', 'グラグラ火山', 'グラグラかざん', 'GV']),
  rRRd: makeTrack('N64 レインボーロード', 'rRRd', 121195, 'https://www.youtube.com/watch?v=QF0o9vMVRb0', 120766, ['N64レインボーロード', '64レインボーロード', 'N64レインボー', 'N64虹', 'N64にじ', '64虹', '64にじ', '64レインボー', 'RRd']),
  dYC: makeTrack('GC ヨッシーサーキット', 'dYC', 146171, 'https://youtu.be/88OkOf_PXjQ?si=8g5ZO2jfmNj6mq85', 145992, ['ヨシサ', 'ヨッシーサーキット', 'YC']),
  dEA: makeTrack('エキサイトバイク', 'dEA', 142947, 'https://www.youtube.com/watch?v=gcOB_QeUS_g', 142914, ['エキバ', 'EA']),
  dDD: makeTrack('ドラゴンロード', 'dDD', 145817, 'https://www.youtube.com/watch?v=EFLtWRU7uiE', 145354, ['ドラロ', 'DD']),
  dMC: makeTrack('ミュートシティ', 'dMC', 155281, 'https://youtu.be/efNP7B73uNU', 154919, ['ミュート', 'ミュートシティー']),
  dWGM: makeTrack('Wii ワリオこうざん', 'dWGM', 203551, 'https://www.youtube.com/watch?v=KQtMUnHG9jg', 203132, ['ワリこう', 'ワリオこうざん', 'WGM', 'ワリ鉱', 'ワリオ鉱山']),
  dRR: makeTrack('SFC レインボーロード', 'dRR', 128456, 'https://youtu.be/eYRy1iKpxSg', 128456, ['SFCレインボーロード', 'SFC虹', 'SFCにじ', 'SFCレインボー']),
  dIIO: makeTrack('ツルツルツイスター', 'dIIO', 147684, 'https://www.youtube.com/watch?v=HhGzBCAE9tk', 147409, ['ツツツ', 'ツルツル', 'IIO']),
  dHC: makeTrack('ハイラルサーキット', 'dHC', 150981, 'https://www.youtube.com/watch?v=DLpuUC_fEQ8', 150930, ['ハイラル', 'HC']),
  dBP: makeTrack('GC ベビィパーク', 'dBP', 104043, 'https://youtu.be/KMdWxRubzpA?si=eqtuqkmyJvsBxSpX', 103764, ['ベビィパーク', 'ベビーパーク', 'ベビパ', 'BP']),
  dCL: makeTrack('GBA チーズランド', 'dCL', 148094, 'https://www.youtube.com/watch?v=I4w6Z5CmsO8', 148094, ['チーズ', 'チーズランド', 'CL']),
  dWW: makeTrack('ネイチャーロード', 'dWW', 147908, 'https://youtu.be/aRFuoiB4nnI', 147789, ['ネイチャー', 'ネイチャ', 'WW']),
  dAC: makeTrack('どうぶつの森', 'dAC', 141291, 'https://www.youtube.com/watch?v=beoIri5c2Dw&ab_channel=PlayMK8', 140935, ['どうぶつのもり', 'どうもり', 'どう森', 'AC']),
  dNBC: makeTrack('3DS ネオクッパシティ', 'dNBC', 146187, 'https://www.youtube.com/watch?v=J2JJ2p6qjy8', 146187, ['ネオパ', 'ネオクッパ', 'ネオクッパシティ', 'NBC']),
  dRiR: makeTrack('GBA リボンロード', 'dRiR', 150801, 'https://youtu.be/eTH0VGPbJDI?si=ZHOYOJDjR_55T7Fm', 150681, ['リボン', 'リボロ', 'リボンロード', 'RiR']),
  dSBS: makeTrack('リンリンメトロ', 'dSBS', 144599, 'https://www.youtube.com/watch?v=Y7_nJLQsTyY', 144599, ['リンメト', 'SBS']),
  dBB: makeTrack('ビッグブルー', 'dBB', 126165, 'https://youtu.be/uh3BxtUdo1I', 125983, ['BB', 'ビックブルー']),
  bPP: makeTrack('Tour パリプロムナード', 'bPP', 151756, 'https://www.youtube.com/watch?v=KWsuSpC-VMA', 151539, ['パリ', 'パリプロムナード', 'PP']),
  bTC: makeTrack('3DS キノピオサーキット', 'bTC', 124337, 'https://vt.tiktok.com/ZSNTHB93V/', 124307, ['キノサ', 'キノピオサーキット', 'TC']),
  bCMo: makeTrack('N64 チョコマウンテン', 'bCMo', 153834, 'https://youtu.be/_WdGba1EAJ0?si=UBpHd6SKPzE5BWg4', 153834, ['チョコマ', 'チョコマウンテン', 'CMo']),
  bCMa: makeTrack('Wii ココナッツモール', 'bCMa', 143975, 'https://www.youtube.com/watch?v=ZKXZuNcmKIc&list=PLaKa6JcPOZu6MHCu7A51RvFvcZwh8TdUB&index=45&pp=iAQB', 143975, ['ココモ', 'ココナッツモール', 'CMa']),
  bTB: makeTrack('Tour トーキョースクランブル', 'bTB', 127758, 'https://youtu.be/0v3eEQSZjmw', 127454, ['東京', 'トウキョウ', 'トウキョウスクランブル', 'トーキョー', 'トーキョースクランブル', 'TB']),
  bSR: makeTrack('DS キノコリッジウェイ', 'bSR', 147948, 'https://www.youtube.com/watch?v=en1juGwAi0s', 147948, ['リッジウェイ', 'キノコリッジウェイ', 'キノコリッジ', 'リッジ', 'SR']),
  bSG: makeTrack('GBA スカイガーデン', 'bSG', 130611, 'https://youtu.be/J4WoGCmgtnA?si=WIPKLoD03OdscFcq', 130611, ['GBAスカイガーデン', 'グバスカ', 'GBAスカガ', 'SG']),
  bNH: makeTrack('Tour ニンニンドージョー', 'bNH', 153996, 'https://youtu.be/NkuSxjTFNi4?si=U4QTJVSdQ4HX-58o', 153645, ['ニンニン', 'ニンニンドージョー', 'NH']),
  bNYM: makeTrack('Tour ニューヨークドリーム', 'bNYM', 124781, 'https://youtu.be/Uh9MCpR3udk?si=scjKy8XRQsvyocTV', 124781, ['ニューヨーク', 'ニューヨークドリーム', 'NYM', 'NY']),
  bMC3: makeTrack('SFC マリオサーキット3', 'bMC3', 135884, 'https://youtu.be/s0FHggDszt4', 135884, ['SFCマリオサーキット3', 'SFCマリオサーキット', 'マリオサーキット3', 'マリサ3', 'SFCマリサ', 'SFCマリサ3', 'MC3']),
  bKD: makeTrack('N64 カラカラさばく', 'bKD', 133742, 'https://youtu.be/XwmOeeZDFyc?si=FakqpD6-9_v51VgX', 133742, ['N64カラカラさばく', '64カラカラさばく', '64カラサバ', 'KD']),
  bWP: makeTrack('DS ワルイージピンボール', 'bWP', 220795, 'https://youtu.be/ilcauh-07H4?si=11WsqNBl9s29CXJe', 220795, ['ワルピン', 'ワルイージピンボール']),
  bSS: makeTrack('Tour シドニーサンシャイン', 'bSS', 203216, 'https://youtube.com/watch?v=n_XAXMnFFJ4&si=3KusyNgrMHVCnPns', 203216, ['シドニー', 'シドニーサンシャイン', 'SS']),
  bSL: makeTrack('GBA スノーランド', 'bSL', 137009, 'https://www.youtube.com/watch?v=5FHD4FrCxyQ', 136568, ['スノラン', 'スノーランド']),
  bMG: makeTrack('Wii キノコキャニオン', 'bMG', 135837, 'https://www.youtube.com/watch?v=OnyzC_FlWAA', 135837, ['キノキャニ', 'キノコキャニオン', 'MG']),
  bSHS: makeTrack('アイスビルディング', 'bSHS', 156640, 'https://youtu.be/ue-iQ1QeWSg?si=hPRi8I3USnGYT521', 155364, ['アイス', 'アイビル', 'SHS']),
  bLL: makeTrack('Tour ロンドンアベニュー', 'bLL', 212362, 'https://www.youtube.com/watch?v=3-VSBBc-nM8&list=PLaKa6JcPOZu6MHCu7A51RvFvcZwh8TdUB&index=32&pp=iAQB', 211833, ['ロンドン', 'ロンドンアベニュー', 'アベニュー', 'LL']),
  bBL: makeTrack('GBA テレサレイク', 'bBL', 123381, 'https://youtu.be/a2JBzzqF5dg?si', 123381, ['テレレ', 'テレサレイク', 'レイク', 'BL']),
  bRRM: makeTrack('3DS ロックロックマウンテン', 'bRRM', 215863, 'https://youtu.be/ISeXZIc4vpk?feature=shared', 214664, ['ロクマ', 'ロックロックマウンテン', 'RRM']),
  bMT: makeTrack('Wii メイプルツリーハウス', 'bMT', 225937, 'https://youtu.be/RvYHwSBSpmg?si=_oZ1eHOlajz0N-K5', 225654, ['メイプル', 'メイプルツリーハウス', 'MT']),
  bBB: makeTrack('Tour ベルリンシュトラーセ', 'bBB', 159394, 'https://youtu.be/4EqrJRRWkTQ?feature=shared', 159328, ['ベルリン', 'ベルリンシュトラーセ']),
  bPG: makeTrack('DS ピーチガーデン', 'bPG', 207733, 'https://youtu.be/SaLiBuQ41os?si=JDZYiBkrRFoW_qBV', 207733, ['ピチガ', 'ピーチガーデン', 'PG']),
  bMM: makeTrack('Tour メリーメリーマウンテン', 'bMM', 157310, 'https://youtu.be/rrQdIbm8jUo?feature=shared', 157310, ['メリマ', 'メリーメリーマウンテン', 'メリマン', 'MM']),
  bRR7: makeTrack('3DS レインボーロード', 'bRR7', 138844, 'https://youtu.be/CSLAUflVl6Y?si=yQypkchCF9m_B_FC', 138440, ['3DSレインボーロード', '7虹', '7にじ', '7レインボー', '3DSレインボー', '3DS虹', '3DSにじ', 'RR7']),
  bAD: makeTrack('Tour アムステルダムブルーム', 'bAD', 137736, 'https://www.youtube.com/watch?v=MAB1flR2vHc', 137736, ['アムス', 'アムステルダム', 'アムステルダムブルーム', 'AD']),
  bRP: makeTrack('GBA リバーサイドパーク', 'bRP', 131479, 'https://youtu.be/5B69EONP1q4?feature=shared', 131452, ['リバパ', 'リバーサイドパーク', 'リバーサイド', 'リバサ', 'RP']),
  bDKS: makeTrack('Wii DKスノーボードクロス', 'bDKS', 158415, 'https://youtu.be/p8Jz9si8c7g?si=9_Qig4CoyRuIoFY_', 158415, ['スノボ', 'DKスノーボードクロス', 'スノーボードクロス', 'DKS']),
  bYI: makeTrack('ヨッシーアイランド', 'bYI', 200510, 'https://www.youtube.com/watch?v=zeglg4__3c4', 200510, ['ヨシアイ', 'YI']),
  bBR: makeTrack('Tour バンコクラッシュ', 'bBR', 144451, 'https://www.youtube.com/watch?v=oYzdRq492-k', 144451, ['バンコク', 'バンコクラッシュ', 'BR']),
  bMC: makeTrack('DS マリオサーキット', 'bMC', 141878, 'https://youtu.be/QN0oK_u2ETk?si=c9kk9I1LFTd-fYNg', 141878, ['DSマリサ', 'DSマリオサーキット']),
  bWS: makeTrack('GC ワルイージスタジアム', 'bWS', 157952, 'https://youtu.be/XF6af-3GpQs?si=YI1F9WyByPoQWvg7', 157952, ['ワルスタ', 'ワルイージスタジアム']),
  bSSy: makeTrack('Tour シンガポールスプラッシュ', 'bSSy', 157759, 'https://www.youtube.com/watch?v=HSYCPxmnIiA', 157759, ['シンガポール', 'シンガポールスプラッシュ', 'SSy']),
  bAtD: makeTrack('Tour アテネポリス', 'bAtD', 141404, 'https://youtu.be/sj0HEqMD0Lw', 141404, ['アテネ', 'アテネポリス', 'AtD']),
  bDC: makeTrack('GC デイジークルーザー', 'bDC', 135686, 'https://youtu.be/_-HypEbIVyI', 135686, ['デイクル', 'デイジークルーザー', 'DC']),
  bMH: makeTrack('Wii ムーンリッジ＆ハイウェイ', 'bMH', 144765, 'https://www.youtube.com/watch?v=zdyNKfbqTzE', 144595, ['ムーンリッジ＆ハイウェイ', 'ムーンリッジ', 'ムーンリッジハイウェイ', 'ムンリ', 'MH', '月']),
  bSCS: makeTrack('シャボンロード', 'bSCS', 203804, 'https://youtu.be/Ag-7d0W4dME?si=OwbtWyJuBByqabOG', 203804, ['シャボン', 'SCS']),
  bLAL: makeTrack('Tour ロサンゼルスコースト', 'bLAL', 149282, 'https://www.youtube.com/watch?v=Q9YcNuXJlt8', 149282, ['ロス', 'ロサンゼルス', 'LA', 'ロサンゼルスコースト', 'LAL']),
  bSW: makeTrack('GBA サンセットこうや', 'bSW', 137096, 'https://youtu.be/gaxyww0xDGw?si=5e20Rgd1YCmgCoku', 137096, ['サンセット', 'こうや', 'サンセット荒野', 'サンセットこうや', 'SW']),
  bKC: makeTrack('Wii ノコノコみさき', 'bKC', 200914, 'https://youtu.be/J3v61p6_nzA?feature=shared', 200914, ['ノコみさ', 'ノコノコみさき', 'ノコノコ', 'のこみ', 'KC']),
  bVV: makeTrack('Tour バンクーバーバレー', 'bVV', 201612, 'https://www.youtube.com/watch?v=ITlkV7BnO74', 201612, ['バンクーバー', 'バンクーバーバレー', 'VV']),
  bRA: makeTrack('Tour ローマアバンティ', 'bRA', 147193, 'https://www.youtube.com/watch?v=8UKVAGsdK9I', 147193, ['ローマ', 'ローマアバンティ', 'RA']),
  bDKM: makeTrack('GC DKマウンテン', 'bDKM', 210859, 'https://x.com/kuzerox_/status/1781224866592796702?s=46&t=n_XfioWCbx56plliCg1BSA', 210859, ['DKマウンテン', 'DK山', 'DKM']),
  bDCt: makeTrack('Wii デイジーサーキット', 'bDCt', 150880, 'https://www.youtube.com/watch?v=Od6EEcASdN4', 150853, ['デイサ', 'デイジーサーキット', 'デジサ', 'DCt']),
  bPPC: makeTrack('Tour パックンしんでん', 'bPPC', 202812, 'https://www.youtube.com/watch?v=BrufrzVYiRM', 202812, ['パクしん', 'パックンしんでん', 'パックン神殿', 'パク神', 'PPC']),
  bMD: makeTrack('Tour マドリードグランデ', 'bMD', 159924, 'https://youtu.be/QzzP53exnqo?si=MJUoBJNtFgiTDUlW', 159924, ['マドリード', 'マドリードグランデ', 'MD']),
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
