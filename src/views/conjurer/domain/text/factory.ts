import { Sprite, Texture, TextStyle, Text, TextMetrics } from 'pixi.js'
import type { RawTextBlock } from '../types'
import { FONT_SCALE, getSymbolIconSize } from './font-size'
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
  const size = getSymbolIconSize(data.size)
  sprite.width = size
  sprite.height = size
  return sprite
}

const checkIsBookFont = (r: Record<string, any>) =>
  'bookFont' in r && !!r.bookFont

export function getTextSprite(meta: TextMeta, info: RawTextBlock) {
  const _p = meta
  const rawType = meta.raw.type

  const letterSpacing = (() => {
    let rst = 1
    switch (info.scale) {
      case FONT_SCALE.Small: {
        if (rawType === 'text') {
          if (checkIsBookFont(_p.raw)) {
            rst = 2
          }
          rst = 1.7
        }
        break
      }
      default: {
        if (rawType === 'text') {
          if (checkIsBookFont(_p.raw)) {
            rst = 3
          }
          rst = 2.2
        }
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

export function getTitleSprite(info: RawTextBlock) {}
