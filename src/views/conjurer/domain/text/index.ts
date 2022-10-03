import { TextMetrics, Text, TextStyle, Container } from 'pixi.js'
import type { RawTextBlock } from '../types'
import { resize } from '../utils'
import { fixed, tail } from '@/tools'
import {
  parseLineContent,
  type TModifier,
  type TPureNumber,
  type TSymbol,
  type TText,
} from './parser'
import { isNumberType } from './utils'

export const buildTextContent = (container: Container, info: RawTextBlock) => {
  if (info.displayType === 'title' || info.displayType === 'type') {
    buildTitleText(container, info)
  } else if (info.displayType === 'rules') {
    buildRulesText(container, info)
  }
}

const buildTitleText = (container: Container, info: RawTextBlock) => {
  const maxWidth = resize(info.width)
  const isTitle = info.displayType === 'title'

  const fontStyle = new TextStyle({
    fontFamily: '华康魏碑 Std W7',
    fontSize: isTitle ? 44 : 42,
    fill: info.color || 0x000,
    letterSpacing: isTitle ? 2 : 0,
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

interface SymbolMeta {
  raw: TSymbol
  icon: string
  posX: string
  size: string
}

interface TextMeta {
  raw: TText | TPureNumber | TModifier
  posX: number
  text: string
  fontFamily: string
  fontSize: number
  italic: boolean
}

interface LineMeta {
  posY: number
  baseFontSize: number
  content: (SymbolMeta | TextMeta)[]
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
      baseFontSize: 35,
      content: [],
    }

    let index = 0
    for (const part of result) {
      const previous = result[index - 1]
      const numberOffset =
        isNumberType(part) || (previous && isNumberType(previous)) ? 10 : 0
      const defaultOffset = index === 0 ? 0 : numberOffset

      if (part.type === 'text') {
        meta.content.push({
          posX: defaultOffset,
          raw: part,
          text: part.text,
          fontFamily: '方正等细线_GBK_FIX',
          fontSize: 35,
          italic: !!part.italic,
        })
      } else if (isNumberType(part)) {
        meta.content.push({
          posX: defaultOffset,
          raw: part,
          text: part.text,
          fontFamily: '方正等细线_GBK_FIX',
          fontSize: 28,
          italic: !!part.italic,
        })
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
    sub.width = maxWidth
    sub.height = meta.baseFontSize
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
        const _p = part as TextMeta
        const fontStyle = new TextStyle({
          fontFamily: _p.fontFamily,
          fontSize: _p.fontSize,
          fontStyle: _p.italic ? 'italic' : 'normal',
          fill: info.color || 0x000,
          strokeThickness: 0.6,
          lineJoin: 'round',
          fontWeight: 'lighter',
          letterSpacing: rawType === 'text' ? 2.2 : 1,
        })
        const text = new Text(_p.text, fontStyle)
        text.x = posXOffset + _p.posX
        text.y = rawType === 'text' ? 0 : 6
        sub.addChild(text)

        // 测量宽度
        const measure = TextMetrics.measureText(_p.text, fontStyle)
        posXOffset += measure.width + _p.posX
      } else {
        // TODO: type=symbol
      }
    }

    // 缩放调整边缘
    if (posXOffset > maxWidth || maxWidth - posXOffset < 10) {
      sub.scale.x = maxWidth / posXOffset
    }

    container.addChild(sub)
  }

  // for (const meta of lineMeta) {
  //   const fontStyle = new TextStyle({
  //     fontFamily: meta.fontFamily,
  //     fontSize: meta.fontSize,
  //     fill: info.color || 0x000,
  //     strokeThickness: 0.6,
  //     lineJoin: 'round',
  //     fontWeight: 'lighter',
  //     letterSpacing: 2.2,
  //   })
  //   const text = new Text(meta.text, fontStyle)
  //   text.x = meta.posX
  //   text.y = meta.posY
  //   const measure = TextMetrics.measureText(info.content, fontStyle)
  //   // FIXME: 一行多个字体时处理
  //   if (measure.width > maxWidth) {
  //     text.scale.x = maxWidth / measure.width
  //   }
  //   container.addChild(text)
  // }
}
