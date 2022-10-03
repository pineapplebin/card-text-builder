import { Texture, Sprite } from 'pixi.js'

import IMG_1 from '../assets/1.svg'
import IMG_W from '../assets/w.svg'

export const SYMBOL_MAP: Record<string, string> = {
  '1': IMG_1,
  w: IMG_W,
}

export function getSymbolSprite(key: string, data: { size: string }) {
  const texture = Texture.from(SYMBOL_MAP[key])
  const sprite = new Sprite(texture)
  sprite.width =28
  sprite.height = 26
  return sprite
}
