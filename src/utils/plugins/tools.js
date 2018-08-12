export default function (Vue) {
  Vue.prototype.$$tools = {
    getNumberFromImage (url) {
      if (!url)
        return 0
      const rst = url.match(/(\d+)\.jpg/)
      if (rst)
        return +rst[1]
      return 0
    },
    getSeriesRarity (rarity, type) {
      if (type) {
        if (type.match(/基本地/g))
          return 'L'

        if (type.match(/衍生/g))
          return 'T'
      }
      return ((rarity || '')[0] || 'C').toUpperCase()
    }
  }
}
