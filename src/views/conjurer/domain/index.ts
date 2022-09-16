import { Application, Container, Graphics } from 'pixi.js'
import { DEFAULT_SETTINGS } from './settings'
import type { DomainConstructorSettings, Position, RawTextBlock } from './types'
import { resize, RESOLUTION } from './utils'

export class ConjurerDomain {
  public baseImage: string = ''
  public rawTextList: RawTextBlock[] = []

  private innerId = 0

  protected file: File | null = null
  protected pixiApp: Application | null = null
  protected settings: DomainConstructorSettings = { ...DEFAULT_SETTINGS }

  constructor(settings: Partial<DomainConstructorSettings> = {}) {
    this.settings = { ...DEFAULT_SETTINGS, ...settings }
  }

  /**
   * 初始化背景底图
   */
  public initFile(file: File) {
    this.file = file
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      this.baseImage = reader.result as string
    })
    reader.readAsDataURL(this.file)
  }

  /**
   * 初始化画布
   */
  public initCanvas(canvas: HTMLCanvasElement) {
    this.pixiApp = new Application({
      view: canvas,
      width: this.settings.width,
      height: this.settings.height,
      backgroundAlpha: 0,
      antialias: true,
      resolution: RESOLUTION,
    })
  }

  /**
   * 添加新的文本框
   */
  public addRawTextBlock() {
    const raw: RawTextBlock = {
      id: ++this.innerId,
      fontFamily: '',
      content: '',
      color: 0x000,
      x: 128,
      y: 110,
      width: 1244,
      height: 114,
    }
    this.rawTextList.push(raw)
    this.settings.debug &&
      console.log('[DEBUG] new raw text block', raw, this.rawTextList.length)

    const container = new Container()

    container.x = resize(raw.x)
    container.y = resize(raw.y)
    container.width = resize(raw.width)
    container.height = resize(raw.height)

    // stroke
    if (this.settings.debug) {
      const rect = new Graphics()
      rect.lineStyle(4, 0xff0000, 1)
      rect.drawRect(0, 0, resize(raw.width), resize(raw.height))
      rect.x = 0
      rect.y = 0
      container.addChild(rect)
    }

    this.pixiApp?.stage.addChild(container)
  }

  /**
   * 根据 id 查找对应的文本框数据和画布容器
   */
  protected findTextBlockById(id: number): {
    index: number
    info: RawTextBlock
    container: Container
  } {
    const idx = this.rawTextList.findIndex((raw) => raw.id === id)
    if (idx < 0) {
      throw new Error(`block can not found: id=${id}`)
    }
    if (!this.pixiApp?.stage.children[idx]) {
      throw new Error(`container missing: index=${idx}`)
    }
    return {
      index: idx,
      info: this.rawTextList[idx],
      container: this.pixiApp.stage.children[idx] as Container,
    }
  }

  /**
   * 更新文本框位置与大小
   * 更新后重新排版文字
   */
  public updateTextBlockPosition(id: number, position: Position) {
    const { index, info, container } = this.findTextBlockById(id)
    const newInfo = { ...info, ...position }
    this.rawTextList[index] = newInfo

    container.x = resize(newInfo.x)
    container.y = resize(newInfo.y)
    container.width = resize(newInfo.width)
    container.height = resize(newInfo.height)

    // update stroke
    if (this.settings.debug && container.children[0] instanceof Graphics) {
      const rect = container.children[0]
      rect.clear()
      rect.lineStyle(4, 0xff0000, 1)
      rect.drawRect(0, 0, resize(newInfo.width), resize(newInfo.height))
    }

    // TODO: 更新排版
  }

  /**
   * 更新文本内容
   * 解析、排版
   */
  public updateTextContent() {}

  /**
   * 移除文本框
   */
  public removeTextBlock(id: number) {
    const { index, container } = this.findTextBlockById(id)
    this.rawTextList.splice(index, 1)
    container.destroy({ children: true })
    this.pixiApp?.stage.removeChild(container)

    this.settings.debug &&
      console.log('[DEBUG] remove text block done', id, index)
  }

  public destroy() {
    this.file = null
    this.pixiApp?.destroy()
    this.pixiApp = null
  }
}
