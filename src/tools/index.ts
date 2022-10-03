export function tail<T>(list: T[]): T {
  return list[list.length - 1]
}

export function fixed(expr: number, digits = 2) {
  return +(+expr.toPrecision(10)).toFixed(digits)
}
