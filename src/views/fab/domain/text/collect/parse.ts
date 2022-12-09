const EXP = /^(\{[\d\w]+\})?\s*([\d\w\-]+)\s*(\{[\d]+\})?$/

export interface ParseCollectResult {
  rarity?: string
  series?: string
  year?: string
}

function removeBracket(text: string | undefined) {
  if (!text) {
    return text
  }
  return text.replace('{', '').replace('}', '')
}

export function parseCollectText(text: string): ParseCollectResult {
  const matched = text.trim().match(EXP)
  console.log(matched)
  if (!matched) {
    return {}
  }
  return {
    rarity: removeBracket(matched[1]),
    series: matched[2]?.trim(),
    year: removeBracket(matched[3]),
  }
}
