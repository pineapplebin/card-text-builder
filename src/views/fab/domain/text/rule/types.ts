export type RawContent = (RawSymbol | RawChars | RawStrong | RawItalic)[]

export type RawChars = string

export interface RawSymbol {
  type: 'symbol'
  key: string
}

export interface RawFlavor {
  type: 'flavor'
}

export interface RawStrong {
  type: 'strong'
  content: RawContent
}

export interface RawItalic {
  type: 'italic'
  content: RawContent
}

export interface RawBook {
  type: 'book'
  content: RawContent
}

export type ParseResultItem =
  | RawBook
  | RawFlavor
  | RawSymbol
  | RawStrong
  | RawItalic
  | RawChars

export type ParseResult = ParseResultItem[]

export interface BuildContext {
  posY: number
  lineHeight: number
  maxWidth: number
  maxHeight: number
}
