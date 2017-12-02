const DEFAULT = {
  display: null,
  name: null,
  type: null,
  effect: null,
  body: null,
  body_font: '#000000',
  background: null,
  border: null,
  dot: [],
};

function Color(c = {}) {
  const new_c = Object.assign({...DEFAULT}, c);
  [['type', 'name'], ['body', 'name']].forEach(([target, default_]) => {
    if (new_c[target] === null)
      new_c[target] = new_c[default_];
  });
  return new_c
}

function Background(b = {}) {
  return Object.assign({}, b);
}

function linear(c1, c2, dir = 'to right') {
  return `linear-gradient(${dir}, ${c1} 45%, ${c2} 55%)`
}

const C = {
  W1: '#F5F5ED', W2: '#efebdf', W3: '#F9F9F9',
  U1: '#E2EDF5', U2: '#b8d6ec', U3: '#036FAF',
  B1: '#D4D4D2', B2: '#B1AAA4', B3: '#3E3D3B',
  R1: '#E4D4C5', R2: '#f1c9b1', R3: '#EE5A32',
  G1: '#CCD7CF', G2: '#b9d0bc', G3: '#0D6C4E',
  A1: '#EAF0F2', A2: '#CDD6DA', A3: '#DFE3E5',
  L1: '#D6D2CF', L2: '#D7CEC9', L3: '#A2958D',
  LEFFECT: {
    W: '#FBF0C9', U: '#BAD9EE', B: '#B0A8A9',
    R: '#F1AF96', G: '#C3DDCE',
  },
  M1: '#F4EEDC', M2: '#DABF82', M3: '#FDE887',
  MIX: '#D1C8BE',
  DEVOID1: '#E7E9E3', DEVOID2: '#C4C7C5', DEVOID3: '#D8D8D8',
};

import Wb from '../../assets/background/default_white.jpg'
import Ub from '../../assets/background/default_blue.jpg'
import Bb from '../../assets/background/default_black.jpg'
import Rb from '../../assets/background/default_red.jpg'
import Gb from '../../assets/background/default_green.jpg'
import Ab from '../../assets/background/default_artifact.jpg'
import Mb from '../../assets/background/default_multi.jpg'
import Lb from '../../assets/background/default_land.jpg'
import ECWb from '../../assets/background/enchant_creature_white.jpg'
import ECUb from '../../assets/background/enchant_creature_blue.jpg'
import ECBb from '../../assets/background/enchant_creature_black.jpg'
import ECRb from '../../assets/background/enchant_creature_red.jpg'
import ECGb from '../../assets/background/enchant_creature_green.jpg'
import ECMb from '../../assets/background/enchant_creature_multi.jpg'
import ECAb from '../../assets/background/enchant_artifact.jpg'
import AVb from '../../assets/background/artifact_vehicle.jpg'
import MIXUBb from '../../assets/background/mix_blue_black.png'
import MIXBGb from '../../assets/background/mix_black_green.jpg'
import PWWb from '../../assets/background/planeswalker_white.jpg'
import PWUb from '../../assets/background/planeswalker_blue.jpg'
import PWBb from '../../assets/background/planeswalker_black.jpg'
import PWRb from '../../assets/background/planeswalker_red.jpg'
import PWGb from '../../assets/background/planeswalker_green.png'
import PWMb from '../../assets/background/planeswalker_multi.jpg'

