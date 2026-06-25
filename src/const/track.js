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
  WP: makeTrack('ウォーターパーク', 'WP', 141327, 'https://youtu.be/EBg0Zw73qak?si=hkdsMaJ9677jteIl', 140916, ['ウォタパ']),
  SSC: makeTrack('スイーツキャニオン', 'SSC', 153303, 'https://youtu.be/lf_V2CgQfvU?si=xOuyDAyATS6KHjvO', 152846, ['スイキャニ']),
  TR: makeTrack('ドッスンいせき', 'TR', 151820, 'https://youtu.be/_ekFsiz841I?si=lUGFeZlUfUR79Htd', 150410, ['遺跡', 'ドッスン', 'いせき', 'ドッスン遺跡']),
  MC: makeTrack('マリオサーキット', 'MC', 147877, 'https://youtu.be/nI-TvVqODEg?si=OjTHKWHG5YiTKbn2', 147859, ['新マリサ', 'しんマリサ']),
  TH: makeTrack('キノピオハーバー', 'TH', 204610, 'https://youtu.be/Z5QIjnNkWMU', 204610, ['ハーバー']),
  TM: makeTrack('ねじれマンション', 'TM', 158640, 'https://youtu.be/EJh8oHkqJfU?feature=shared', 158312, ['ねじマン', 'ねじれ']),
  SGF: makeTrack('ヘイホーこうざん', 'SGF', 157956, 'https://www.youtube.com/watch?v=bYNQNHqjs_c', 157956, ['ヘイホー鉱山', 'ヘイこう', 'こうざん']),
  SA: makeTrack('サンシャインくうこう', 'SA', 200357, 'https://youtu.be/wqJecs3OU6M?feature=shared', 159879, ['サンシャイン空港', '空港', 'くうこう', 'サンシャイン']),
  DS: makeTrack('ドルフィンみさき', 'DS', 156736, 'https://www.youtube.com/watch?v=K_NLHMKKoQo', 155812, ['ドルミ']),
  Ed: makeTrack('エレクトロドリーム', 'Ed', 200429, 'https://youtu.be/umy1WwRb28g?feature=shared', 200429, ['エレドリ']),
  MW: makeTrack('ワリオスノーマウンテン', 'MW', 142983, 'https://youtu.be/oxxKQNONO08?si=pwxj6IHKxaCr4RRW', 142691, ['ワリスノ', '雪山']),
  CC: makeTrack('スカイガーデン', 'CC', 201587, 'https://youtu.be/IKdqhZV-cdA', 201587, ['スカガ', '新スカガ']),
  BDD: makeTrack('ホネホネさばく', 'BDD', 151278, 'https://youtu.be/lVlF1ov0uYo?feature=shared', 151278, ['ホネサバ', 'ホネホネ', 'ホネホネ砂漠']),
  BC: makeTrack('クッパキャッスル', 'BC', 201880, 'https://youtu.be/J34Oj_4-nRY?feature=shared', 201880, ['クパキャ']),
  RR: makeTrack('レインボーロード', 'RR', 200960, 'https://youtu.be/sIuzDGCYE4U?feature=shared', 200865, ['新虹', 'しんにじ', 'しん虹', '新にじ']),
  rMMM: makeTrack('Wii モーモーカントリー', 'rMMM', 126780, 'https://youtu.be/g7bVEkfHZmc?si=9IvV5iN6AntQwKZH', 126731, ['Wiiモーモーカントリー', 'モモカン', 'モーモーカントリー', 'MMM']),
  rMC: makeTrack('GBA マリオサーキット', 'rMC', 127146, 'https://www.youtube.com/watch?v=BzB5PrrhhTE', 127146, ['GBAマリオサーキット', 'グバマリ', 'GBAマリサ']),
  rCCB: makeTrack('DS プクプクビーチ', 'rCCB', 149257, 'https://youtu.be/jPZAhlTUuzk?feature=shared', 149257, ['プクプクビーチ', 'プクビ', 'プクプク', 'CCB']),
  rTT: makeTrack('N64 キノピオハイウェイ', 'rTT', 147588, 'https://youtu.be/ZBwf-b492C4', 146679, ['ハイウェイ', 'キノピオハイウェイ', 'TT']),
  rDDD: makeTrack('GC カラカラさばく', 'rDDD', 200486, 'https://www.youtube.com/watch?v=zel3p5VK1jA', 200166, ['GCカラカラさばく', 'カラカラさばく', 'カラカラ砂漠', 'カラサバ']),
  rDP3: makeTrack('SFC ドーナツへいや3', 'rDP3', 117180, 'https://www.youtube.com/watch?v=ncj3YGdrD_Y', 117001, ['ドーナツへいや3', '平野', 'へいや', 'SFCドーナツへいや3', 'ドーナツへいや', 'ドーナツ平野', 'DP3']),
  rRRy: makeTrack('N64 ピーチサーキット', 'rRRy', 158579, 'https://youtu.be/D7YIpAMmFu4?si=bSvJuMQii0pOOcve', 158579, ['ピチサ', 'ピーチサーキット', 'RRy']),
  rDKJ: makeTrack('3DS DKジャングル', 'rDKJ', 203342, 'https://www.youtube.com/watch?v=zpyzZRW6oTk', 203342, ['ジャングル', 'DKジャングル', 'DKJ', 'DK じゃんぐる']),
  rWS: makeTrack('DS ワリオスタジアム', 'rWS', 152486, 'https://youtu.be/UdEbgF3ivCw', 152486, ['ワリスタ', 'ワリオスタジアム', 'WS']),
  rSL: makeTrack('GC シャーベットランド', 'rSL', 149968, 'https://youtu.be/3ks36abSkrw?si=26v1UOabkfZYpFDJ', 149804, ['シャベラン', 'シャーベットランド', 'SL']),
  rMP: makeTrack('3DS ミュージックパーク', 'rMP', 151873, 'https://youtu.be/NnwNQ035uO0', 151873, ['ミューパ', 'ミュージックパーク', 'MP']),
  rYV: makeTrack('N64 ヨッシーバレー', 'rYV', 202579, 'https://youtu.be/rk4_FAUauEc?si=w4U3bYednyINLu3s', 202460, ['ヨシバ', 'ヨッシーバレー', 'YV']),
  rTTC: makeTrack('DS チクタクロック', 'rTTC', 143681, 'https://www.youtube.com/watch?v=NG57bGBBnfM', 143377, ['チクタク', 'チクタクロック', 'TTC']),
  rPPS: makeTrack('3DS パックンスライダー', 'rPPS', 203211, 'https://youtu.be/BSoCORqLH1s?si=BQCmOowf70Sd8S8s', 202676, ['パクスラ', 'パックンスライダー', 'PPS']),
  rGV: makeTrack('Wii グラグラかざん', 'rGV', 154791, 'https://youtu.be/ZtMA1N4EQeg?si=9X6AxH3zYZTjBnoZ', 154791, ['火山', 'かざん', 'グラグラ', 'グラグラ火山', 'グラグラかざん', 'GV']),
  rRRd: makeTrack('N64 レインボーロード', 'rRRd', 120975, 'https://youtu.be/MSYxRa7ThWY?si=QV-2oTdIyC1zy-Lr', 120710, ['N64レインボーロード', '64レインボーロード', 'N64レインボー', 'N64虹', 'N64にじ', '64虹', '64にじ', '64レインボー', 'RRd']),
  dYC: makeTrack('GC ヨッシーサーキット', 'dYC', 145908, 'https://youtu.be/bs2t5JLy5TU?si=zswmMmxCMLSDQE8G', 145172, ['ヨシサ', 'ヨッシーサーキット', 'YC']),
  dEA: makeTrack('エキサイトバイク', 'dEA', 142747, 'https://youtu.be/rOPobkqoFag?si=-7-y9SkkFXGZvHnF', 141992, ['エキバ', 'EA']),
  dDD: makeTrack('ドラゴンロード', 'dDD', 145516, 'https://youtu.be/p29GFsD2ahI?si=fqHpUzriRd-Ii_Ao', 144976, ['ドラロ', 'DD']),
  dMC: makeTrack('ミュートシティ', 'dMC', 155115, 'https://youtu.be/7asKQGLchyk', 154919, ['ミュート', 'ミュートシティー']),
  dWGM: makeTrack('Wii ワリオこうざん', 'dWGM', 203551, 'https://www.youtube.com/watch?v=KQtMUnHG9jg', 202842, ['ワリこう', 'ワリオこうざん', 'WGM', 'ワリ鉱', 'ワリオ鉱山']),
  dRR: makeTrack('SFC レインボーロード', 'dRR', 128456, 'https://youtu.be/eYRy1iKpxSg', 128456, ['SFCレインボーロード', 'SFC虹', 'SFCにじ', 'SFCレインボー']),
  dIIO: makeTrack('ツルツルツイスター', 'dIIO', 147684, 'https://www.youtube.com/watch?v=HhGzBCAE9tk', 146998, ['ツツツ', 'ツルツル', 'IIO']),
  dHC: makeTrack('ハイラルサーキット', 'dHC', 150785, 'https://youtu.be/_L_310B1Kzo', 150785, ['ハイラル', 'HC']),
  dBP: makeTrack('GC ベビィパーク', 'dBP', 104043, 'https://youtu.be/KMdWxRubzpA?si=eqtuqkmyJvsBxSpX', 103667, ['ベビィパーク', 'ベビーパーク', 'ベビパ', 'BP']),
  dCL: makeTrack('GBA チーズランド', 'dCL', 148094, 'https://www.youtube.com/watch?v=I4w6Z5CmsO8', 147776, ['チーズ', 'チーズランド', 'CL']),
  dWW: makeTrack('ネイチャーロード', 'dWW', 147845, 'https://youtu.be/YJL92foQptQ?si=y0PQDduaoq_0E-AG', 147675, ['ネイチャー', 'ネイチャ', 'WW']),
  dAC: makeTrack('どうぶつの森', 'dAC', 140704, 'https://youtu.be/bob_4ltzRfI?feature=shared', 140704, ['どうぶつのもり', 'どうもり', 'どう森', 'AC']),
  dNBC: makeTrack('3DS ネオクッパシティ', 'dNBC', 146187, 'https://www.youtube.com/watch?v=J2JJ2p6qjy8', 146169, ['ネオパ', 'ネオクッパ', 'ネオクッパシティ', 'NBC']),
  dRiR: makeTrack('GBA リボンロード', 'dRiR', 150701, 'https://youtu.be/J029EQKelFU?si=cleo5lmtfYWU_bEP', 150681, ['リボン', 'リボロ', 'リボンロード', 'RiR']),
  dSBS: makeTrack('リンリンメトロ', 'dSBS', 144297, 'https://youtu.be/zKrerSvMB0I', 143997, ['リンメト', 'SBS']),
  dBB: makeTrack('ビッグブルー', 'dBB', 126101, 'https://youtu.be/MRymckO9DdY?si=RqoB0elAO8CBT8SV', 125869, ['BB', 'ビックブルー']),
  bPP: makeTrack('Tour パリプロムナード', 'bPP', 151666, 'https://youtu.be/FvLLdNW-FDU?si=pftSX0XGxalN2su4', 151220, ['パリ', 'パリプロムナード', 'PP']),
  bTC: makeTrack('3DS キノピオサーキット', 'bTC', 123873, 'https://youtu.be/KxcD9qk3zDs?si=xfgFnsjuLqBH7kiM', 123873, ['キノサ', 'キノピオサーキット', 'TC']),
  bCMo: makeTrack('N64 チョコマウンテン', 'bCMo', 153617, 'https://youtu.be/coSDfSvMwUY?si=yh27A9MuSvramh3P', 153617, ['チョコマ', 'チョコマウンテン', 'CMo']),
  bCMa: makeTrack('Wii ココナッツモール', 'bCMa', 143695, 'https://youtu.be/1lw8j0yqrLo?feature=shared', 143695, ['ココモ', 'ココナッツモール', 'CMa']),
  bTB: makeTrack('Tour トーキョースクランブル', 'bTB', 127486, 'https://youtu.be/M4eGjW_cUnk?si=MeNu13ezwwQ7AZ1l', 127173, ['東京', 'トウキョウ', 'トウキョウスクランブル', 'トーキョー', 'トーキョースクランブル', 'TB']),
  bSR: makeTrack('DS キノコリッジウェイ', 'bSR', 147572, 'https://youtu.be/tNryHSO9Nds?si=vhLHzaRRPotJkdKM', 147572, ['リッジウェイ', 'キノコリッジウェイ', 'キノコリッジ', 'リッジ', 'SR']),
  bSG: makeTrack('GBA スカイガーデン', 'bSG', 129757, 'https://youtu.be/695jXYEjykE?is=iyFEXxtfW5biyZ4Q', 129757, ['GBAスカイガーデン', 'グバスカ', 'GBAスカガ', 'SG']),
  bNH: makeTrack('Tour ニンニンドージョー', 'bNH', 153902, 'https://youtu.be/ZrXD1Um_Ygc?si=bP0FkOGl5ECU7gU3', 153645, ['ニンニン', 'ニンニンドージョー', 'NH']),
  bNYM: makeTrack('Tour ニューヨークドリーム', 'bNYM', 124597, 'https://youtu.be/S2h54_Sl9jM?si=M5kheBh-1jpRdaTr', 124539, ['ニューヨーク', 'ニューヨークドリーム', 'NYM', 'NY']),
  bMC3: makeTrack('SFC マリオサーキット3', 'bMC3', 135476, 'https://youtu.be/1vcIslhd9dA?si=-Vf3gWTF34jNnhhJ', 135476, ['SFCマリオサーキット3', 'SFCマリオサーキット', 'マリオサーキット3', 'マリサ3', 'SFCマリサ', 'SFCマリサ3', 'MC3']),
  bKD: makeTrack('N64 カラカラさばく', 'bKD', 133407, 'https://youtu.be/QA5cMEbKbhY?feature=shared', 133381, ['N64カラカラさばく', '64カラカラさばく', '64カラサバ', 'KD']),
  bWP: makeTrack('DS ワルイージピンボール', 'bWP', 220341, 'https://youtu.be/r6y1qY0Z-F0?feature=shared', 220212, ['ワルピン', 'ワルイージピンボール']),
  bSS: makeTrack('Tour シドニーサンシャイン', 'bSS', 202827, 'https://youtu.be/pSkfnteexcs?si=UKygTIw3FkMaw4jt', 202827, ['シドニー', 'シドニーサンシャイン', 'SS']),
  bSL: makeTrack('GBA スノーランド', 'bSL', 136171, 'https://youtu.be/COvy5frqMKg?si=rZU8PK8oXk3SghDE', 136171, ['スノラン', 'スノーランド']),
  bMG: makeTrack('Wii キノコキャニオン', 'bMG', 135583, 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRBXBdqpurvBmR--bzj9RJmgr7HxAoWVZmlwmhaBK-LYf_BbXn8iAPdH-ogBtXiAwxlTkQgn45PkeRW/pubhtml?gid=0&single=true', 135583, ['キノキャニ', 'キノコキャニオン', 'MG']),
  bSHS: makeTrack('アイスビルディング', 'bSHS', 156367, 'https://youtu.be/_0hmV42nfTM?si=6GRdbpGsXZj1Ct2f', 154978, ['アイス', 'アイビル', 'SHS']),
  bLL: makeTrack('Tour ロンドンアベニュー', 'bLL', 211544, 'https://youtu.be/LriFQ4bJBrA?si=IS7O-UhDMzdCYAXG', 211308, ['ロンドン', 'ロンドンアベニュー', 'アベニュー', 'LL']),
  bBL: makeTrack('GBA テレサレイク', 'bBL', 122961, 'https://youtu.be/jNIV454OsNI?feature=shared', 122874, ['テレレ', 'テレサレイク', 'レイク', 'BL']),
  bRRM: makeTrack('3DS ロックロックマウンテン', 'bRRM', 215574, 'https://youtu.be/57hzVm6Hd_s?si=41p51x6GhWMzKS3A', 213916, ['ロクマ', 'ロックロックマウンテン', 'RRM']),
  bMT: makeTrack('Wii メイプルツリーハウス', 'bMT', 225512, 'https://youtu.be/hssGI2m_AOc?si=YUsuY1iQ_kGj89ff', 225512, ['メイプル', 'メイプルツリーハウス', 'MT']),
  bBB: makeTrack('Tour ベルリンシュトラーセ', 'bBB', 159152, 'https://youtu.be/2yYqH9Yg3Wc?si=hjyKcc2bssB-1CCW', 158908, ['ベルリン', 'ベルリンシュトラーセ']),
  bPG: makeTrack('DS ピーチガーデン', 'bPG', 207733, 'https://youtu.be/SaLiBuQ41os?si=JDZYiBkrRFoW_qBV', 207733, ['ピチガ', 'ピーチガーデン', 'PG']),
  bMM: makeTrack('Tour メリーメリーマウンテン', 'bMM', 155796, 'https://youtu.be/ytFeFGPkdKI?si=_8NeR647m9W40yAu', 155717, ['メリマ', 'メリーメリーマウンテン', 'メリマン', 'MM']),
  bRR7: makeTrack('3DS レインボーロード', 'bRR7', 138312, 'https://youtu.be/rO0oNRameQw?si=eWg8IxG0KgSB-XD2', 138312, ['3DSレインボーロード', '7虹', '7にじ', '7レインボー', '3DSレインボー', '3DS虹', '3DSにじ', 'RR7']),
  bAD: makeTrack('Tour アムステルダムブルーム', 'bAD', 137631, 'https://youtu.be/JPT1fUNbqTA?si=BqzOP4MQjxxtbgQV', 137631, ['アムス', 'アムステルダム', 'アムステルダムブルーム', 'AD']),
  bRP: makeTrack('GBA リバーサイドパーク', 'bRP', 131479, 'https://youtu.be/5B69EONP1q4?feature=shared', 131452, ['リバパ', 'リバーサイドパーク', 'リバーサイド', 'リバサ', 'RP']),
  bDKS: makeTrack('Wii DKスノーボードクロス', 'bDKS', 156343, 'https://youtu.be/ADpKTE5yX7Y?si=2tMWrkhAoTUnK5rW', 156343, ['スノボ', 'DKスノーボードクロス', 'スノーボードクロス', 'DKS', 'DKS01', '01']),
  bYI: makeTrack('ヨッシーアイランド', 'bYI', 200250, 'https://youtu.be/5PNeVm30QsE?si=8VhyxFVB2oT2a3Q1', 200250, ['ヨシアイ', 'YI']),
  bBR: makeTrack('Tour バンコクラッシュ', 'bBR', 144302, 'https://youtu.be/CVacmUqEvLU?si=QyFhYDX59fBm_6H5', 144302, ['バンコク', 'バンコクラッシュ', 'BR']),
  bMC: makeTrack('DS マリオサーキット', 'bMC', 141878, 'https://youtu.be/QN0oK_u2ETk?si=c9kk9I1LFTd-fYNg', 141836, ['DSマリサ', 'DSマリオサーキット']),
  bWS: makeTrack('GC ワルイージスタジアム', 'bWS', 157407, 'https://youtu.be/w-OG8SLyMa8?si=hNd7d_bpBG1CP17a', 156748, ['ワルスタ', 'ワルイージスタジアム']),
  bSSy: makeTrack('Tour シンガポールスプラッシュ', 'bSSy', 157759, 'https://www.youtube.com/watch?v=HSYCPxmnIiA', 157759, ['シンガポール', 'シンガポールスプラッシュ', 'SSy']),
  bAtD: makeTrack('Tour アテネポリス', 'bAtD', 140813, 'https://www.youtube.com/watch?v=zqVVRQ37bxc', 140813, ['アテネ', 'アテネポリス', 'AtD']),
  bDC: makeTrack('GC デイジークルーザー', 'bDC', 135686, 'https://youtu.be/_-HypEbIVyI', 135686, ['デイクル', 'デイジークルーザー', 'DC']),
  bMH: makeTrack('Wii ムーンリッジ＆ハイウェイ', 'bMH', 144315, 'https://youtu.be/4pVWLax_K8U?si=ivETdXPKf-LWdQ9T', 144315, ['ムーンリッジ＆ハイウェイ', 'ムーンリッジ', 'ムーンリッジハイウェイ', 'ムンリ', 'MH', '月']),
  bSCS: makeTrack('シャボンロード', 'bSCS', 203403, 'https://youtu.be/dx1JVopx0Pk?si=S6QZDWXXaSgSG4_o', 203121, ['シャボン', 'SCS']),
  bLAL: makeTrack('Tour ロサンゼルスコースト', 'bLAL', 149170, 'https://youtu.be/gTbOaUJhPYg?si=swPV0p5f_8vkDMlQ', 149170, ['ロス', 'ロサンゼルス', 'LA', 'ロサンゼルスコースト', 'LAL']),
  bSW: makeTrack('GBA サンセットこうや', 'bSW', 137096, 'https://youtu.be/gaxyww0xDGw?si=5e20Rgd1YCmgCoku', 136726, ['サンセット', 'こうや', 'サンセット荒野', 'サンセットこうや', 'SW']),
  bKC: makeTrack('Wii ノコノコみさき', 'bKC', 200862, 'https://youtu.be/GIh-IphjMfQ?si=pCuuvaqM2izGpYkS', 200862, ['ノコみさ', 'ノコノコみさき', 'ノコノコ', 'のこみ', 'KC']),
  bVV: makeTrack('Tour バンクーバーバレー', 'bVV', 201612, 'https://www.youtube.com/watch?v=ITlkV7BnO74', 201612, ['バンクーバー', 'バンクーバーバレー', 'VV']),
  bRA: makeTrack('Tour ローマアバンティ', 'bRA', 147173, 'https://youtu.be/dVXL3C23FV0?feature=shared', 147155, ['ローマ', 'ローマアバンティ', 'RA']),
  bDKM: makeTrack('GC DKマウンテン', 'bDKM', 210859, 'https://x.com/kuzerox_/status/1781224866592796702?s=46&t=n_XfioWCbx56plliCg1BSA', 209783, ['DKマウンテン', 'DK山', 'DKM']),
  bDCt: makeTrack('Wii デイジーサーキット', 'bDCt', 150241, 'https://youtu.be/Oo85gHI9L0o?si=xbnLLGMlCN-rBO40', 150241, ['デイサ', 'デイジーサーキット', 'デジサ', 'DCt']),
  bPPC: makeTrack('Tour パックンしんでん', 'bPPC', 202660, 'https://youtu.be/F3IbF3qCADk?si=yv4b1PbDKz6BCuOu', 202455, ['パクしん', 'パックンしんでん', 'パックン神殿', 'パク神', 'PPC']),
  bMD: makeTrack('Tour マドリードグランデ', 'bMD', 159543, 'https://youtu.be/QN5LJvNIa7M?si=FkA7RpGiy_btribp', 159543, ['マドリード', 'マドリードグランデ', 'MD']),
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
