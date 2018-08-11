import {TextField, CheckBoxField, SelectField} from '../../utils/form-engine/fields'
import {getBorderOptions} from '../../utils/plugins/borders'
import {getBgOptions} from '../../utils/plugins/images'
import {request} from '../../utils/plugins/request'

export {getBorderOptions} from '../../utils/plugins/borders'
export {getBgOptions} from '../../utils/plugins/images'

export const common_conf = {
  border_style: SelectField({ label: '边框样式', options: getBorderOptions() }),
  bg_style: SelectField({ label: '背景样式', options: getBgOptions() }),
  name: TextField({ label: '名字' }),
  cost: TextField({ label: '法术力费用' }),
  image_url: TextField({ label: '卡图地址' }),
  type: TextField({ label: '类别' }),
  series: TextField({ label: '系列编号' }),
  rarity: SelectField({
    label: '稀有度', options: [
      { label: '普通', value: 'common' },
      { label: '非普通', value: 'uncommon' },
      { label: '稀有', value: 'rare' },
      { label: '秘稀', value: 'mythic' },
    ]
  }),
}

/**
 * @param url
 * @returns {Promise<CardType>}
 */
export async function fetchCardInfo (url) {
  const splited = url.slice(8).split('/')
  const r = await request.getCardBySeries(splited[2], splited[3])
  if (!r.error) {
    if (r.image_uris && r.image_uris.large)
      r.image_uris.large = r.image_uris.large.replace(/zhs/g, 'en')
    return r
  }
  else // 兼容无中文卡情况
    return null
}

function sortColor (list) {
  const order = { w: 1, u: 2, b: 3, r: 4, g: 5 }
  return list.sort((a, b) => (order[a.toLowerCase()] || 100) - (order[b.toLowerCase()] || 100))
}

export const api_parser = {
  parseCost (obj) {
    return obj.mana_cost.replace(/}/g, ',').replace(/{/g, '').slice(0, -1).toLowerCase()
  },
  parseBody (obj) {
    return `${obj.power}/${obj.toughness}`
  },
  parseType (obj) {
    return obj.printed_type_line.replace(/\s/g, '')
  },
  parseEffect (obj) {
    let t = `${obj.printed_text || ''}`
    t = t.replace(/(（)/g, '@$1').replace(/(）)/g, '$1@')
    if (obj.flavor_text) {
      t += `${t.length ? '\n' : ''}#${obj.flavor_text}#`
    }
    return t
  },
  parseBorder (obj) {
    if (obj.colors.length === 0)
      return 'a'
    if (obj.colors.length > 2)
      return 'm'
    return sortColor(obj.colors).join('').toLowerCase()
  },
  parseBg (obj) {
    if (obj.colors.length === 0)
      return 'a'
    if (obj.colors.length > 1)
      return 'm'
    return obj.colors[0].toLowerCase()
  },
  parseLegendary (obj) {
    return !!obj.type_line.match(/legendary/i)
  }
}
