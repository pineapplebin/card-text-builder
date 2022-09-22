import * as peg from 'peggy'
import GRAMMAR from './grammar.peggy?raw'

const parser = peg.generate(GRAMMAR)

export interface TSymbol {
  type: 'symbol'
  text: string
}

export interface TModifier {
  type: 'modifier'
  text: string
  italic?: boolean
}

export interface TPureNumber {
  type: 'number'
  text: string
  italic?: boolean
}

export interface TItalic {
  type: 'italic'
  body: (TSymbol | TModifier | TPureNumber | string)[]
}

export interface TText {
  type: 'text'
  text: string
  italic: boolean
  fontFamily: boolean
}

type ParseResult = (TItalic | TPureNumber | TSymbol | TModifier | string)[]

export type TransformResult = (TPureNumber | TSymbol | TModifier | TText)[]

export interface ParseSettings {
  debug?: boolean
}

export function parseLineContent(line: string, settings: ParseSettings = {}) {
  const result: ParseResult = parser.parse(line)
  settings.debug && console.log('[DEBUG] parse line result', result)

  // 合并、展平结果
  const transform: TransformResult = []

  let index = 0
  while (index < result.length) {
    const current = result[index]

    // 斜体语法 嵌套展平
    if (typeof current === 'object' && current.type === 'italic') {
      // 只有一层
      // 重复合并的逻辑
      let innerIndex = 0
      while (innerIndex < current.body.length) {
        const inner = current.body[innerIndex]
        if (typeof inner === 'object') {
          // 纯文本的特殊类型标记上斜体
          if (inner.type === 'modifier' || inner.type === 'number') {
            transform.push({ ...inner, italic: true })
          } else {
            transform.push(inner)
          }
          innerIndex++
          continue
        }
        const { text, endIndex } = mergeText(current.body, innerIndex, {
          italic: true,
        })
        transform.push(text)
        innerIndex = endIndex
      }
      index++
      continue
    }

    // 其他类型直接转移
    if (typeof current === 'object') {
      transform.push(current)
      index++
      continue
    }

    // 字符合并
    const { text, endIndex } = mergeText(result, index)
    transform.push(text)
    index = endIndex
  }

  return transform
}

function mergeText<T>(
  list: T[],
  startIndex: number,
  override: Partial<TText> = {}
) {
  // 字符合并
  let endIndex = startIndex + 1
  while (endIndex < list.length) {
    if (typeof list[endIndex] !== 'string') {
      break
    }
    endIndex++
  }
  const text: TText = {
    type: 'text',
    text: list.slice(startIndex, endIndex).join(''),
    italic: false,
    fontFamily: false,
    ...override,
  }

  return {
    endIndex,
    text,
  }
}
