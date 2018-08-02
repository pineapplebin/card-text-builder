const COLORS = {
  BODY_FONT: '#000',
  W: '#fffdf7', INF_W: '#f9f5ea', EFF_W: '#f9f5ea', BODY_W: '#efe8d6',
  U: '#016dab', INF_U: '#c3dfed', EFF_U: '#e0f1fb', BODY_U: '#b2d6e6',
}

const borders = {
  w: {
    _name: '普通白',
    border: [COLORS.W], name: [COLORS.INF_W], type: [COLORS.INF_W],
    effect: [COLORS.EFF_W], body: [COLORS.BODY_W], body_font: [COLORS.BODY_FONT],
  },
  u: {
    _name: '普通蓝',
    border: [COLORS.U], name: [COLORS.INF_U], type: [COLORS.INF_U],
    effect: [COLORS.EFF_U], body: [COLORS.BODY_U], body_font: [COLORS.BODY_FONT],
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
