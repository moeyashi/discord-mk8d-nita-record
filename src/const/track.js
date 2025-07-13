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
  MKS: makeTrack('マリオカートスタジアム', 'MKS', 139332, 'https://youtu.be/uTPigvK0RBU?si=1VrBQ76dL4VPjO6l', 138538, ['マリカス']),
  WP: makeTrack('ウォーターパーク', 'WP', 141327, 'https://youtu.be/EBg0Zw73qak?si=hkdsMaJ9677jteIl', 141062, ['ウォタパ']),
  SSC: makeTrack('スイーツキャニオン', 'SSC', 153643, 'https://youtu.be/wb2-vpuab2M?si=3-PN91kdGf_fhNWU', 152846, ['スイキャニ']),
  TR: makeTrack('ドッスンいせき', 'TR', 151820, 'https://youtu.be/_ekFsiz841I?si=lUGFeZlUfUR79Htd', 150410, ['遺跡', 'ドッスン', 'いせき', 'ドッスン遺跡']),
  MC: makeTrack('マリオサーキット', 'MC', 147911, 'https://youtu.be/GtzbC25DPKg?si=AFxXQ0NsX6MFkc-p', 147859, ['新マリサ', 'しんマリサ']),
  TH: makeTrack('キノピオハーバー', 'TH', 204610, 'https://youtu.be/Z5QIjnNkWMU', 204610, ['ハーバー']),
  TM: makeTrack('ねじれマンション', 'TM', 158644, 'https://youtu.be/uZ-2vRgeDZI?si=7GYGKwhDVYnNVcbF', 158425, ['ねじマン', 'ねじれ']),
  SGF: makeTrack('ヘイホーこうざん', 'SGF', 157956, 'https://www.youtube.com/watch?v=bYNQNHqjs_c', 157956, ['ヘイホー鉱山', 'ヘイこう', 'こうざん']),
  SA: makeTrack('サンシャインくうこう', 'SA', 200357, 'https://youtu.be/wqJecs3OU6M?feature=shared', 200357, ['サンシャイン空港', '空港', 'くうこう', 'サンシャイン']),
  DS: makeTrack('ドルフィンみさき', 'DS', 156736, 'https://www.youtube.com/watch?v=K_NLHMKKoQo', 155812, ['ドルミ']),
  Ed: makeTrack('エレクトロドリーム', 'Ed', 200429, 'https://youtu.be/umy1WwRb28g?feature=shared', 200429, ['エレドリ']),
  MW: makeTrack('ワリオスノーマウンテン', 'MW', 143262, 'https://youtu.be/f06bm_4ynYQ?si=SeOdMM2FjkCWy794', 143262, ['ワリスノ', '雪山']),
  CC: makeTrack('スカイガーデン', 'CC', 201587, 'https://youtu.be/IKdqhZV-cdA', 201587, ['スカガ', '新スカガ']),
  BDD: makeTrack('ホネホネさばく', 'BDD', 151278, 'https://youtu.be/lVlF1ov0uYo?feature=shared', 151278, ['ホネサバ', 'ホネホネ', 'ホネホネ砂漠']),
  BC: makeTrack('クッパキャッスル', 'BC', 202470, 'https://youtu.be/W0Pf86x2ELo?si=a0iMb3h7hmey8kiv', 202250, ['クパキャ']),
  RR: makeTrack('レインボーロード', 'RR', 200960, 'https://youtu.be/sIuzDGCYE4U?feature=shared', 200865, ['新虹', 'しんにじ', 'しん虹', '新にじ']),
  rMMM: makeTrack('Wii モーモーカントリー', 'rMMM', 126780, 'https://youtu.be/g7bVEkfHZmc?si=9IvV5iN6AntQwKZH', 126731, ['Wiiモーモーカントリー', 'モモカン', 'モーモーカントリー', 'MMM']),
  rMC: makeTrack('GBA マリオサーキット', 'rMC', 127146, 'https://www.youtube.com/watch?v=BzB5PrrhhTE', 127146, ['GBAマリオサーキット', 'グバマリ', 'GBAマリサ']),
  rCCB: makeTrack('DS プクプクビーチ', 'rCCB', 149257, 'https://youtu.be/jPZAhlTUuzk?feature=shared', 149257, ['プクプクビーチ', 'プクビ', 'プクプク', 'CCB']),
  rTT: makeTrack('N64 キノピオハイウェイ', 'rTT', 147588, 'https://youtu.be/ZBwf-b492C4', 146936, ['ハイウェイ', 'キノピオハイウェイ', 'TT']),
  rDDD: makeTrack('GC カラカラさばく', 'rDDD', 200486, 'https://www.youtube.com/watch?v=zel3p5VK1jA', 200166, ['GCカラカラさばく', 'カラカラさばく', 'カラカラ砂漠', 'カラサバ']),
  rDP3: makeTrack('SFC ドーナツへいや3', 'rDP3', 117180, 'https://www.youtube.com/watch?v=ncj3YGdrD_Y', 117001, ['ドーナツへいや3', '平野', 'へいや', 'SFCドーナツへいや3', 'ドーナツへいや', 'ドーナツ平野', 'DP3']),
  rRRy: makeTrack('N64 ピーチサーキット', 'rRRy', 158752, 'https://youtu.be/eb-yJ5vDZf8?feature=shared', 158752, ['ピチサ', 'ピーチサーキット', 'RRy']),
  rDKJ: makeTrack('3DS DKジャングル', 'rDKJ', 203342, 'https://www.youtube.com/watch?v=zpyzZRW6oTk', 203342, ['ジャングル', 'DKジャングル', 'DKJ', 'DK じゃんぐる']),
  rWS: makeTrack('DS ワリオスタジアム', 'rWS', 152486, 'https://youtu.be/UdEbgF3ivCw', 152486, ['ワリスタ', 'ワリオスタジアム', 'WS']),
  rSL: makeTrack('GC シャーベットランド', 'rSL', 149968, 'https://youtu.be/3ks36abSkrw?si=26v1UOabkfZYpFDJ', 149804, ['シャベラン', 'シャーベットランド', 'SL']),
  rMP: makeTrack('3DS ミュージックパーク', 'rMP', 152402, 'https://m.youtube.com/watch?v=QvJZ6_7tPWg', 152021, ['ミューパ', 'ミュージックパーク', 'MP']),
  rYV: makeTrack('N64 ヨッシーバレー', 'rYV', 202579, 'https://youtu.be/rk4_FAUauEc?si=w4U3bYednyINLu3s', 202460, ['ヨシバ', 'ヨッシーバレー', 'YV']),
  rTTC: makeTrack('DS チクタクロック', 'rTTC', 143681, 'https://www.youtube.com/watch?v=NG57bGBBnfM', 143377, ['チクタク', 'チクタクロック', 'TTC']),
  rPPS: makeTrack('3DS パックンスライダー', 'rPPS', 203211, 'https://youtu.be/BSoCORqLH1s?si=BQCmOowf70Sd8S8s', 202676, ['パクスラ', 'パックンスライダー', 'PPS']),
  rGV: makeTrack('Wii グラグラかざん', 'rGV', 154936, 'https://youtu.be/MnhtY7vyZvw?si=tqaOEq6dvHfWot6e', 154936, ['火山', 'かざん', 'グラグラ', 'グラグラ火山', 'グラグラかざん', 'GV']),
  rRRd: makeTrack('N64 レインボーロード', 'rRRd', 120975, 'https://youtu.be/MSYxRa7ThWY?si=QV-2oTdIyC1zy-Lr', 120710, ['N64レインボーロード', '64レインボーロード', 'N64レインボー', 'N64虹', 'N64にじ', '64虹', '64にじ', '64レインボー', 'RRd']),
  dYC: makeTrack('GC ヨッシーサーキット', 'dYC', 146164, 'https://youtu.be/X7HcI6xzNCc?si=NC8BbAi9AWde5ASL', 145819, ['ヨシサ', 'ヨッシーサーキット', 'YC']),
  dEA: makeTrack('エキサイトバイク', 'dEA', 142747, 'https://youtu.be/rOPobkqoFag?si=-7-y9SkkFXGZvHnF', 142540, ['エキバ', 'EA']),
  dDD: makeTrack('ドラゴンロード', 'dDD', 145718, 'https://youtu.be/vjKqty9Wa6k?feature=shared', 144976, ['ドラロ', 'DD']),
  dMC: makeTrack('ミュートシティ', 'dMC', 155115, 'https://youtu.be/7asKQGLchyk', 154919, ['ミュート', 'ミュートシティー']),
  dWGM: makeTrack('Wii ワリオこうざん', 'dWGM', 203551, 'https://www.youtube.com/watch?v=KQtMUnHG9jg', 203037, ['ワリこう', 'ワリオこうざん', 'WGM', 'ワリ鉱', 'ワリオ鉱山']),
  dRR: makeTrack('SFC レインボーロード', 'dRR', 128456, 'https://youtu.be/eYRy1iKpxSg', 128456, ['SFCレインボーロード', 'SFC虹', 'SFCにじ', 'SFCレインボー']),
  dIIO: makeTrack('ツルツルツイスター', 'dIIO', 147684, 'https://www.youtube.com/watch?v=HhGzBCAE9tk', 146998, ['ツツツ', 'ツルツル', 'IIO']),
  dHC: makeTrack('ハイラルサーキット', 'dHC', 150785, 'https://youtu.be/_L_310B1Kzo', 150785, ['ハイラル', 'HC']),
  dBP: makeTrack('GC ベビィパーク', 'dBP', 104043, 'https://youtu.be/KMdWxRubzpA?si=eqtuqkmyJvsBxSpX', 103667, ['ベビィパーク', 'ベビーパーク', 'ベビパ', 'BP']),
  dCL: makeTrack('GBA チーズランド', 'dCL', 148094, 'https://www.youtube.com/watch?v=I4w6Z5CmsO8', 147776, ['チーズ', 'チーズランド', 'CL']),
  dWW: makeTrack('ネイチャーロード', 'dWW', 147845, 'https://youtu.be/YJL92foQptQ?si=y0PQDduaoq_0E-AG', 147675, ['ネイチャー', 'ネイチャ', 'WW']),
  dAC: makeTrack('どうぶつの森', 'dAC', 140704, 'https://youtu.be/bob_4ltzRfI?feature=shared', 140704, ['どうぶつのもり', 'どうもり', 'どう森', 'AC']),
  dNBC: makeTrack('3DS ネオクッパシティ', 'dNBC', 146187, 'https://www.youtube.com/watch?v=J2JJ2p6qjy8', 146187, ['ネオパ', 'ネオクッパ', 'ネオクッパシティ', 'NBC']),
  dRiR: makeTrack('GBA リボンロード', 'dRiR', 150701, 'https://youtu.be/J029EQKelFU?si=cleo5lmtfYWU_bEP', 150681, ['リボン', 'リボロ', 'リボンロード', 'RiR']),
  dSBS: makeTrack('リンリンメトロ', 'dSBS', 144297, 'https://youtu.be/zKrerSvMB0I', 143997, ['リンメト', 'SBS']),
  dBB: makeTrack('ビッグブルー', 'dBB', 126146, 'https://youtu.be/LF9VanxJo2k?si=J1MIZqposH444_vk', 125869, ['BB', 'ビックブルー']),
  bPP: makeTrack('Tour パリプロムナード', 'bPP', 151756, 'https://www.youtube.com/watch?v=KWsuSpC-VMA', 151539, ['パリ', 'パリプロムナード', 'PP']),
  bTC: makeTrack('3DS キノピオサーキット', 'bTC', 123940, 'https://youtu.be/XBcW6S27JYc?si=dBYLUDOS2pMR9dMC', 123940, ['キノサ', 'キノピオサーキット', 'TC']),
  bCMo: makeTrack('N64 チョコマウンテン', 'bCMo', 153621, 'https://youtu.be/svey1E3XzA8?si=mouOOY2rTWfL9-Vf', 153621, ['チョコマ', 'チョコマウンテン', 'CMo']),
  bCMa: makeTrack('Wii ココナッツモール', 'bCMa', 143695, 'https://youtu.be/1lw8j0yqrLo?feature=shared', 143695, ['ココモ', 'ココナッツモール', 'CMa']),
  bTB: makeTrack('Tour トーキョースクランブル', 'bTB', 127486, 'https://youtu.be/M4eGjW_cUnk?si=MeNu13ezwwQ7AZ1l', 127288, ['東京', 'トウキョウ', 'トウキョウスクランブル', 'トーキョー', 'トーキョースクランブル', 'TB']),
  bSR: makeTrack('DS キノコリッジウェイ', 'bSR', 147708, 'https://youtu.be/aYApRi6IioA?feature=shared', 147708, ['リッジウェイ', 'キノコリッジウェイ', 'キノコリッジ', 'リッジ', 'SR']),
  bSG: makeTrack('GBA スカイガーデン', 'bSG', 129996, 'https://youtu.be/pd17P_HObfo?feature=shared', 129996, ['GBAスカイガーデン', 'グバスカ', 'GBAスカガ', 'SG']),
  bNH: makeTrack('Tour ニンニンドージョー', 'bNH', 153902, 'https://youtu.be/ZrXD1Um_Ygc?si=bP0FkOGl5ECU7gU3', 153645, ['ニンニン', 'ニンニンドージョー', 'NH']),
  bNYM: makeTrack('Tour ニューヨークドリーム', 'bNYM', 124597, 'https://youtu.be/S2h54_Sl9jM?si=M5kheBh-1jpRdaTr', 124539, ['ニューヨーク', 'ニューヨークドリーム', 'NYM', 'NY']),
  bMC3: makeTrack('SFC マリオサーキット3', 'bMC3', 135476, 'https://youtu.be/1vcIslhd9dA?si=-Vf3gWTF34jNnhhJ', 135476, ['SFCマリオサーキット3', 'SFCマリオサーキット', 'マリオサーキット3', 'マリサ3', 'SFCマリサ', 'SFCマリサ3', 'MC3']),
  bKD: makeTrack('N64 カラカラさばく', 'bKD', 133407, 'https://youtu.be/QA5cMEbKbhY?feature=shared', 133381, ['N64カラカラさばく', '64カラカラさばく', '64カラサバ', 'KD']),
  bWP: makeTrack('DS ワルイージピンボール', 'bWP', 220341, 'https://youtu.be/r6y1qY0Z-F0?feature=shared', 220341, ['ワルピン', 'ワルイージピンボール']),
  bSS: makeTrack('Tour シドニーサンシャイン', 'bSS', 202827, 'https://youtu.be/pSkfnteexcs?si=UKygTIw3FkMaw4jt', 202827, ['シドニー', 'シドニーサンシャイン', 'SS']),
  bSL: makeTrack('GBA スノーランド', 'bSL', 136247, 'https://youtu.be/WJAnQ1WUZBI?si=5kipTEfeonUY4bFk', 136247, ['スノラン', 'スノーランド']),
  bMG: makeTrack('Wii キノコキャニオン', 'bMG', 135704, 'https://youtu.be/p5pdBYBMzps?feature=shared', 135704, ['キノキャニ', 'キノコキャニオン', 'MG']),
  bSHS: makeTrack('アイスビルディング', 'bSHS', 156367, 'https://youtu.be/_0hmV42nfTM?si=6GRdbpGsXZj1Ct2f', 155364, ['アイス', 'アイビル', 'SHS']),
  bLL: makeTrack('Tour ロンドンアベニュー', 'bLL', 211544, 'https://youtu.be/LriFQ4bJBrA?si=IS7O-UhDMzdCYAXG', 211308, ['ロンドン', 'ロンドンアベニュー', 'アベニュー', 'LL']),
  bBL: makeTrack('GBA テレサレイク', 'bBL', 122961, 'https://youtu.be/jNIV454OsNI?feature=shared', 122874, ['テレレ', 'テレサレイク', 'レイク', 'BL']),
  bRRM: makeTrack('3DS ロックロックマウンテン', 'bRRM', 215863, 'https://youtu.be/ISeXZIc4vpk?feature=shared', 213916, ['ロクマ', 'ロックロックマウンテン', 'RRM']),
  bMT: makeTrack('Wii メイプルツリーハウス', 'bMT', 225512, 'https://youtu.be/hssGI2m_AOc?si=YUsuY1iQ_kGj89ff', 225512, ['メイプル', 'メイプルツリーハウス', 'MT']),
  bBB: makeTrack('Tour ベルリンシュトラーセ', 'bBB', 159394, 'https://youtu.be/4EqrJRRWkTQ?feature=shared', 159285, ['ベルリン', 'ベルリンシュトラーセ']),
  bPG: makeTrack('DS ピーチガーデン', 'bPG', 207733, 'https://youtu.be/SaLiBuQ41os?si=JDZYiBkrRFoW_qBV', 207733, ['ピチガ', 'ピーチガーデン', 'PG']),
  bMM: makeTrack('Tour メリーメリーマウンテン', 'bMM', 155796, 'https://youtu.be/ytFeFGPkdKI?si=_8NeR647m9W40yAu', 155717, ['メリマ', 'メリーメリーマウンテン', 'メリマン', 'MM']),
  bRR7: makeTrack('3DS レインボーロード', 'bRR7', 138705, 'https://youtu.be/y1eKyKlghB0?si=1HrienBUNKvXod6F', 138705, ['3DSレインボーロード', '7虹', '7にじ', '7レインボー', '3DSレインボー', '3DS虹', '3DSにじ', 'RR7']),
  bAD: makeTrack('Tour アムステルダムブルーム', 'bAD', 137671, 'https://youtu.be/9K5qu3IYSOY?si=Ehf9C9m9qlWjkXKZ', 137671, ['アムス', 'アムステルダム', 'アムステルダムブルーム', 'AD']),
  bRP: makeTrack('GBA リバーサイドパーク', 'bRP', 131479, 'https://youtu.be/5B69EONP1q4?feature=shared', 131452, ['リバパ', 'リバーサイドパーク', 'リバーサイド', 'リバサ', 'RP']),
  bDKS: makeTrack('Wii DKスノーボードクロス', 'bDKS', 156343, 'https://youtu.be/ADpKTE5yX7Y?si=2tMWrkhAoTUnK5rW', 156343, ['スノボ', 'DKスノーボードクロス', 'スノーボードクロス', 'DKS', 'DKS01', '01']),
  bYI: makeTrack('ヨッシーアイランド', 'bYI', 200250, 'https://youtu.be/5PNeVm30QsE?si=8VhyxFVB2oT2a3Q1', 200250, ['ヨシアイ', 'YI']),
  bBR: makeTrack('Tour バンコクラッシュ', 'bBR', 144302, 'https://youtu.be/CVacmUqEvLU?si=QyFhYDX59fBm_6H5', 144302, ['バンコク', 'バンコクラッシュ', 'BR']),
  bMC: makeTrack('DS マリオサーキット', 'bMC', 141878, 'https://youtu.be/QN0oK_u2ETk?si=c9kk9I1LFTd-fYNg', 141878, ['DSマリサ', 'DSマリオサーキット']),
  bWS: makeTrack('GC ワルイージスタジアム', 'bWS', 157511, 'https://youtu.be/EcZPGj7goic?si=x0ao09XSWSbbd_b-', 156748, ['ワルスタ', 'ワルイージスタジアム']),
  bSSy: makeTrack('Tour シンガポールスプラッシュ', 'bSSy', 157759, 'https://www.youtube.com/watch?v=HSYCPxmnIiA', 157759, ['シンガポール', 'シンガポールスプラッシュ', 'SSy']),
  bAtD: makeTrack('Tour アテネポリス', 'bAtD', 140813, 'https://www.youtube.com/watch?v=zqVVRQ37bxc', 140813, ['アテネ', 'アテネポリス', 'AtD']),
  bDC: makeTrack('GC デイジークルーザー', 'bDC', 135686, 'https://youtu.be/_-HypEbIVyI', 135686, ['デイクル', 'デイジークルーザー', 'DC']),
  bMH: makeTrack('Wii ムーンリッジ＆ハイウェイ', 'bMH', 144332, 'https://youtu.be/KfgZp1JfTPE', 144332, ['ムーンリッジ＆ハイウェイ', 'ムーンリッジ', 'ムーンリッジハイウェイ', 'ムンリ', 'MH', '月']),
  bSCS: makeTrack('シャボンロード', 'bSCS', 203403, 'https://youtu.be/dx1JVopx0Pk?si=S6QZDWXXaSgSG4_o', 203259, ['シャボン', 'SCS']),
  bLAL: makeTrack('Tour ロサンゼルスコースト', 'bLAL', 149170, 'https://youtu.be/gTbOaUJhPYg?si=swPV0p5f_8vkDMlQ', 149170, ['ロス', 'ロサンゼルス', 'LA', 'ロサンゼルスコースト', 'LAL']),
  bSW: makeTrack('GBA サンセットこうや', 'bSW', 137096, 'https://youtu.be/gaxyww0xDGw?si=5e20Rgd1YCmgCoku', 137067, ['サンセット', 'こうや', 'サンセット荒野', 'サンセットこうや', 'SW']),
  bKC: makeTrack('Wii ノコノコみさき', 'bKC', 200914, 'https://youtu.be/J3v61p6_nzA?feature=shared', 200914, ['ノコみさ', 'ノコノコみさき', 'ノコノコ', 'のこみ', 'KC']),
  bVV: makeTrack('Tour バンクーバーバレー', 'bVV', 201612, 'https://www.youtube.com/watch?v=ITlkV7BnO74', 201612, ['バンクーバー', 'バンクーバーバレー', 'VV']),
  bRA: makeTrack('Tour ローマアバンティ', 'bRA', 147174, 'https://youtu.be/0FD76oWpvvQ?si=Z2fl70x5YypRIsMu', 147155, ['ローマ', 'ローマアバンティ', 'RA']),
  bDKM: makeTrack('GC DKマウンテン', 'bDKM', 210859, 'https://x.com/kuzerox_/status/1781224866592796702?s=46&t=n_XfioWCbx56plliCg1BSA', 209783, ['DKマウンテン', 'DK山', 'DKM']),
  bDCt: makeTrack('Wii デイジーサーキット', 'bDCt', 150621, 'https://youtu.be/hSTAzalkCNg?si=RV3p9wKS8aTF7dWD', 150456, ['デイサ', 'デイジーサーキット', 'デジサ', 'DCt']),
  bPPC: makeTrack('Tour パックンしんでん', 'bPPC', 202812, 'https://www.youtube.com/watch?v=BrufrzVYiRM', 202570, ['パクしん', 'パックンしんでん', 'パックン神殿', 'パク神', 'PPC']),
  bMD: makeTrack('Tour マドリードグランデ', 'bMD', 159913, 'https://youtu.be/5Bn6Tyit3a4?feature=shared', 159913, ['マドリード', 'マドリードグランデ', 'MD']),
  bRIW: makeTrack('3DS ロゼッタプラネット', 'bRIW', 159866, 'https://youtu.be/ENIvSOTo9iY?si=IR2YqvCs8QALqmlk', 159701, ['ロゼプラ', 'ロゼッタプラネット', 'RIW']),
  bBC3: makeTrack('SFC クッパじょう3', 'bBC3', 143114, 'https://www.youtube.com/watch?v=d5ydfEfO55Y', 142796, ['クッパじょう', 'クッパ城', 'クッパ城3', 'クッパじょう3', 'BC3']),
  bRRw: makeTrack('Wii レインボーロード', 'bRRw', 234668, 'https://youtu.be/OtwxgpFGcNM?si=mF28hZwYUuHhDD_S', 233363, ['Wiiレインボーロード', 'Wii虹', 'Wiiにじ', 'Wiiレインボー', 'RRw']),
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
