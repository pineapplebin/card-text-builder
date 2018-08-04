const COLORS = {
  BODY_FONT: '#000',
  W: '#fffdf7', INF_W: '#f9f5ea', EFF_W: '#f9f5ea', BODY_W: '#efe8d6',
  U: '#016dab', INF_U: '#c3dfed', EFF_U: '#e0f1fb', BODY_U: '#b2d6e6',
  G: '#075c21', INF_G: '#bdd5c8', EFF_G: '#e2f4e4', BODY_G: '#c7decc',
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
        `linear-gradient(to right, ${t[0]}, ${t[1]})` :
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
