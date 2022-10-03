import { Container, Sprite, Texture } from 'pixi.js'

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
