export enum FONT_SCALE {
  Normal = 1,
  Small = 2,
  Middle = 3,
  MiddleS = 4,
}

export function getTextFontSize(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 27
    case FONT_SCALE.Middle:
      return 32
    case FONT_SCALE.MiddleS:
      return 30
    default:
      return 35
  }
}

export function getBookFontSize(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 28
    case FONT_SCALE.Middle:
    case FONT_SCALE.MiddleS:
      return 29
    default:
      return 32
  }
}

export function getNumberFontSize(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 24
    case FONT_SCALE.Middle:
    case FONT_SCALE.MiddleS:
      return 26
    default:
      return 28
  }
}

export function getNumberOffsetY(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 2
    case FONT_SCALE.Middle:
    case FONT_SCALE.MiddleS:
      return 4
    default:
      return 6
  }
}

export function getNumberOffsetX(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
    case FONT_SCALE.Middle:
    case FONT_SCALE.MiddleS:
      return 5
    default:
      return 10
  }
}

export function getSymbolIconSize(icon: string, scale: FONT_SCALE) {
  const isBig = icon.length > 1
  if (isBig) {
    switch (scale) {
      case FONT_SCALE.Small:
        return 28
      case FONT_SCALE.Middle:
      case FONT_SCALE.MiddleS:
        return 30
      default:
        return 32
    }
  } else {
    switch (scale) {
      case FONT_SCALE.Small:
        return 24
      case FONT_SCALE.Middle:
      case FONT_SCALE.MiddleS:
        return 26
      default:
        return 28
    }
  }
}

export function getSymbolOffsetY(icon: string, scale: FONT_SCALE) {
  const isBig = icon.length > 1
  if (isBig) {
    switch (scale) {
      case FONT_SCALE.Small:
        return 3
      case FONT_SCALE.Middle:
        return 4
      case FONT_SCALE.MiddleS:
        return 3
      default:
        return 6
    }
  } else {
    switch (scale) {
      case FONT_SCALE.Small:
        return 5
      case FONT_SCALE.Middle:
        return 6
      case FONT_SCALE.MiddleS:
        return 5
      default:
        return 8
    }
  }
}

export function getSymbolOffsetX(scale: FONT_SCALE) {
  switch (scale) {
    case FONT_SCALE.Small:
      return 4
    case FONT_SCALE.Middle:
    case FONT_SCALE.MiddleS:
      return 6
    default:
      return 8
  }
}
