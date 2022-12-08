import * as peg from 'peggy'
import GRAMMAR from './grammar.peggy?raw'
import type { ParseResult } from './types'

const parser = peg.generate(GRAMMAR)

export function parseRuleText(content: string) {
  const parsed = content.split('\n').map((line) => {
    // 空行
    if (!line) {
      return null
    }
    const result: ParseResult = parser.parse(line)
    return result
  })

  console.log(parsed)
  return parsed
}
