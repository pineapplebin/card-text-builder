import { TextMetrics, Text, TextStyle, Container } from 'pixi.js'
import type { RawTextBlock } from '../types'
import { resize } from '../utils'
import { fixed, tail } from '@/tools'
import { parseLineContent } from './parser'
import { isNumberType } from './utils'
import { getSymbolSprite, getFlavorSprite, getTextSprite } from './factory'
import type { LineMeta, TextMeta, SymbolMeta } from './types'
import {
  getBookFontSize,
  getNumberFontSize,
  getNumberOffsetX,
  getNumberOffsetY,
  getSymbolOffsetY,
  getTextFontSize,
} from './font-size'

export const buildTextContent = (container: Container, info: RawTextBlock) => {
  if (info.displayType === 'rules') {
    buildRulesText(container, info)
  } else {
    buildTitleText(container, info)
  }
}

const buildTitleText = (container: Container, info: RawTextBlock) => {
  const maxWidth = resize(info.width)

  let config: { fontSize: number; letterSpacing: number; fontFamily: string }
  switch (info.displayType) {
    case 'title': {
      config = { fontSize: 44, letterSpacing: 2, fontFamily: '华康魏碑 Std W7' }
      break
    }
    case 'type': {
      config = { fontSize: 42, letterSpacing: 0, fontFamily: '华康魏碑 Std W7' }
      break
    }
    case 'flip-type': {
      config = { fontSize: 30, letterSpacing: 0, fontFamily: '华康魏碑 Std W7' }
      break
    }
    case '8th-title': {
      config = { fontSize: 40, letterSpacing: 1, fontFamily: '方正大标宋_GBK' }
      break
    }
    default: {
      config = { fontSize: 10, letterSpacing: 0, fontFamily: '华康魏碑 Std W7' }
      break
    }
  }

  const fontStyle = new TextStyle({
    fontFamily: config.fontFamily,
    fontSize: config.fontSize,
    letterSpacing: config.letterSpacing,
    fill: info.color || 0x000,
  })

  const text = new Text(info.content, fontStyle)
  text.x = 0
  text.y = 0
  const measure = TextMetrics.measureText(info.content, fontStyle)
  if (measure.width > maxWidth) {
    text.scale.x = maxWidth / measure.width
  }

  container.addChild(text)
}

const buildRulesText = (container: Container, info: RawTextBlock) => {
  const maxWidth = resize(info.width)
  const maxHeight = resize(info.height)
  // 断行，每行单独处理
  const lines = info.content.split('\n')
  // 解析元数据
  const lineMeta: LineMeta[] = []

  let startPoxY = 0
  for (const line of lines) {
    // 空行 增加下一行间距
    if (!line) {
      startPoxY += 10
      continue
    }

    // 解析行内容
    const result = parseLineContent(line, { debug: false })
    console.log('[DEBUG] parse result', result)

    const meta: LineMeta = {
      posY: startPoxY,
      baseFontSize: getTextFontSize(info.scale),
      content: [],
    }

    let index = 0
    for (const part of result) {
      const previous = result[index - 1]
      let xOffset =
        isNumberType(part) || (previous && isNumberType(previous))
          ? getNumberOffsetX(info.scale)
          : 0

      if (index === 0) {
        xOffset = 0
      }
      if ('text' in part && part.text[0] === '（') {
        xOffset = 0
      }
      if ((previous && previous.type === 'symbol') || part.type === 'symbol') {
        xOffset = 5
      }

      if (part.type === 'text') {
        const sub = {
          posX: xOffset,
          raw: part,
          text: part.text,
          fontFamily: '方正等细线_GBK_FIX',
          fontSize: meta.baseFontSize,
          italic: !!part.italic,
        } as TextMeta
        if (part.bookFont) {
          sub.fontFamily = 'Magic华文楷体'
          sub.fontSize = getBookFontSize(info.scale)
        }
        meta.content.push(sub)
      } else if (isNumberType(part)) {
        meta.content.push({
          posX: xOffset,
          raw: part,
          text: part.text,
          fontFamily: '方正等细线_GBK_FIX',
          fontSize: getNumberFontSize(info.scale),
          italic: !!part.italic,
        } as TextMeta)
      } else if (part.type === 'symbol') {
        meta.content.push({
          posX: xOffset,
          raw: part,
          icon: part.text,
          size: info.scale,
        } as SymbolMeta)
      } else if (part.type === 'flavor') {
        meta.content.push({ raw: part, type: 'flavor' })
        meta.posY += meta.baseFontSize * 0.6
        startPoxY += meta.baseFontSize
        meta.baseFontSize = 2
      }

      index++
    }

    lineMeta.push(meta)
    startPoxY += Math.round(meta.baseFontSize * 1.05)
  }

  // 上下居中字符
  const endPoxY = tail(lineMeta).posY + tail(lineMeta).baseFontSize
  if (maxHeight - endPoxY > 10) {
    const deltaPoxY = fixed((maxHeight - endPoxY) / 2)
    lineMeta.forEach((meta) => {
      meta.posY += deltaPoxY
    })
  }

  // 插入字符
  for (const meta of lineMeta) {
    const sub = new Container()
    // sub.width = maxWidth
    // sub.height = meta.baseFontSize
    sub.x = 0
    sub.y = meta.posY

    let posXOffset = 0
    for (const part of meta.content) {
      const rawType = part.raw.type
      if (
        rawType === 'text' ||
        rawType === 'number' ||
        rawType === 'modifier'
      ) {
        // type=各种文本
        const _p = part as TextMeta
        const [text, measureWidth] = getTextSprite(_p, info)
        text.x = posXOffset + _p.posX
        text.y = rawType === 'text' ? 0 : getNumberOffsetY(info.scale)
        sub.addChild(text)
        // 测量宽度
        posXOffset += measureWidth + _p.posX
      } else if (rawType === 'symbol') {
        // type=symbol
        const _p = part as SymbolMeta
        const sprite = getSymbolSprite(_p.icon, _p)
        sprite.x = posXOffset + _p.posX
        sprite.y = getSymbolOffsetY(_p.icon, _p.size)
        sub.addChild(sprite)
        posXOffset += sprite.width + _p.posX
      } else if (rawType === 'flavor') {
        // type=flavor
        const sprite = getFlavorSprite(maxWidth)
        sprite.x = 0
        sprite.y = 0
        sub.addChild(sprite)
        posXOffset += maxWidth
      }
    }

    // 缩放调整边缘
    if (sub.width > maxWidth || maxWidth - sub.width < 15) {
      // sub.width = maxWidth
      sub.scale.set(maxWidth / posXOffset, 1)
    }

    container.addChild(sub)
  }
}
