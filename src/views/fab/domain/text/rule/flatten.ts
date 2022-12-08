import type { ParseResult, ParseResultItem } from './types'

export interface TextPart {
  type: 'text'
  content: string
  strong?: boolean
  italic?: boolean
  book?: boolean
}

export interface SymbolPart {
  type: 'symbol'
  key: string
}

export interface FlavorPart {
  type: 'flavor'
}

export type FlattenItem = TextPart | SymbolPart | FlavorPart

export type FlattenLine = FlattenItem[]

export function flattenParseResult(
  lines: (ParseResult | null)[]
): (FlattenLine | null)[] {
  return lines.map((line) => {
    if (!line) {
      return line
    }

    const result: FlattenLine = []
    function recursive(item: ParseResultItem, context: Partial<TextPart>) {
      if (typeof item === 'string') {
        result.push({ type: 'text', content: item, ...context })
      } else if (item.type === 'symbol') {
        result.push({ type: 'symbol', key: item.key })
      } else if (item.type === 'flavor') {
        result.push({ type: 'flavor' })
      } else {
        // strong, italic, book
        const passContext = { ...context }
        passContext[item.type] = true
        item.content.forEach((sub) => recursive(sub, passContext))
      }
    }

    line.forEach((item) => recursive(item, {}))
    return result
  })
}
