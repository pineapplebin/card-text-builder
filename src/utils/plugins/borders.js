const COLORS = {
  BODY_FONT: '#000', BODY_FONT_WHITE: '#fff',
  W: '#fffdf7', INF_W: '#f9f5ea', EFF_W: '#f9f5ea', BODY_W: '#efe8d6',
  U: '#016dab', INF_U: '#c3dfed', EFF_U: '#e0f1fb', BODY_U: '#b2d6e6',
  G: '#075c21', INF_G: '#bdd5c8', EFF_G: '#e2f4e4', BODY_G: '#c7decc',
  R: '#e02d2d', INF_R: '#f1d1c2', EFF_R: '#f1e1da', BODY_R: '#f0cdbd',
  B: '#37372d', INF_B: '#c0baba', EFF_B: '#e8e5e3', BODY_B: '#cac5c3',
  M: '#f3dd81', INF_M: '#cfba7c', EFF_M: '#f3ead3', BODY_M: '#c8b37a',
  A: '#e9e8eb', INF_A: '#dce4e9', EFF_A: '#dbe5e9', BODY_A: '#cad6dd',
  EFF_LW: '#f4e6c3', EFF_LU: '#b9d6eb', EFF_LB: '#b1abab', EFF_LR: '#eba78f', EFF_LG: '#c4deca',
  BODY_AV: '#9a673a',
}
const KEYS = [
  '_name', 'border', 'name', 'type', 'effect', 'body', 'body_font', 'name_font']

function standardBorder (obj) {
  const conf = { ...obj }
  if (!conf.type)
    conf.type = [...conf.name]
  if (!conf.body_font)
    conf.body_font = [COLORS.BODY_FONT]
  if (!conf.name_font)
    conf.name_font = [COLORS.BODY_FONT]
  return conf
}

function reuseBorder (source, target) {
  const n = JSON.parse(JSON.stringify(source))
  return Object.assign(n, target)
}

/**
 * normal borders
 */
const borders = {
  w: standardBorder({
    _name: '白', border: [COLORS.W], name: [COLORS.INF_W],
    effect: [COLORS.EFF_W], body: [COLORS.BODY_W],
  }),
  u: standardBorder({
    _name: '蓝', border: [COLORS.U], name: [COLORS.INF_U],
    effect: [COLORS.EFF_U], body: [COLORS.BODY_U],
  }),
  b: standardBorder({
    _name: '黑', border: [COLORS.B], name: [COLORS.INF_B],
    effect: [COLORS.EFF_B], body: [COLORS.BODY_B],
  }),
  r: standardBorder({
    _name: '红', border: [COLORS.R], name: [COLORS.INF_R],
    effect: [COLORS.EFF_R], body: [COLORS.BODY_R],
  }),
  g: standardBorder({
    _name: '绿', border: [COLORS.G], name: [COLORS.INF_G],
    effect: [COLORS.EFF_G], body: [COLORS.BODY_G],
  }),
  a: standardBorder({
    _name: '神器', border: [COLORS.A], name: [COLORS.INF_A],
    effect: [COLORS.EFF_A], body: [COLORS.BODY_A],
  }),
  m: standardBorder({
    _name: '多色', border: [COLORS.M], name: [COLORS.INF_M],
    effect: [COLORS.EFF_M], body: [COLORS.BODY_M],
  }),
  av: standardBorder({
    _name: '载具', border: [COLORS.A], name: [COLORS.INF_A],
    effect: [COLORS.EFF_A], body: [COLORS.BODY_AV], body_font: [COLORS.BODY_FONT_WHITE],
  }),
}

/**
 * double color borders
 */
Object.assign(borders, (function () {
  const color = ['w', 'u', 'b', 'r', 'g']
  const rst = {}
  for (let i = 0; i < color.length; i++) {
    for (let j = i + 1; j < color.length; j++) {
      const l = borders[color[i]], r = borders[color[j]]
      const k = color[i] + color[j]
      rst[k] = standardBorder({
        _name: `${l._name}${r._name}`,
        border: [l.border[0], r.border[0]], name: [COLORS.INF_M],
        effect: [l.effect[0], r.effect[0]], body: [COLORS.BODY_M],
      })
    }
  }
  return rst
}()))

/**
 * land color borders
 */
const LAND_BORDERS = {
  lw: reuseBorder(borders.w, { _name: '地白', effect: [COLORS.EFF_LW] }),
  lu: reuseBorder(borders.u, { _name: '地蓝', effect: [COLORS.EFF_LU] }),
  lb: reuseBorder(borders.b, { _name: '地黑', effect: [COLORS.EFF_LB] }),
  lr: reuseBorder(borders.r, { _name: '地红', effect: [COLORS.EFF_LR] }),
  lg: reuseBorder(borders.g, { _name: '地绿', effect: [COLORS.EFF_LG] }),
}
Object.assign(borders, LAND_BORDERS, (function () {
  return {}
}()))

/**
 * special borders
 */
Object.assign(borders, {
  token: standardBorder({
    _name: null, name: ['#0c100e'], border: ['#cfa130'], name_font: ['#e1c54c'],
  })
})

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
        return 'transparent'
      if (!borders[code][part])
        return 'transparent'
      const t = borders[code][part]

      return t.length > 1 ? t : [t[0], t[0]]
    }
  }
}

export function getBorderOptions () {
  return Object.keys(borders)
    .filter(k => borders[k]._name)
    .map(k => ({ label: borders[k]._name, value: k }))
}
