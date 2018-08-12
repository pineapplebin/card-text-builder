export default function (Vue) {
  Vue.prototype.$$tools = {
    getNumberFromImage (url) {
      if (!url)
        return 0
      const rst = url.match(/(\d+)\.jpg/)
      if (rst)
        return +rst[1]
      return 0
    }
  }
}
