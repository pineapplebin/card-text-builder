import type { Position, RawTextBlock } from '@/classes/BaseDomain/types'

export function getPrefixPosition(
  index: number
): Position & Partial<RawTextBlock> {
  if (index === 0) {
    // 名字
    return {
      x: 0,
      y: 120,
      width: 1500,
      height: 114,
      displayType: 'name',
      align: 'center',
    }
  } else if (index === 1) {
    // 类型
    return {
      x: 0,
      y: 1880,
      width: 1500,
      height: 114,
      displayType: 'type',
      align: 'center',
    }
  } else if (index === 2) {
    // 效果
    return {
      x: 129,
      y: 1324,
      width: 1242,
      height: 604,
      displayType: 'rules',
    }
  }

  // 默认情况
  return {
    x: 0,
    y: 0,
    width: 1000,
    height: 100,
    displayType: 'rules',
  }
}
