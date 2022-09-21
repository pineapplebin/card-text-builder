import type { Position, RawTextBlock } from './types'

export function getPrefixPosition(
  index: number
): Position & Pick<RawTextBlock, 'displayType'> {
  if (index === 0) {
    // 名字
    return {
      x: 128,
      y: 110,
      width: 1244,
      height: 114,
      displayType: 'title',
    }
  } else if (index === 1) {
    // 类型
    return {
      x: 128,
      y: 1189,
      width: 1244,
      height: 114,
      displayType: 'type',
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
