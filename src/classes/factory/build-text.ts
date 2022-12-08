import { Text, TextStyle, TextMetrics, type ITextStyle } from 'pixi.js'

export interface BuildTextOptions {
  maxWidth?: number
  align?: 'left' | 'center' | 'right'
}

export function buildSingleLineText(
  content: string,
  textStyle: Partial<ITextStyle>,
  options?: BuildTextOptions
) {
  const fontStyle = new TextStyle({
    fill: 0x000,
    ...textStyle,
  })
  const text = new Text(content, fontStyle)
  text.x = 0
  text.y = 0

  // 处理超宽
  if (options?.maxWidth) {
    const maxWidth = options.maxWidth
    const measure = TextMetrics.measureText(content, fontStyle)
    if (measure.width > maxWidth) {
      text.scale.x = maxWidth / measure.width
    }
  }

  // 处理 align
  if (options?.maxWidth && options?.align) {
    const maxWidth = options.maxWidth
    if (options.align === 'center') {
      text.anchor.set(0.5, 0)
      text.x = +(maxWidth / 2).toPrecision(10)
    }
  }

  return text
}
