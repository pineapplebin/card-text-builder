import { Sprite, Texture, TextStyle, Text, TextMetrics } from 'pixi.js'
import type { RawTextBlock } from '../types'
import type { FONT_SCALE } from './font-size'
import type { TextMeta } from './types'

const modules = import.meta.glob('../assets/*.svg', { eager: true, as: 'raw' })

function createGradient(width: number) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = 2
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return
  }
  const grd = ctx.createLinearGradient(0, 0, width, 0)
  grd.addColorStop(0, 'transparent')
  grd.addColorStop(0.3, '#ccc')
  grd.addColorStop(0.7, '#ccc')
  grd.addColorStop(1, 'transparent')

  ctx.fillStyle = grd
  ctx.fillRect(0, 0, width, 2)
  return Texture.from(canvas)
}

export function getFlavorSprite(width: number) {
  const sprite = new Sprite(createGradient(width))
  return sprite
}

export function getSymbolSprite(key: string, data: { size: FONT_SCALE }) {
  const texture = Texture.from(modules[`../assets/${key}.svg`])
  const sprite = new Sprite(texture)
  sprite.width = 28
  sprite.height = 28
  return sprite
}

export function getTextSprite(meta: TextMeta, info: RawTextBlock) {
  const _p = meta
  const rawType = meta.raw.type

  const letterSpacing = (() => {
    if (rawType === 'text') {
      if ('bookFont' in _p.raw && _p.raw.bookFont) {
        return 3
      }
      return 2.2
    }
    return 1
  })()

  const fontStyle = new TextStyle({
    fontFamily: _p.fontFamily,
    fontSize: _p.fontSize,
    fontStyle: _p.italic ? 'italic' : 'normal',
    fill: info.color || 0x000,
    strokeThickness: 'bookFont' in _p.raw && _p.raw.bookFont ? 0 : 1,
    lineJoin: 'round',
    fontWeight: 'lighter',
    letterSpacing,
  })

  const text = new Text(_p.text, fontStyle)
  const measure = TextMetrics.measureText(_p.text, fontStyle)

  return [text, measure.width] as const
}
