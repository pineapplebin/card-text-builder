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

const images = {
  mana: {
    "0": m0, "1": m1, "2": m2, "3": m3, "4": m4, "5": m5, "6": m6, "7": m7,
    "8": m8, "9": m9, "10": m10, "11": m11, "12": m12, x,
    w, u, b, r, g, c, e, t, q,
    "2w": s2w, "2u": s2u, "2b": s2b, "2r": s2r, "2g": s2g,
    wu, ub, br, rg, gw, wb, ur, bg, gu, rw,
    wp, up, bp, rp, gp,
  },
  getSymbol(set, rarity) {
    let _r
    if (!rarity)
      _r = 'c'
    else
      _r = rarity[0];
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
