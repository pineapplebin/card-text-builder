import { fixed } from '@/tools'

export const RESOLUTION = 2

export function resize(num: number) {
  return fixed(num / RESOLUTION)
}
