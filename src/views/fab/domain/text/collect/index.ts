import { Container, DisplayObject, type ITextStyle } from 'pixi.js'
import { resize, type RawTextBlock } from '@/classes/BaseDomain'
import { buildSingleLineText } from '@/classes/factory/build-text'
import { parseCollectText } from './parse'
import { buildRaritySymbol } from './rarity-symbol'

const GAP = 2

export function buildCollectText(container: Container, info: RawTextBlock) {
  const { rarity, series, year } = parseCollectText(info.content)

  const maxWidth = resize(info.width)
  let rarityWidth = 0
  const objects: DisplayObject[] = []

  // 绘制罕贵度图标
  if (rarity) {
    const { object, width } = buildRaritySymbol(rarity)
    objects.push(object)
    rarityWidth = width + GAP
  }

  const textContainer = new Container()
  objects.push(textContainer)
  textContainer.x = rarityWidth
  buildTextObjects(textContainer, info, series, year)
  // 压缩文本
  if (maxWidth - rarityWidth < textContainer.width) {
    textContainer.width = maxWidth - rarityWidth
  }

  // 居中
  if (maxWidth > rarityWidth + textContainer.width) {
    const delta = (maxWidth - (rarityWidth + textContainer.width)) / 2
    objects.forEach((obj) => {
      obj.x += delta
    })
  }

  if (objects.length) {
    container.addChild(...objects)
  }
}

function buildTextObjects(
  container: Container,
  info: RawTextBlock,
  series?: string,
  year?: string
) {
  const fontStyle: Partial<ITextStyle> = {
    fontFamily: 'Fira Sans',
    fontSize: 16,
    // fontWeight: 'lighter',
    letterSpacing: 0,
    fill: info.color || 0x000,
  }
  if (series) {
    const seriesText = buildSingleLineText(series, fontStyle)
    seriesText.x = 0
    container.addChild(seriesText)
  }
  if (year) {
    const copyright = buildSingleLineText('©', fontStyle)
    copyright.x = container.width + GAP
    copyright.y = 1.5
    container.addChild(copyright)
    const yearText = buildSingleLineText(
      `${year} Legendary Story Studios`,
      fontStyle
    )
    yearText.x = container.width + GAP
    container.addChild(yearText)
  }
}
