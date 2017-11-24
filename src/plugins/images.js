import m0 from '../assets/mana/0.png'
import m1 from '../assets/mana/1.png'
import m2 from '../assets/mana/2.png'
import m3 from '../assets/mana/3.png'
import m4 from '../assets/mana/4.png'
import m5 from '../assets/mana/5.png'
import m6 from '../assets/mana/6.png'
import m7 from '../assets/mana/7.png'
import m8 from '../assets/mana/8.png'
import m9 from '../assets/mana/9.png'
import m10 from '../assets/mana/10.png'
import m11 from '../assets/mana/11.png'
import m12 from '../assets/mana/12.png'
import x from '../assets/mana/X.png'
import w from '../assets/mana/W.png'
import u from '../assets/mana/U.png'
import b from '../assets/mana/B.png'
import r from '../assets/mana/R.png'
import g from '../assets/mana/G.png'
import c from '../assets/mana/C.png'
import e from '../assets/mana/E.png'
import t from '../assets/mana/T.png'
import q from '../assets/mana/Q.png'
import s2w from '../assets/mana/2W.png'
import s2u from '../assets/mana/2U.png'
import s2b from '../assets/mana/2B.png'
import s2r from '../assets/mana/2R.png'
import s2g from '../assets/mana/2G.png'
import wu from '../assets/mana/WU.png'
import ub from '../assets/mana/UB.png'
import br from '../assets/mana/BR.png'
import rg from '../assets/mana/RG.png'
import gw from '../assets/mana/GW.png'
import wb from '../assets/mana/WB.png'
import ur from '../assets/mana/UR.png'
import bg from '../assets/mana/BG.png'
import gu from '../assets/mana/GU.png'
import rw from '../assets/mana/RW.png'
import wp from '../assets/mana/WP.png'
import up from '../assets/mana/UP.png'
import bp from '../assets/mana/BP.png'
import rp from '../assets/mana/RP.png'
import gp from '../assets/mana/GP.png'

const images = {
  mana: {
    "0": m0, "1": m1, "2": m2, "3": m3, "4": m4, "5": m5, "6": m6, "7": m7,
    "8": m8, "9": m9, "10": m10, "11": m11, "12": m12, x,
    w, u, b, r, g, c, e, t, q,
    "2w": s2w, "2u": s2u, "2b": s2b, "2r": s2r, "2g": s2g,
    wu, ub, br, rg, gw, wb, ur, bg, gu, rw,
    wp, up, bp, rp, gp,
  },
  getSymbol(set, rarity='common') {
    const _r = rarity[0];
    return `http://gatherer.wizards.com/Handlers/Image.ashx?type=symbol&set=${
      set}&size=large&rarity=${_r}`
  },
  install(Vue) {
    Vue.prototype.$$images = {
      mana: this.mana,
      getSymbol: this.getSymbol,
    }
  }
};

export default images
