const COLORS = {
  BODY_FONT: '#000',
  W: '#fffdf7', INF_W: '#f9f5ea', EFF_W: '#f9f5ea', BODY_W: '#efe8d6',
  U: '#016dab', INF_U: '#c3dfed', EFF_U: '#e0f1fb', BODY_U: '#b2d6e6',
  G: '#075c21', INF_G: '#bdd5c8', EFF_G: '#e2f4e4', BODY_G: '#c7decc',
  R: '#e02d2d', INF_R: '#f1d1c2', EFF_R: '#f1e1da', BODY_R: '#f0cdbd',
  B: '#37372d', INF_B: '#c0baba', EFF_B: '#e8e5e3', BODY_B: '#cac5c3',
  M: '#f3dd81', INF_M: '#cfba7c', EFF_M: '#f3ead3', BODY_M: '#c8b37a',
}

const borders = {
  w: {
    _name: '白',
    border: [COLORS.W], name: [COLORS.INF_W], type: [COLORS.INF_W],
    effect: [COLORS.EFF_W], body: [COLORS.BODY_W], body_font: [COLORS.BODY_FONT],
  },
  u: {
    _name: '蓝',
    border: [COLORS.U], name: [COLORS.INF_U], type: [COLORS.INF_U],
    effect: [COLORS.EFF_U], body: [COLORS.BODY_U], body_font: [COLORS.BODY_FONT],
  },
  g: {
    _name: '绿',
    border: [COLORS.G], name: [COLORS.INF_G], type: [COLORS.INF_G],
    effect: [COLORS.EFF_G], body: [COLORS.BODY_G], body_font: [COLORS.BODY_FONT],
  },
  m: {
    _name: '多色',
    border: [COLORS.M], name: [COLORS.INF_M], type: [COLORS.INF_M],
    effect: [COLORS.EFF_M], body: [COLORS.BODY_M], body_font: [COLORS.BODY_FONT],
  },
  ru: {
    _name: '红蓝',
    border: [COLORS.R, COLORS.U], name: [COLORS.INF_M], type: [COLORS.INF_M],
    effect: [COLORS.EFF_R, COLORS.EFF_U], body: [COLORS.BODY_M], body_font: [COLORS.BODY_FONT],
  }
}


export default function (Vue) {
  Vue.prototype.$$borders = {
    getColorText (code, part) {
      if (!borders[code])
        return 'transparent'
      if (!borders[code][part])
        return 'transparent'

      const t = borders[code][part]

      return t.length > 1 ?
        `linear-gradient(to right, ${t[0]} 45%, ${t[1]} 55%)` :
        t[0]
    },
    // for legendary title
    getLegendaryColor (code, part) {
      if (!borders[code])
        return []
      if (!borders[code][part])
        return []

      const t = borders[code][part]
      return t.length > 1 ? t : [t[0], t[0]]
    }
  }
}

export function getBorderOptions () {
  return Object.keys(borders).map(k => ({ label: borders[k]._name, value: k }))
}
