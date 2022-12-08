import { Container } from 'pixi.js'
import { resize, type RawTextBlock } from '@/classes/BaseDomain'
import { parseRuleText } from './parser'
import { getEmptyLineHeight, getLineHeight } from './scale'
import { flattenParseResult, type FlattenLine } from './flatten'
import { buildFactory } from './factory'
import type { BuildContext } from './types'
import { fixed } from '@/tools'

export function buildRuleText(container: Container, info: RawTextBlock) {
  const parsed = parseRuleText(info.content)
  const flatten = flattenParseResult(parsed)
  // console.log(parsed, flatten)

  const context: BuildContext = {
    posY: 0,
    lineHeight: getLineHeight(info.scale),
    maxWidth: resize(info.width),
    maxHeight: resize(info.height),
  }
  // 必备数据
  const queue = [...flatten]
  const result: Container[] = []

  function iterate(line: FlattenLine) {
    if (!line.length) {
      return
    }
    const lineContainer = new Container()
    lineContainer.x = 0
    lineContainer.y = context.posY
    result.push(lineContainer)

    const currentLine = [...line]
    let x = 0
    do {
      const partConfig = currentLine.shift()!
      // 插入元素
      const { part, width, oversize } = buildFactory(partConfig, x, context)
      lineContainer.addChild(part)
      x += width
      // 换行
      if (oversize) {
        queue.unshift([oversize, ...currentLine])
        return
      }
    } while (currentLine.length)
  }

  do {
    const line = queue.shift()
    if (Array.isArray(line)) {
      iterate(line)
      context.posY += context.lineHeight
    } else {
      // 空行增加行高
      context.posY += getEmptyLineHeight(info.scale)
    }
  } while (queue.length)

  // 最后插入
  if (result.length) {
    // 垂直居中
    const endPoxY = context.posY
    if (context.maxHeight - endPoxY > 10) {
      const deltaPoxY = fixed((context.maxHeight - endPoxY) / 2)
      result.forEach((container) => {
        container.y += deltaPoxY
      })
    }
    container.addChild(...result)
  }
}
