import type { Container, ITextStyle } from 'pixi.js'
import { resize, type RawTextBlock } from '@/classes/BaseDomain'
import { buildSingleLineText } from '@/classes/factory/build-text'
import { buildRuleText } from './rule'
import { buildCollectText } from './collect'

export function buildTextContent(container: Container, info: RawTextBlock) {
  if (info.displayType === 'collect') {
    buildCollectText(container, info)
  } else if (info.displayType === 'rule') {
    buildRuleText(container, info)
  } else {
    buildTitleText(container, info)
  }
}

const buildTitleText = (container: Container, info: RawTextBlock) => {
  const maxWidth = resize(info.width)

  let config: Partial<ITextStyle>
  switch (info.displayType) {
    case 'name': {
      config = { fontSize: 48, letterSpacing: 2, fontFamily: '华康魏碑 Std W7' }
      break
    }
    case 'type': {
      config = { fontSize: 30, letterSpacing: 0, fontFamily: '华康魏碑 Std W7' }
      break
    }
    case 'number': {
      config = {
        fontSize: 36,
        letterSpacing: -2,
        fontFamily: '华康魏碑 Std W7',
      }
      break
    }
    default: {
      config = { fontSize: 10, letterSpacing: 0, fontFamily: '华康魏碑 Std W7' }
      break
    }
  }
  config = { ...config, fill: info.color || 0x000 }

  const text = buildSingleLineText(info.content, config, {
    maxWidth,
    align: info.align,
  })
  container.addChild(text)
}
