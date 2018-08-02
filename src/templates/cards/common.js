import {TextField, CheckBoxField, SelectField} from '../../utils/form-engine/fields'
import {getBorderOptions} from '../../utils/plugins/borders'
import {getBgOptions} from '../../utils/plugins/images'

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
