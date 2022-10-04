import type {
  TFlavorLine,
  TSymbol,
  TText,
  TPureNumber,
  TModifier,
} from './parser'

export interface SymbolMeta {
  raw: TSymbol
  icon: string
  posX: number
  size: string
}

export interface TextMeta {
  raw: TText | TPureNumber | TModifier
  posX: number
  text: string
  fontFamily: string
  fontSize: number
  italic: boolean
}

export interface FlavorMeta {
  raw: TFlavorLine
  type: 'flavor'
}

export interface LineMeta {
  posY: number
  baseFontSize: number
  content: (SymbolMeta | TextMeta | FlavorMeta)[]
}
