import { TextMetrics, Text, TextStyle, type Container } from 'pixi.js'
import type { RawTextBlock } from '../types'
import { resize } from '../utils'
import { tail } from '@/tools'

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
  icon: string
  posY: string
  size: string
}

interface LineMeta {
  posX: number
  posY: number
  text: string
  symbols: SymbolMeta[]
  fontFamily: string
  fontSize: number
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

    // TODO: 解析行内容

    const meta: LineMeta = {
      posX: 0,
      posY: startPoxY,
      text: line,
      symbols: [],
      fontFamily: '方正等细线_GBK_FIX',
      fontSize: 35,
    }
    lineMeta.push(meta)
    startPoxY += Math.round(meta.fontSize * 1.05)
  }

  // 上下居中字符
  const endPoxY = tail(lineMeta).posY + tail(lineMeta).fontSize
  if (maxHeight - endPoxY > 10) {
    const deltaPoxY = (maxHeight - endPoxY) / 2
    lineMeta.forEach((meta) => {
      meta.posY += deltaPoxY
    })
  }

  // 插入字符
  for (const meta of lineMeta) {
    const fontStyle = new TextStyle({
      fontFamily: meta.fontFamily,
      fontSize: meta.fontSize,
      fill: info.color || 0x000,
      strokeThickness: 0.6,
      lineJoin: 'round',
      fontWeight: 'lighter',
      letterSpacing: 2.2,
    })
    const text = new Text(meta.text, fontStyle)
    text.x = meta.posX
    text.y = meta.posY
    const measure = TextMetrics.measureText(info.content, fontStyle)
    // FIXME: 一行多个字体时处理
    if (measure.width > maxWidth) {
      text.scale.x = 0.98
    }
    container.addChild(text)
  }
}
