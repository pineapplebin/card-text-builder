const COLORS = {
  W: '#fffdf7', INF_W: '#ece8e3', EFF_W: '#e7e5de',
  U: '#016dab', INF_U: '#a9c3d2', EFF_U: '#cdd7e0',
}

const borders = {
  w: {
    _name: '普通白',
    border: [COLORS.W], name: [COLORS.INF_W], type: [COLORS.INF_W],
    effect: [COLORS.EFF_W], body: [],
  },
  u: {
    _name: '普通蓝',
    border: [COLORS.U], name: [COLORS.INF_U], type: [COLORS.INF_U],
    effect: [COLORS.EFF_U], body: [],
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
