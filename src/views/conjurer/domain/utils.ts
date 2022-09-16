export const RESOLUTION = 2

export function resize(num: number) {
  return +(num / RESOLUTION).toPrecision(10)
}
