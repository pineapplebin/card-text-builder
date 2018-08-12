export function initData (conf) {
  return Object.keys(conf).map(key => {
    return [key, null]
  }).reduce((acc, item) => {
    acc[item[0]] = item[1]
    return acc
  }, {})
}
