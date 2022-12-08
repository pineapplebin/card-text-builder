import { BaseDomain, resize, type RawTextBlock } from '@/classes/BaseDomain'
import { Texture, Sprite, type Container, type DisplayObject } from 'pixi.js'
import { buildTextContent } from './text'

const modules = import.meta.glob('./assets/*.png', { eager: true })

export class FABDomain extends BaseDomain {
  footerIcons: Sprite[] = []
  footerLeftIcon: string = 'none'
  footerRightIcon: string = 'none'

  protected buildTextContent(
    container: Container<DisplayObject>,
    info: RawTextBlock
  ): void {
    buildTextContent(container, info)
  }

  public initFooterIcon() {
    const target = [this.footerLeftIcon, this.footerRightIcon]

    target.forEach((key, index) => {
      const texture = Texture.from(
        (modules[`./assets/${key}.png`] as any).default
      )
      const sprite = new Sprite(texture)
      sprite.width = resize(138)
      sprite.height = resize(138)
      sprite.x = resize(index === 0 ? 94 : 1270)
      sprite.y = resize(1864)
      sprite.zIndex = 0

      if (!this.footerIcons[index]) {
        this.footerIcons[index] = sprite
      }

      this.pixiApp?.stage.addChild(sprite)
    })
  }

  public updateFooterIcon(dir: string, key: string) {
    const texture = Texture.from(
      (modules[`./assets/${key}.png`] as any).default
    )
    const sprite = this.footerIcons[dir === 'left' ? 0 : 1]
    sprite.texture = texture

    if (dir === 'left') {
      this.footerLeftIcon = key
    } else {
      this.footerRightIcon = key
    }
  }
}
