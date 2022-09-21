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
  displayType: 'title' | 'type' | 'rules'
}
