import type { Position } from './types'

export const RESOLUTION = 2

export function resize(num: number) {
  return +(num / RESOLUTION).toPrecision(12)
}

export function resizePos(pos: Position): Position {
  const temp = { ...pos }
  ;(['x', 'y', 'width', 'height'] as const).forEach((key) => {
    temp[key] = resize(temp[key])
  })
  return temp
}
