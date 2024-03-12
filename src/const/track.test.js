import { expect, test, describe } from 'vitest';
import { getByCode, trackCodeSet } from './track.js';

describe('trackCodeSet', () => {
  test('trackCodeSetが96件の要素を持つ', () => {
    expect(trackCodeSet).toHaveLength(96);
  });
  describe('trackCodeSetの要素', () => {
    test('MKSを含む', () => {
      expect(trackCodeSet).toContain('MKS');
    });
    test('WPを含む', () => {
      expect(trackCodeSet).toContain('WP');
    });
    test('SSCを含む', () => {
      expect(trackCodeSet).toContain('SSC');
    });
    test('TRを含む', () => {
      expect(trackCodeSet).toContain('TR');
    });
    test('MCを含む', () => {
      expect(trackCodeSet).toContain('MC');
    });
    test('THを含む', () => {
      expect(trackCodeSet).toContain('TH');
    });
    test('TMを含む', () => {
      expect(trackCodeSet).toContain('TM');
    });
    test('SGFを含む', () => {
      expect(trackCodeSet).toContain('SGF');
    });
    test('SAを含む', () => {
      expect(trackCodeSet).toContain('SA');
    });
    test('DSを含む', () => {
      expect(trackCodeSet).toContain('DS');
    });
    test('Edを含む', () => {
      expect(trackCodeSet).toContain('Ed');
    });
    test('MWを含む', () => {
      expect(trackCodeSet).toContain('MW');
    });
    test('CCを含む', () => {
      expect(trackCodeSet).toContain('CC');
    });
    test('BDDを含む', () => {
      expect(trackCodeSet).toContain('BDD');
    });
    test('BCを含む', () => {
      expect(trackCodeSet).toContain('BC');
    });
    test('RRを含む', () => {
      expect(trackCodeSet).toContain('RR');
    });
    test('rMMMを含む', () => {
      expect(trackCodeSet).toContain('rMMM');
    });
    test('rMCを含む', () => {
      expect(trackCodeSet).toContain('rMC');
    });
    test('rCCBを含む', () => {
      expect(trackCodeSet).toContain('rCCB');
    });
    test('rTTを含む', () => {
      expect(trackCodeSet).toContain('rTT');
    });
    test('rDDDを含む', () => {
      expect(trackCodeSet).toContain('rDDD');
    });
    test('rDP3を含む', () => {
      expect(trackCodeSet).toContain('rDP3');
    });
    test('rRRyを含む', () => {
      expect(trackCodeSet).toContain('rRRy');
    });
    test('rDKJを含む', () => {
      expect(trackCodeSet).toContain('rDKJ');
    });
    test('rWSを含む', () => {
      expect(trackCodeSet).toContain('rWS');
    });
    test('rSLを含む', () => {
      expect(trackCodeSet).toContain('rSL');
    });
    test('rMPを含む', () => {
      expect(trackCodeSet).toContain('rMP');
    });
    test('rYVを含む', () => {
      expect(trackCodeSet).toContain('rYV');
    });
    test('rTTCを含む', () => {
      expect(trackCodeSet).toContain('rTTC');
    });
    test('rPPSを含む', () => {
      expect(trackCodeSet).toContain('rPPS');
    });
    test('rGVを含む', () => {
      expect(trackCodeSet).toContain('rGV');
    });
    test('rRRdを含む', () => {
      expect(trackCodeSet).toContain('rRRd');
    });
    test('dYCを含む', () => {
      expect(trackCodeSet).toContain('dYC');
    });
    test('dEAを含む', () => {
      expect(trackCodeSet).toContain('dEA');
    });
    test('dDDを含む', () => {
      expect(trackCodeSet).toContain('dDD');
    });
    test('dMCを含む', () => {
      expect(trackCodeSet).toContain('dMC');
    });
    test('dWGMを含む', () => {
      expect(trackCodeSet).toContain('dWGM');
    });
    test('dRRを含む', () => {
      expect(trackCodeSet).toContain('dRR');
    });
    test('dIIOを含む', () => {
      expect(trackCodeSet).toContain('dIIO');
    });
    test('dHCを含む', () => {
      expect(trackCodeSet).toContain('dHC');
    });
    test('dBPを含む', () => {
      expect(trackCodeSet).toContain('dBP');
    });
    test('dCLを含む', () => {
      expect(trackCodeSet).toContain('dCL');
    });
    test('dWWを含む', () => {
      expect(trackCodeSet).toContain('dWW');
    });
    test('dACを含む', () => {
      expect(trackCodeSet).toContain('dAC');
    });
    test('dNBCを含む', () => {
      expect(trackCodeSet).toContain('dNBC');
    });
    test('dRiRを含む', () => {
      expect(trackCodeSet).toContain('dRiR');
    });
    test('dSBSを含む', () => {
      expect(trackCodeSet).toContain('dSBS');
    });
    test('dBBを含む', () => {
      expect(trackCodeSet).toContain('dBB');
    });
    test('bPPを含む', () => {
      expect(trackCodeSet).toContain('bPP');
    });
    test('bTCを含む', () => {
      expect(trackCodeSet).toContain('bTC');
    });
    test('bCMoを含む', () => {
      expect(trackCodeSet).toContain('bCMo');
    });
    test('bCMaを含む', () => {
      expect(trackCodeSet).toContain('bCMa');
    });
    test('bTBを含む', () => {
      expect(trackCodeSet).toContain('bTB');
    });
    test('bSRを含む', () => {
      expect(trackCodeSet).toContain('bSR');
    });
    test('bSGを含む', () => {
      expect(trackCodeSet).toContain('bSG');
    });
    test('bNHを含む', () => {
      expect(trackCodeSet).toContain('bNH');
    });
    test('bNYMを含む', () => {
      expect(trackCodeSet).toContain('bNYM');
    });
    test('bMC3を含む', () => {
      expect(trackCodeSet).toContain('bMC3');
    });
    test('bKDを含む', () => {
      expect(trackCodeSet).toContain('bKD');
    });
    test('bWPを含む', () => {
      expect(trackCodeSet).toContain('bWP');
    });
    test('bSSを含む', () => {
      expect(trackCodeSet).toContain('bSS');
    });
    test('bSLを含む', () => {
      expect(trackCodeSet).toContain('bSL');
    });
    test('bMGを含む', () => {
      expect(trackCodeSet).toContain('bMG');
    });
    test('bSHSを含む', () => {
      expect(trackCodeSet).toContain('bSHS');
    });
    test('bLLを含む', () => {
      expect(trackCodeSet).toContain('bLL');
    });
    test('bBLを含む', () => {
      expect(trackCodeSet).toContain('bBL');
    });
    test('bRRMを含む', () => {
      expect(trackCodeSet).toContain('bRRM');
    });
    test('bMTを含む', () => {
      expect(trackCodeSet).toContain('bMT');
    });
    test('bBBを含む', () => {
      expect(trackCodeSet).toContain('bBB');
    });
    test('bPGを含む', () => {
      expect(trackCodeSet).toContain('bPG');
    });
    test('bMMを含む', () => {
      expect(trackCodeSet).toContain('bMM');
    });
    test('bRR7を含む', () => {
      expect(trackCodeSet).toContain('bRR7');
    });
    test('bADを含む', () => {
      expect(trackCodeSet).toContain('bAD');
    });
    test('bRPを含む', () => {
      expect(trackCodeSet).toContain('bRP');
    });
    test('bDKSを含む', () => {
      expect(trackCodeSet).toContain('bDKS');
    });
    test('bYIを含む', () => {
      expect(trackCodeSet).toContain('bYI');
    });
    test('bBRを含む', () => {
      expect(trackCodeSet).toContain('bBR');
    });
    test('bMCを含む', () => {
      expect(trackCodeSet).toContain('bMC');
    });
    test('bWSを含む', () => {
      expect(trackCodeSet).toContain('bWS');
    });
    test('bSSyを含む', () => {
      expect(trackCodeSet).toContain('bSSy');
    });
    test('bAtDを含む', () => {
      expect(trackCodeSet).toContain('bAtD');
    });
    test('bDCを含む', () => {
      expect(trackCodeSet).toContain('bDC');
    });
    test('bMHを含む', () => {
      expect(trackCodeSet).toContain('bMH');
    });
    test('bSCSを含む', () => {
      expect(trackCodeSet).toContain('bSCS');
    });
    test('bLALを含む', () => {
      expect(trackCodeSet).toContain('bLAL');
    });
    test('bSWを含む', () => {
      expect(trackCodeSet).toContain('bSW');
    });
    test('bKCを含む', () => {
      expect(trackCodeSet).toContain('bKC');
    });
    test('bVVを含む', () => {
      expect(trackCodeSet).toContain('bVV');
    });
    test('bRAを含む', () => {
      expect(trackCodeSet).toContain('bRA');
    });
    test('bDKMを含む', () => {
      expect(trackCodeSet).toContain('bDKM');
    });
    test('bDCtを含む', () => {
      expect(trackCodeSet).toContain('bDCt');
    });
    test('bPPCを含む', () => {
      expect(trackCodeSet).toContain('bPPC');
    });
    test('bMDを含む', () => {
      expect(trackCodeSet).toContain('bMD');
    });
    test('bRIWを含む', () => {
      expect(trackCodeSet).toContain('bRIW');
    });
    test('bBC3を含む', () => {
      expect(trackCodeSet).toContain('bBC3');
    });
    test('bRRwを含む', () => {
      expect(trackCodeSet).toContain('bRRw');
    });
  });
});

describe('getByCode', () => {
  test.each(Array.from(trackCodeSet))('getByCode(%s)がWRを0以上の値をもつ', (code) => {
    const track = getByCode(code);
    expect(track).not.toBeNull();
    expect(track.code).toEqual(code);
    expect(track.nitaVSWRMilliseconds).toBeGreaterThan(0);
    expect(track.nitaAllCombinationWRMilliseconds).toBeGreaterThan(0);
  });
});
