import type { TransformResultItem, TPureNumber, TModifier } from './parser'

export const isNumberType = (
  t: TransformResultItem
): t is TPureNumber | TModifier => {
  return typeof t !== 'string' && (t.type === 'number' || t.type === 'modifier')
}
