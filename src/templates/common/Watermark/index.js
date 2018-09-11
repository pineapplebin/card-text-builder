import wmW from '../../../assets/images/watermark/watermark_w.png'
import wmU from '../../../assets/images/watermark/watermark_u.png'
import wmB from '../../../assets/images/watermark/watermark_b.png'
import wmR from '../../../assets/images/watermark/watermark_r.png'
import wmG from '../../../assets/images/watermark/watermark_g.png'
import symDOM from '../../../assets/images/watermark/symbol_dom.png'

import wmStory from '../../../assets/images/watermark/story_spotlight.vue'
import ravnicaIzzet2 from '../../../assets/images/watermark/ravnica_izzet_2.vue'
import ravnicaDimir2 from '../../../assets/images/watermark/ravnica_dimir_2.vue'
import ravnicaBoros2 from '../../../assets/images/watermark/ravnica_boros_2.vue'

const bitmap = [
  { label: '法术力白', content: wmW },
  { label: '法术力蓝', content: wmU },
  { label: '法术力黑', content: wmB },
  { label: '法术力红', content: wmR },
  { label: '法术力绿', content: wmG },
  { label: 'P-DOM', content: symDOM },
].map(item => ({ ...item, type: 'bitmap' }))

const svg = [
  { label: '故事焦点', content: wmStory },
  { label: '伊捷2', content: ravnicaIzzet2 },
  { label: '底密尔2', content: ravnicaDimir2 },
  { label: '波洛斯2', content: ravnicaBoros2 },
].map(item => ({ ...item, type: 'svg' }))

export default function () {
  return [...bitmap, ...svg].map((item, idx) => ({
    ...item,
    value: '' + idx,
  }))
}
