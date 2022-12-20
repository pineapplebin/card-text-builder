import { BaseDomain, resize, type RawTextBlock } from '@/classes/BaseDomain'
import {
  Texture,
  Sprite,
  Graphics,
  Container,
  type DisplayObject,
} from 'pixi.js'
import { buildTextContent } from './text'

const modules = import.meta.glob('./assets/*.png', { eager: true })

export class FABDomain extends BaseDomain {
  footerIcons: Sprite[] = []
  footerLeftIcon: string = 'none'
  footerRightIcon: string = 'none'

  pitchValue = '0'
  pitchIconContainer: Container | null = null
  pitchColorBar: Graphics | null = null

  public destroy() {
    this.footerIcons.forEach((s) => s.destroy())
    this.footerIcons = []
    this.pitchIconContainer?.destroy()
    this.pitchColorBar?.destroy()
    super.destroy()
  }

  protected buildTextContent(
    container: Container<DisplayObject>,
    info: RawTextBlock
  ): void {
    buildTextContent(container, info)
  }

  public triggerInitBuildText() {
    this.rawTextList.forEach((raw) => {
      const { container, info } = this.findTextBlockById(raw.id)
      this.reBuildTextContent(container, info)
    })
  }

  public initExtraPart() {
    this.initFooterIcon()
    this.initPitchValue()
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
      sprite.x = resize(index === 0 ? 93 : 1268)
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

  public initPitchValue() {
    this.pitchIconContainer = new Container()
    this.pitchIconContainer.zIndex = 11
    this.pitchIconContainer.x = 0
    this.pitchIconContainer.y = 0

    this.pitchColorBar = new Graphics()
    this.pitchColorBar.x = resize(217)
    this.pitchColorBar.y = resize(79)
    this.pitchColorBar.zIndex = 0

    this.pixiApp?.stage.addChild(this.pitchIconContainer)
    this.pixiApp?.stage.addChild(this.pitchColorBar)

    this.updatePitchValue(this.pitchValue)
  }

  public updatePitchValue(value: string) {
    const intValue = +value || 0
    const colorMap: Record<string, number> = {
      '1': 0xbf0008,
      '2': 0xffee00,
      '3': 0x009ee6,
    }

    this.pitchColorBar?.clear()
    if (value in colorMap) {
      this.pitchColorBar?.beginFill(colorMap[value])
      this.pitchColorBar?.drawRect(0, 0, resize(1064), resize(46))
      this.pitchColorBar?.endFill()
    }

    this.pitchIconContainer?.removeChildren()
    const posList = [
      [156, 116],
      [118, 181],
      [192, 181],
    ]
    for (let i = 1; i <= intValue; i++) {
      const [x, y] = posList[i - 1]
      const texture = Texture.from(
        (modules['./assets/pitch.png'] as any).default
      )
      const sprite = new Sprite(texture)
      sprite.width = resize(52)
      sprite.height = resize(52)
      sprite.x = resize(x)
      sprite.y = resize(y)

      this.pitchIconContainer?.addChild(sprite)
    }
  }
}