const border = {
  W: Color({
    code: 'W', display: '白',
    name: C.W2, effect: C.W1, background: Wb, border: C.W3, dot: [C.W3]
  }),
  U: Color({
    code: 'U', display: '蓝',
    name: C.U2, effect: C.U1, background: Ub, border: C.U3, dot: [C.U3]
  }),
  B: Color({
    code: 'B', display: '黑',
    name: C.B2, effect: C.B1, background: Bb, border: C.B3, dot: [C.B3]
  }),
  R: Color({
    code: 'R', display: '红',
    name: C.R2, effect: C.R1, background: Rb, border: C.R3, dot: [C.R3]
  }),
  G: Color({
    code: 'G', display: '绿',
    name: C.G2, effect: C.G1, background: Gb, border: C.G3, dot: [C.G3]
  }),
  WU: Color({
    code: 'WU', display: '白蓝',
    name: C.M2, effect: linear(C.W1, C.U1),
    border: linear(C.W3, C.U3), background: Mb, dot: [C.W3, C.U3]
  }),
  UB: Color({
    code: 'UB', display: '蓝黑',
    name: C.M2, effect: linear(C.U1, C.B1),
    border: linear(C.U3, C.B3), background: Mb, dot: [C.U3, C.B3]
  }),
  BR: Color({
    code: 'BR', display: '黑红',
    name: C.M2, effect: linear(C.B1, C.R1),
    border: linear(C.B3, C.R3), background: Mb, dot: [C.B3, C.R3]
  }),
  RG: Color({
    code: 'RG', display: '红绿',
    name: C.M2, effect: linear(C.R1, C.G1),
    border: linear(C.R3, C.G3), background: Mb, dot: [C.R3, C.G3]
  }),
  GW: Color({
    code: 'GW', display: '绿白',
    name: C.M2, effect: linear(C.G1, C.W1),
    border: linear(C.G3, C.W3), background: Mb, dot: [C.G3, C.W3]
  }),
  WB: Color({
    code: 'WB', display: '白黑',
    name: C.M2, effect: linear(C.W1, C.B1),
    border: linear(C.W3, C.B3), background: Mb, dot: [C.W3, C.B3]
  }),
  UR: Color({
    code: 'UR', display: '蓝红',
    name: C.M2, effect: linear(C.U1, C.R1),
    border: linear(C.U3, C.R3), background: Mb, dot: [C.U3, C.R3]
  }),
  BG: Color({
    code: 'BG', display: '黑绿',
    name: C.M2, effect: linear(C.B1, C.G1),
    border: linear(C.B3, C.G3), background: Mb, dot: [C.B3, C.G3]
  }),
  RW: Color({
    code: 'RW', display: '红白',
    name: C.M2, effect: linear(C.R1, C.W1),
    border: linear(C.R3, C.W3), background: Mb, dot: [C.R3, C.W3]
  }),
  GU: Color({
    code: 'GU', display: '绿蓝',
    name: C.M2, effect: linear(C.G1, C.U1),
    border: linear(C.G3, C.U3), background: Mb, dot: [C.G3, C.U3]
  }),
  MUL: Color({
    code: 'MUL', display: '多色',
    name: C.M2, effect: C.M1, border: C.M3, background: Mb, dot: [C.M3]
  }),
  L: Color({
    code: 'L', display: '地',
    name: C.L2, effect: C.L1, background: Lb, border: C.L3, dot: [C.L3]
  }),
  A: Color({
    code: 'A', display: '神器',
    name: C.A2, effect: C.A1, background: Ab, border: C.A3, dot: [C.A3]
  }),
  DEVOID: Color({
    code: 'DEVOID', display: '无色', name: C.DEVOID2,
    effect: C.DEVOID1, background: null, border: C.DEVOID3, dot: []
  }),
  DEVOIDW: Color({
    code: 'DEVOIDW', display: '无色白', name: C.W2, type: C.DEVOID2,
    body: C.DEVOID2, effect: C.DEVOID1, background: null,
    border: C.DEVOID3, dot: [C.W3]
  }),
  DEVOIDU: Color({
    code: 'DEVOIDU', display: '无色蓝', name: C.U2, type: C.DEVOID2,
    body: C.DEVOID2, effect: C.DEVOID1, background: null,
    border: C.DEVOID3, dot: [C.U3]
  }),
  DEVOIDB: Color({
    code: 'DEVOIDB', display: '无色黑', name: C.B2, type: C.DEVOID2,
    body: C.DEVOID2, effect: C.DEVOID1, background: null,
    border: C.DEVOID3, dot: [C.B3]
  }),
  DEVOIDR: Color({
    code: 'DEVOIDR', display: '无色红', name: C.R2, type: C.DEVOID2,
    body: C.DEVOID2, effect: C.DEVOID1, background: null,
    border: C.DEVOID3, dot: [C.R3]
  }),
  DEVOIDG: Color({
    code: 'DEVOIDG', display: '无色绿', name: C.G2, type: C.DEVOID2,
    body: C.DEVOID2, effect: C.DEVOID1, background: null,
    border: C.DEVOID3, dot: [C.G3]
  }),
  DEVOIDMUL: Color({
    code: 'DEVOIDMUL', display: '无色多色', name: C.M2, type: C.DEVOID2,
    body: C.DEVOID2, effect: C.DEVOID1, background: null,
    border: C.DEVOID3, dot: []
  }),
  DBW: Color({
    code: 'DBW', display: '背面白', name: '#B9B1A2', effect: '#DCD6CC',
    background: Wb, border: C.W3, body_font: '#FFFFFF', dot: [C.W3]
  }),
  DBU: Color({
    code: 'DBU', display: '背面蓝', name: '#0291B8', effect: '#B9D2E2',
    background: Ub, border: C.U3, body_font: '#FFFFFF', dot: [C.U3]
  }),
  DBB: Color({
    code: 'DBB', display: '背面黑', name: '#615d5a', effect: '#b9b5b1',
    background: Bb, border: C.B3, body_font: '#FFFFFF', dot: [C.B3]
  }),
  DBR: Color({
    code: 'DBR', display: '背面红', name: '#C54D30', effect: '#DDBEB1',
    background: Rb, border: C.R3, body_font: '#FFFFFF', dot: [C.R3]
  }),
  DBG: Color({
    code: 'DBG', display: '背面绿', name: '#395e3e', effect: '#b3c5ba',
    background: Gb, border: C.G3, body_font: '#FFFFFF', dot: [C.G3]
  }),
  DBA: Color({
    code: 'DBA', display: '背面神器', name: '#89a5ae', effect: '#bdced3',
    background: Ab, border: C.A3, body_font: '#FFFFFF', dot: []
  }),
};


