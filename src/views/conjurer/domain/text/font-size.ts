export enum FONT_SCALE {
  Normal = 1,
  Small = 2,
  Tiny = 3,
}

export function getTextFontSize(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 32
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
      return 25
    default:
      return 28
  }
}
