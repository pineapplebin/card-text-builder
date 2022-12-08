import type { RawTextBlock } from '@/classes/BaseDomain/types'

export const PRESET_BLOCK: Partial<RawTextBlock>[] = [
  // 名字
  {
    x: 0,
    y: 120,
    width: 1500,
    height: 114,
    displayType: 'name',
    align: 'center',
  },
  // 类型
  {
    x: 0,
    y: 1880,
    width: 1500,
    height: 114,
    displayType: 'type',
    align: 'center',
  },
  // 效果
  {
    x: 172,
    y: 1330,
    width: 1155,
    height: 510,
    displayType: 'rule',
  },
  // 左数值
  {
    x: 234,
    y: 1910,
    width: 104,
    height: 104,
    displayType: 'number',
    align: 'center',
  },
  // 右数值
  {
    x: 1164,
    y: 1910,
    width: 104,
    height: 104,
    displayType: 'number',
    align: 'center',
  },
]