const background = {
  W: Background({background: Wb, display: '白'}),
  U: Background({background: Ub, display: '蓝'}),
  B: Background({background: Bb, display: '黑'}),
  R: Background({background: Rb, display: '红'}),
  G: Background({background: Gb, display: '绿'}),
  MUL: Background({background: Mb, display: '多色'}),
  L: Background({
    background: Lb, display: '单色地',
    transform() {
      const _new = C.LEFFECT[this.code];
      if (_new)
        this.effect = _new;
    }
  }),
  LMUL: Background({
    background: Lb, name: C.L2, type: C.L2, display: '多色地',
    transform() {
      if (this.code.match(/^[WUBRG]{2}$/))
        this.effect = linear(C.LEFFECT[this.code[0]], C.LEFFECT[this.code[1]]);
    }
  }),
  A: Background({background: Ab, display: '神器'}),
  AV: Background({
    background: AVb, display: '神器载具', body: '#966339', body_font: '#FFF'
  }),
  ECW: Background({background: ECWb, display: '结界生物白', code: 'ECW'}),
  ECU: Background({background: ECUb, display: '结界生物蓝', code: 'ECU'}),
  ECB: Background({background: ECBb, display: '结界生物黑', code: 'ECB'}),
  ECR: Background({background: ECRb, display: '结界生物红', code: 'ECR'}),
  ECG: Background({background: ECGb, display: '结界生物绿', code: 'ECG'}),
  ECM: Background({background: ECMb, display: '结界生物多色', code: 'ECM'}),
  ECA: Background({background: ECAb, display: '结界神器', code: 'ECA'}),
  DEVOID: Background({display: '无色', code: 'DEVOID'}),
  PWW: Background({background: PWWb, display: '鹏洛客白'}),
  PWU: Background({background: PWUb, display: '鹏洛客蓝'}),
  PWB: Background({background: PWBb, display: '鹏洛客黑'}),
  PWR: Background({background: PWRb, display: '鹏洛客红'}),
  PWG: Background({background: PWGb, display: '鹏洛客绿'}),
  PWM: Background({background: PWMb, display: '鹏洛客多色'}),
};

export default {
  border,
  background,
}
