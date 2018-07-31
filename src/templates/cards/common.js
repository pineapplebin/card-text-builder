import {TextField, CheckBoxField, SelectField} from '../../utils/form-engine/fields'

export {getBorderOptions} from '../../utils/plugins/borders'
export {getBgOptions} from '../../utils/plugins/images'

export const common_conf = {
  name: TextField({ label: '名字' }),
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
