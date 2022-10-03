import { Texture, Sprite } from 'pixi.js'

const modules = import.meta.glob('../assets/*.svg', { eager: true, as: 'raw' })

export function getSymbolSprite(key: string, data: { size: string }) {
  const texture = Texture.from(modules[`../assets/${key}.svg`])
  const sprite = new Sprite(texture)
  sprite.width = 28
  sprite.height = 28
  return sprite
}
