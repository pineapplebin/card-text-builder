import { BaseDomain } from '@/classes/BaseDomain'
import type { RawTextBlock } from '@/classes/BaseDomain/types'
import type { Container, DisplayObject } from 'pixi.js'
import { buildTextContent } from './text'

export class ConjurerDomain extends BaseDomain {
  protected buildTextContent(
    container: Container<DisplayObject>,
    info: RawTextBlock
  ): void {
    buildTextContent(container, info)
  }
}
