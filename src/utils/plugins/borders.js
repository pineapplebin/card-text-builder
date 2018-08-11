const COLORS = {
  BODY_FONT: '#000', BODY_FONT_WHITE: '#fff',
  W: '#fffdf7', INF_W: '#f9f5ea', EFF_W: '#f9f5ea', BODY_W: '#efe8d6',
  U: '#016dab', INF_U: '#c3dfed', EFF_U: '#e0f1fb', BODY_U: '#b2d6e6',
  G: '#075c21', INF_G: '#bdd5c8', EFF_G: '#e2f4e4', BODY_G: '#c7decc',
  R: '#e02d2d', INF_R: '#f1d1c2', EFF_R: '#f1e1da', BODY_R: '#f0cdbd',
  B: '#37372d', INF_B: '#c0baba', EFF_B: '#e8e5e3', BODY_B: '#cac5c3',
  M: '#f3dd81', INF_M: '#cfba7c', EFF_M: '#f3ead3', BODY_M: '#c8b37a',
  A: '#e9e8eb', INF_A: '#dce4e9', EFF_A: '#dbe5e9', BODY_A: '#cad6dd',
  BODY_AV: '#9a673a',
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
  b: {
    _name: '黑',
    border: [COLORS.B], name: [COLORS.INF_B], type: [COLORS.INF_B],
    effect: [COLORS.EFF_B], body: [COLORS.BODY_B], body_font: [COLORS.BODY_FONT],
  },
  r: {
    _name: '红',
    border: [COLORS.R], name: [COLORS.INF_R], type: [COLORS.INF_R],
    effect: [COLORS.EFF_R], body: [COLORS.BODY_R], body_font: [COLORS.BODY_FONT],
  },
  g: {
    _name: '绿',
    border: [COLORS.G], name: [COLORS.INF_G], type: [COLORS.INF_G],
    effect: [COLORS.EFF_G], body: [COLORS.BODY_G], body_font: [COLORS.BODY_FONT],
  },
  a: {
    _name: '神器',
    border: [COLORS.A], name: [COLORS.INF_A], type: [COLORS.INF_A],
    effect: [COLORS.EFF_A], body: [COLORS.BODY_A], body_font: [COLORS.BODY_FONT],
  },
  m: {
    _name: '多色',
    border: [COLORS.M], name: [COLORS.INF_M], type: [COLORS.INF_M],
    effect: [COLORS.EFF_M], body: [COLORS.BODY_M], body_font: [COLORS.BODY_FONT],
  },
  wu: {
    _name: '白蓝',
    border: [COLORS.W, COLORS.U], name: [COLORS.INF_M], type: [COLORS.INF_M],
    effect: [COLORS.EFF_W, COLORS.EFF_U], body: [COLORS.BODY_M], body_font: [COLORS.BODY_FONT],
  },
  av: {
    _name: '载具',
    border: [COLORS.A], name: [COLORS.INF_A], type: [COLORS.INF_A],
    effect: [COLORS.EFF_A], body: [COLORS.BODY_AV], body_font: [COLORS.BODY_FONT_WHITE],
  },
  doubleColor (color) {
    const l = borders[color[0]], r = borders[color[1]]
    return {
      _name: `${l._name}${r._name}`,
      border: [l.border[0], r.border[0]], name: [COLORS.INF_M], type: [COLORS.INF_M],
      effect: [l.effect[0], r.effect[0]], body: [COLORS.BODY_M], body_font: [COLORS.BODY_FONT],
    }
  },
}


export default function (Vue) {
  Vue.prototype.$$borders = {
    getColorText (code, part) {
      if (!code)
        return 'transparent'
      let border = null
      if (code.match(/^[wrgub]{2}$/)) {
        border = borders.doubleColor(code)
      } else {
        if (!borders[code])
          return 'transparent'
        border = borders[code]
      }

      if (!border[part])
        return 'transparent'
      const t = border[part]

      return t.length > 1 ?
        `linear-gradient(to right, ${t[0]} 45%, ${t[1]} 55%)` :
        t[0]
    },
    // for legendary title
    getLegendaryColor (code, part) {
      if (!code)
        return 'transparent'
      let border = null
      if (code.match(/^[wrgub]{2}$/)) {
        border = borders.doubleColor(code)
      } else {
        if (!borders[code])
          return 'transparent'
        border = borders[code]
      }

      if (!border[part])
        return 'transparent'
      const t = border[part]

      return t.length > 1 ? t : [t[0], t[0]]
    }
  }
}

export function getBorderOptions () {
  let rst = Object.keys(borders)
    .filter(k => borders[k]._name)
    .map(k => ({ label: borders[k]._name, value: k }))

  const color = ['w', 'u', 'b', 'r', 'g']
  for (let i = 0; i < color.length; i++) {
    for (let j = i + 1; j < color.length; j++) {
      const k = color[i] + color[j]
      const b = borders.doubleColor(k)
      rst.push({ label: b._name, value: k })
    }
  }
  return rst
}
