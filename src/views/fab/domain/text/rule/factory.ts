import { Text, TextStyle, TextMetrics, Texture, Sprite } from 'pixi.js'
import type { FlattenItem, SymbolPart, TextPart } from './flatten'
import type { BuildContext } from './types'

const modules = import.meta.glob('../../assets/*.png', { eager: true })

interface BuildResult {
  part: Sprite | Text
  width: number
  oversize?: TextPart
}

export function buildSymbol(
  symbol: SymbolPart,
  x: number,
  context: BuildContext
): BuildResult {
  const texture = Texture.from(
    (modules[`../../assets/${symbol.key}.png`] as any).default
  )
  const sprite = new Sprite(texture)
  const SIZE = 30
  sprite.y = (context.lineHeight - SIZE + 2) / 2
  sprite.width = SIZE
  sprite.height = SIZE

  const GAP = 5
  const partWidth = GAP + sprite.width + GAP
  sprite.x = x + GAP
  return { part: sprite, width: partWidth }
}

export function buildText(
  text: TextPart,
  x: number,
  context: BuildContext
): BuildResult {
  const fontSize = text.book ? 30 : 32

  const fontStyle = new TextStyle({
    fontFamily: text.book ? 'Magic华文楷体' : '方正等细线_GBK_FIX',
    fontStyle: text.italic ? 'italic' : 'normal',
    fontSize,
    fill: 0x000,
    stroke: 0x000,
    lineJoin: 'round',
    fontWeight: 'lighter',
    letterSpacing: 2,
    strokeThickness: text.strong ? 2 : 1,
  })

  function checkIsOversize(
    content: string,
    realWidth: number,
    maxWidth: number
  ): boolean {
    // console.log(content, realWidth, maxWidth)
    if (
      realWidth < maxWidth ||
      Math.abs(realWidth - maxWidth) <= 0.2 * fontSize
    ) {
      // 允许一定空隙
      return false
    } else if (
      /[，。」]$/.test(content) &&
      realWidth - maxWidth < fontSize / 2
    ) {
      // 标点结尾允许超出半个字符长度
      return false
    }
    return true
  }

  let index = text.content.length - 1
  let width = 0
  do {
    const checkContent = text.content.slice(0, index + 1)
    const measure = TextMetrics.measureText(checkContent, fontStyle)
    if (!checkIsOversize(checkContent, x + measure.width, context.maxWidth)) {
      width = measure.width
      break
    } else {
      index--
    }
  } while (index > 0)

  const part = new Text(text.content.slice(0, index + 1), fontStyle)
  part.x = x
  return {
    part,
    width,
    oversize:
      index === text.content.length - 1
        ? undefined
        : {
            ...text,
            content: text.content.slice(index + 1),
          },
  }
}

export function buildFactory(
  content: FlattenItem,
  x: number,
  context: BuildContext
): BuildResult {
  if (content.type === 'symbol') {
    return buildSymbol(content, x, context)
  } else if (content.type === 'text') {
    return buildText(content, x, context)
  }
  throw new Error(`unknown type: ${content.type}`)
}
