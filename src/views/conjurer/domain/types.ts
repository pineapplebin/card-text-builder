import type { FONT_SCALE } from './text/font-size'

export interface DomainConstructorSettings {
  debug: boolean
  width: number
  height: number
}

export interface Position {
  x: number
  y: number
  width: number
  height: number
}

export interface RawTextBlock extends Position {
  id: number
  content: string
  color: number | string
  displayType:
    | 'title'
    | 'type'
    | 'rules'
    | 'flip-type'
    | '8th-title'
    | 'adventure'
    | '7th-title'
    | '7th-type'
  scale: FONT_SCALE
  align: 'left' | 'center' | 'right'
}
