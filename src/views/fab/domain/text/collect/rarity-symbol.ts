import { buildSingleLineText } from '@/classes/factory/build-text'
import { Container, DisplayObject, Graphics } from 'pixi.js'

const BACKGROUND_COLOR: Record<string, number> = {
  c: 0xaaaaaa,
  r: 0x008ace,
  m: 0xc50709,
  l: 0xe69c46,
}

const RADIUS = 8

export function buildRaritySymbol(rarity: string): {
  object: DisplayObject
  width: number
} {
  const rarityContainer = new Container()

  // 背景
  const background = new Graphics()
  background.x = RADIUS
  background.y = RADIUS + 2
  background.beginFill(BACKGROUND_COLOR[rarity] || BACKGROUND_COLOR.c)
  background.drawCircle(0, 0, RADIUS)
  background.endFill()

  rarityContainer.addChild(background)

  // 字体
  const text = buildSingleLineText(rarity.toUpperCase(), {
    fontFamily: 'Fira Sans',
    fontSize: 14,
    fill: 0xffffff,
  })
  text.y = 1
  if (text.width < RADIUS * 2) {
    text.x += (RADIUS * 2 - text.width) / 2
  }
  rarityContainer.addChild(text)

  return { object: rarityContainer, width: 2.5 * RADIUS }
}
