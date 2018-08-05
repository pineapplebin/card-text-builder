import m0 from '../../assets/images/mana/0.png'
import m1 from '../../assets/images/mana/1.png'
import m2 from '../../assets/images/mana/2.png'
import m3 from '../../assets/images/mana/3.png'
import m4 from '../../assets/images/mana/4.png'
import m5 from '../../assets/images/mana/5.png'
import m6 from '../../assets/images/mana/6.png'
import m7 from '../../assets/images/mana/7.png'
import m8 from '../../assets/images/mana/8.png'
import m9 from '../../assets/images/mana/9.png'
import m10 from '../../assets/images/mana/10.png'
import m11 from '../../assets/images/mana/11.png'
import m12 from '../../assets/images/mana/12.png'
import x from '../../assets/images/mana/X.png'
import y from '../../assets/images/mana/Y.png'
import z from '../../assets/images/mana/Z.png'
import w from '../../assets/images/mana/W.png'
import u from '../../assets/images/mana/U.png'
import b from '../../assets/images/mana/B.png'
import r from '../../assets/images/mana/R.png'
import g from '../../assets/images/mana/G.png'
import c from '../../assets/images/mana/C.png'
import e from '../../assets/images/mana/E.png'
import t from '../../assets/images/mana/T.png'
import q from '../../assets/images/mana/Q.png'
import s2w from '../../assets/images/mana/2W.png'
import s2u from '../../assets/images/mana/2U.png'
import s2b from '../../assets/images/mana/2B.png'
import s2r from '../../assets/images/mana/2R.png'
import s2g from '../../assets/images/mana/2G.png'
import wu from '../../assets/images/mana/WU.png'
import ub from '../../assets/images/mana/UB.png'
import br from '../../assets/images/mana/BR.png'
import rg from '../../assets/images/mana/RG.png'
import gw from '../../assets/images/mana/GW.png'
import wb from '../../assets/images/mana/WB.png'
import ur from '../../assets/images/mana/UR.png'
import bg from '../../assets/images/mana/BG.png'
import gu from '../../assets/images/mana/GU.png'
import rw from '../../assets/images/mana/RW.png'
import wp from '../../assets/images/mana/WP.png'
import up from '../../assets/images/mana/UP.png'
import bp from '../../assets/images/mana/BP.png'
import rp from '../../assets/images/mana/RP.png'
import gp from '../../assets/images/mana/GP.png'

import Wb from '../../assets/images/background/default_white.jpg'
import Ub from '../../assets/images/background/default_blue.jpg'
import Bb from '../../assets/images/background/default_black.jpg'
import Rb from '../../assets/images/background/default_red.jpg'
import Gb from '../../assets/images/background/default_green.jpg'
import Ab from '../../assets/images/background/default_artifact.jpg'
import Mb from '../../assets/images/background/default_multi.jpg'
import Lb from '../../assets/images/background/default_land.jpg'
import ECWb from '../../assets/images/background/enchant_creature_white.jpg'
import ECUb from '../../assets/images/background/enchant_creature_blue.jpg'
import ECBb from '../../assets/images/background/enchant_creature_black.jpg'
import ECRb from '../../assets/images/background/enchant_creature_red.jpg'
import ECGb from '../../assets/images/background/enchant_creature_green.jpg'
import ECMb from '../../assets/images/background/enchant_creature_multi.jpg'
import ECAb from '../../assets/images/background/enchant_artifact.jpg'
import AVb from '../../assets/images/background/artifact_vehicle.jpg'
import MIXUBb from '../../assets/images/background/mix_blue_black.png'
import MIXBGb from '../../assets/images/background/mix_black_green.jpg'
import PWWb from '../../assets/images/background/planeswalker_white.jpg'
import PWUb from '../../assets/images/background/planeswalker_blue.jpg'
import PWBb from '../../assets/images/background/planeswalker_black.jpg'
import PWRb from '../../assets/images/background/planeswalker_red.jpg'
import PWGb from '../../assets/images/background/planeswalker_green.png'
import PWMb from '../../assets/images/background/planeswalker_multi.jpg'

const images = {
  mana: {
    "0": m0, "1": m1, "2": m2, "3": m3, "4": m4, "5": m5, "6": m6, "7": m7,
    "8": m8, "9": m9, "10": m10, "11": m11, "12": m12, x, y, z,
    w, u, b, r, g, c, e, t, q,
    "2w": s2w, "2u": s2u, "2b": s2b, "2r": s2r, "2g": s2g,
    wu, ub, br, rg, gw, wb, ur, bg, gu, rw,
    wp, up, bp, rp, gp,
  },
  bg: {
    w: Wb, u: Ub, r: Rb, b: Bb, g: Gb, m: Mb, a: Ab,
    av: AVb,
  },
  getSymbol (set, rarity) {
    let _r
    if (!rarity)
      _r = 'c'
    else
      _r = rarity[0];
    return `http://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=${
      set}&size=large&rarity=${_r}`
  },
  install (Vue) {
    Vue.prototype.$$images = this
  }
};

export default images

export function getBgOptions () {
  return [
    { label: '白', value: 'w' },
    { label: '蓝', value: 'u' },
    { label: '黑', value: 'b' },
    { label: '红', value: 'r' },
    { label: '绿', value: 'g' },
    { label: '多色', value: 'm' },
    { label: '神器', value: 'a' },
    { label: '载具', value: 'av' },
  ]
}
