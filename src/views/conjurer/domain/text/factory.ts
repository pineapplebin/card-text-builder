import { Sprite, Texture, TextStyle, Text, TextMetrics } from 'pixi.js'
import type { RawTextBlock } from '@/classes/BaseDomain'
import { FONT_SCALE, getSymbolIconSize } from './font-size'
import type { TextMeta } from './types'

import IMG_BAR from '../assets/bar.png'
const modules = import.meta.glob('../assets/*.svg', { eager: true, as: 'raw' })

export function getFlavorSprite(width: number) {
  const texture = Texture.from(IMG_BAR)
  const sprite = new Sprite(texture)
  sprite.width = width
  sprite.height = 2
  return sprite
}

export function getSymbolSprite(key: string, data: { size: FONT_SCALE }) {
  const texture = Texture.from(modules[`../assets/${key}.svg`])
  const sprite = new Sprite(texture)
  const size = getSymbolIconSize(key, data.size)
  sprite.width = size
  sprite.height = size
  return sprite
}

const checkIsBookFont = (r: Record<string, any>) =>
  'bookFont' in r && !!r.bookFont

export function getTextSprite(meta: TextMeta, info: RawTextBlock) {
  const _p = meta
  const rawType = meta.raw.type
  const isBookFont = checkIsBookFont(_p.raw)

  const letterSpacing = (() => {
    let rst = 1
    if (rawType !== 'text') {
      return rst
    }
    switch (info.scale) {
      case FONT_SCALE.Small: {
        if (isBookFont) {
          rst = 1.7
        }
        rst = 1.7
      }
      case FONT_SCALE.Middle:
      case FONT_SCALE.MiddleS: {
        if (isBookFont) {
          rst = 2.4
        }
        rst = 2
        break
      }
      default: {
        if (checkIsBookFont(_p.raw)) {
          rst = 3
        }
        rst = 2.2
        break
      }
    }
    return rst
  })()

  const strokeThickness: number = (() => {
    if (_p.fontFamily === 'Magic华文楷体') {
      return 0
    }
    return 1
  })()

  const fontStyle = new TextStyle({
    fontFamily: _p.fontFamily,
    fontSize: _p.fontSize,
    fontStyle: _p.italic ? 'italic' : 'normal',
    fill: info.color || 0x000,
    stroke: info.color || 0x000,
    lineJoin: 'round',
    fontWeight: 'lighter',
    strokeThickness,
    letterSpacing,
  })

  const text = new Text(_p.text, fontStyle)
  const measure = TextMetrics.measureText(_p.text, fontStyle)

  return [text, measure.width] as const
}
