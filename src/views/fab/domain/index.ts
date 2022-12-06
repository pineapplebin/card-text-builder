import { BaseDomain, type RawTextBlock } from '@/classes/BaseDomain'
import type { Container, DisplayObject } from 'pixi.js'

export class FABDomain extends BaseDomain {
  protected buildTextContent(
    container: Container<DisplayObject>,
    info: RawTextBlock
  ): void {}
}
