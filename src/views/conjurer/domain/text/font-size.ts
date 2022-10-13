export enum FONT_SCALE {
  Normal = 1,
  Small = 2,
  Tiny = 3,
}

export function getTextFontSize(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 27
    default:
      return 35
  }
}

export function getBookFontSize(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 28
    default:
      return 30
  }
}

export function getNumberFontSize(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 24
    default:
      return 28
  }
}

export function getNumberOffsetY(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 2
    default:
      return 6
  }
}

export function getNumberOffsetX(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 5
    default:
      return 10
  }
}

export function getSymbolIconSize(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 24
    default:
      return 28
  }
}
export function getSymbolOffsetY(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 4
    default:
      return 7
  }
}
