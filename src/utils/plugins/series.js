const no = {
  'm19': 280,
  'gs1': 40,
  'dom': 269,
  'xln': 279,
  'hou': 199,
  'akh': 269,
  'kld': 264,
  'c14': 337,
  'roe': 248,
}

export default function (Vue) {
  Vue.prototype.$$series = {
    getSeriesAmount (s) {
      const _s = s ? s.toLowerCase() : null
      if (!no[_s])
        return 0
      return no[_s]
    }
  }
}
