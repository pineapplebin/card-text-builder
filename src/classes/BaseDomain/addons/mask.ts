import { Container, Graphics } from 'pixi.js'
import type { Position } from '../types'
import { resizePos } from '../utils'

export class MaskAddon {
  public maskList: Position[] = []

  protected maskContainer: Container | null = null

  /**
   * 初始化容器
   */
  initMaskContainer() {
    const container = new Container()
    container.x = 0
    container.y = 0

    this.maskContainer = container
    return container
  }

  /**
   * 初始化遮罩
   */
  initMaskBlock() {
    return
    const maskContainer = this.maskContainer!

    // 插入初始化遮罩
    const initial: Position[] = [
      { x: 96, y: 2041, width: 237, height: 25 },
      { x: 1152, y: 2040, width: 253, height: 33 },
    ]

    for (const data of initial) {
      const pos = resizePos(data)
      const mask = new Graphics()
      mask.beginFill(0x000).drawRect(pos.x, pos.y, pos.width, pos.height)
      maskContainer.addChild(mask)

      this.maskList.push(data)
    }
  }

  /**
   * 更新遮罩位置信息
   */
  updateMask(index: number, update: Partial<Position>) {
    const origin = this.maskList[index]
    const mask = this.maskContainer?.children[index] as Graphics | undefined
    if (!origin || !mask) {
      return
    }
    const newData = { ...origin, ...update }
    this.maskList[index] = newData

    const pos = resizePos(newData)
    mask.clear()
    mask.beginFill(0x000).drawRect(pos.x, pos.y, pos.width, pos.height)
  }

  clearMask() {
    this.maskList = []
    this.maskContainer?.removeChildren()
  }
}
