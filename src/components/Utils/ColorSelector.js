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

function linear(c1, c2, dir = 'to right') {
  return `linear-gradient(${dir}, ${c1} 45%, ${c2} 55%)`
}

const C = {
  W1: '#F5F5ED', W2: '#E7E1CD', W3: '#F9F9F9',
  U1: '#E2EDF5', U2: '#A5CFE4', U3: '#036FAF',
  B1: '#D4D4D2', B2: '#B1AAA4', B3: '#3E3D3B',
  R1: '#E4D4C5', R2: '#ECBA97', R3: '#EE5A32',
  G1: '#CCD7CF', G2: '#BBBDA5', G3: '#0D6C4E',
  A1: '#EAF0F2', A2: '#CDD6DA', A3: '#DFE3E5',
  L1: '#D6D2CF', L2: '#D7CEC9', L3: '#A2958D',
  M1: '#F4EEDC', M2: '#BCA468', M3: '#FDE887',
  MIX: '#D1C8BE'
};

import Wb from '../../assets/background/default_white.jpg'
import Ub from '../../assets/background/default_blue.jpg'
import Bb from '../../assets/background/default_black.jpg'
import Rb from '../../assets/background/default_red.jpg'
import Gb from '../../assets/background/default_green.jpg'
import Ab from '../../assets/background/default_artifact.jpg'
import Mb from '../../assets/background/default_multi.jpg'
import Lb from '../../assets/background/default_land.jpg'
import ECWb from '../../assets/background/enchat_creature_blue.jpg'
import ECUb from '../../assets/background/enchant_creature_black.jpg'
import ECBb from '../../assets/background/enchant_creature_white.jpg'
import ECRb from '../../assets/background/enchant_creature_red.jpg'
import ECGb from '../../assets/background/enchant_creature_green.jpg'
import ECMb from '../../assets/background/enchant_creature_multi.jpg'
import AVb from '../../assets/background/artifact_vehicle.jpg'
import MIXBGb from '../../assets/background/mix_black_green.jpg'

export default {
  W: Color({
    code: 'W', display: '白',
    name: C.W2, effect: C.W1, border: C.W3, background: Wb, dot: [C.W3]
  }),
  U: Color({
    code: 'U', display: '蓝',
    name: C.U2, effect: C.U1, border: C.U3, background: Ub, dot: [C.U3]
  }),
  B: Color({
    code: 'B', display: '黑',
    name: C.B2, effect: C.B1, border: C.B3, background: Bb, dot: [C.B3]
  }),
  R: Color({
    code: 'R', display: '红',
    name: C.R2, effect: C.R1, border: C.R3, background: Rb, dot: [C.R3]
  }),
  G: Color({
    code: 'G', display: '绿',
    name: C.G2, effect: C.G1, border: C.G3, background: Gb, dot: [C.G3]
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
    name: C.L2, effect: C.L1, border: C.L3, background: Lb, dot: [C.L3]
  }),
  A: Color({
    code: 'A', display: '神器',
    name: C.A2, effect: C.A1, border: C.A3, background: Ab, dot: [C.A3]
  }),
  AB: Color({
    code: 'AB', display: '神器生物黑',
    name: C.B2, effect: C.B1, border: C.B3, background: Ab, dot: [C.B3]
  }),
  AR: Color({
    code: 'AR', display: '神器生物红',
    name: C.R2, effect: C.R1, border: C.R3, background: Ab, dot: [C.R3]
  }),
  AV: Color({
    code: 'AV', display: '神器载具',
    name: C.A2, effect: C.A1, border: C.A3,
    background: AVb, body_font: '#FFFFFF', body: '#93613C', dot: [C.A3]
  }),
  DBW: Color({
    code: 'DBW', display: '背面白',
    name: '#B9B1A2', effect: '#DCD6CC', border: C.W3,
    background: Wb, body_font: '#FFFFFF', dot: [C.W3]
  }),
  DBR: Color({
    code: 'DBR', display: '背面红',
    name: '#C54D30', effect: '#DDBEB1', border: C.R3,
    background: Rb, body_font: '#FFFFFF', dot: [C.R3]
  }),
  MIXBG: Color({
    code: 'MIXBG', display: '混色黑绿',
    name: C.MIX, effect: linear(C.B1, C.G1),
    border: linear(C.B3, C.G3), background: MIXBGb, dot: [C.B3, C.G3]
  })
}
