const no = {
  'm19': 280,
  'gs1': 40,
  'dom': 269,
  'xln': 279,
}

export default function (Vue) {
  Vue.prototype.$$series = {
    getSeriesAmount (s) {
      const _s = s.toLowerCase()
      if (!no[_s])
        return 0
      return no[_s]
    }
  }
}
