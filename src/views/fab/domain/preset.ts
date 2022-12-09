import type { RawTextBlock } from '@/classes/BaseDomain/types'

export const PRESET_BLOCK: (Partial<RawTextBlock> & { name: string })[] = [
  {
    name: '英雄名称',
    id: 100,
    x: 0,
    y: 120,
    width: 1500,
    height: 114,
    displayType: 'name',
    align: 'center',
  },
  {
    name: '行动名称',
    id: 105,
    x: 0,
    y: 134,
    width: 1500,
    height: 114,
    displayType: 'name',
    align: 'center',
  },
  {
    name: '卡牌类型',
    id: 101,
    x: 0,
    y: 1880,
    width: 1500,
    height: 114,
    displayType: 'type',
    align: 'center',
  },
  {
    name: '效果',
    id: 102,
    x: 172,
    y: 1330,
    width: 1155,
    height: 510,
    displayType: 'rule',
  },
  {
    name: '左数值',
    id: 103,
    x: 234,
    y: 1910,
    width: 104,
    height: 104,
    displayType: 'number',
    align: 'center',
  },
  {
    name: '右数值',
    id: 104,
    x: 1164,
    y: 1910,
    width: 104,
    height: 104,
    displayType: 'number',
    align: 'center',
  },
  {
    name: '费用值',
    id: 106,
    x: 1292,
    y: 142,
    width: 60,
    height: 80,
    displayType: 'number',
    align: 'center',
  },
  {
    name: '编号',
    id: 107,
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    displayType: 'collect',
    color: '#ffffff',
    align: 'center',
  },
]
