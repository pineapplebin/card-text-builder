const DEFAULT = {
  display: null,
  name: null,
  type: null,
  effect: null,
  body: null,
  body_font: '#000000',
  background: null,
  border: null,
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
  U1: '#E2EDF5', U2: '#BBDAEA', U3: '#036FAF',
  B1: '#D4D4D2', B2: '#B1AAA4', B3: '#3E3D3B',
  R1: '#E4D4C5', R2: '#ECBA97', R3: '#EE5A32',
  G1: '#CCD7CF', G2: '#BBBDA5', G3: '#0D6C4E',
  A1: '#EAF0F2', A2: '#CDD6DA', A3: '#DFE3E5',
  L1: '#D6D2CF', L2: '#D7CEC9', L3: '#A2958D',
  M1: '#F4EEDC', M2: '#BCA468', M3: '#FDE887',
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

export default {
  W: Color({
    display: '白', name: C.W2, effect: C.W1, border: C.W3, background: Wb
  }),
  U: Color({
    display: '蓝', name: C.U2, effect: C.U1, border: C.U3, background: Ub
  }),
  B: Color({
    display: '黑', name: C.B2, effect: C.B1, border: C.B3, background: Bb
  }),
  R: Color({
    display: '红', name: C.R2, effect: C.R1, border: C.R3, background: Rb
  }),
  G: Color({
    display: '绿', name: C.G2, effect: C.G1, border: C.G3, background: Gb
  }),
  WU: Color({
    display: '白蓝', name: C.M2, effect: linear(C.W1, C.U1),
    border: linear(C.W3, C.U3), background: Mb
  }),
  UB: Color({
    display: '蓝黑', name: C.M2, effect: linear(C.U1, C.B1),
    border: linear(C.U3, C.B3), background: Mb
  }),
  BR: Color({
    display: '黑红', name: C.M2, effect: linear(C.B1, C.R1),
    border: linear(C.B3, C.R3), background: Mb
  }),
  RG: Color({
    display: '红绿', name: C.M2, effect: linear(C.R1, C.G1),
    border: linear(C.R3, C.G3), background: Mb
  }),
  GW: Color({
    display: '绿白', name: C.M2, effect: linear(C.G1, C.W1),
    border: linear(C.G3, C.W3), background: Mb
  }),
  WB: Color({
    display: '白黑', name: C.M2, effect: linear(C.W1, C.B1),
    border: linear(C.W3, C.B3), background: Mb
  }),
  UR: Color({
    display: '蓝红', name: C.M2, effect: linear(C.U1, C.R1),
    border: linear(C.U3, C.R3), background: Mb
  }),
  BG: Color({
    display: '黑绿', name: C.M2, effect: linear(C.B1, C.G1),
    border: linear(C.B3, C.G3), background: Mb
  }),
  RW: Color({
    display: '红白', name: C.M2, effect: linear(C.R1, C.W1),
    border: linear(C.R3, C.W3), background: Mb
  }),
  GU: Color({
    display: '绿蓝', name: C.M2, effect: linear(C.G1, C.U1),
    border: linear(C.G3, C.U3), background: Mb
  }),
  MUL: Color({
    display: '多色', name: C.M2, effect: C.M1, border: C.M3, background: Mb
  }),
  L: Color({
    display: '地', name: C.L2, effect: C.L1, border: C.L3, background: Lb
  }),
  A: Color({
    display: '神器', name: C.A2, effect: C.A1, border: C.A3, background: Ab
  }),
  AB: Color({
    display: '神器生物黑', name: C.B2, effect: C.B1, border: C.B3, background: Ab
  }),
  AR: Color({
    display: '神器生物红', name: C.R2, effect: C.R1, border: C.R3, background: Ab
  }),
  AV: Color({
    display: '神器载具', name: C.A2, effect: C.A1, border: C.A3,
    background: AVb, body_font: '#FFFFFF', body: '#93613C'
  }),
  DBW: Color({
    display: '背面白', name: '#B9B1A2', effect: '#DCD6CC', border: C.W3,
    background: Wb, body_font: '#FFFFFF', dot: [C.W3]
  })
}
