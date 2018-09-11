const no = {
  'm19': 280, // 核心2019 2018-07
  'gs1': 40,  // 幻境奇谈 2018-06
  'dom': 269, // 多明纳里亚 2018-04
  'xln': 279, // 依夏兰 2017-09
  'hou': 199, // 幻灭时刻 2017-07
  'akh': 269, // 阿芒凯 2017-04
  'kld': 264, // 卡拉德许 2016-09
  'emn': 205, // 异月传奇 2016-07
  'soi': 297, // 依尼翠阴影 2016-04
  'c14': 337, // 指挥官2014 2014-11
  'jou': 165, // 尼兹之旅 2014-05
  'bng': 165, // 天神创生 2014-02
  'ths': 249, // 塞洛斯 2013-09
  'dgm': 156, // 巨龙迷城 2013-05
  'gtc': 249, // 兵临古城 2013-02
  'rtr': 274, // 再访拉尼卡 2012-10
  'roe': 248, // 奥札奇再起 2010-04
  'wwk': 145, // 天醒地转 2010-02
  'zen': 269, // 赞迪卡 2009-10
  'dis': 180, // 纷争 2006-05
  'gpt': 165, // 十会盟 2006-02
  'rav': 306, // 拉尼卡公会城 2005-10
}

const styles = {
  'emn': { height: '32px' },
  'rav': { marginRight: '5px' },
}

export default function (Vue) {
  Vue.prototype.$$series = {
    getSeriesAmount (s) {
      const _s = s ? s.toLowerCase() : null
      if (!no[_s])
        return 0
      return no[_s]
    },
    getSymbolStyle (series) {
      if (series.toLowerCase() in styles) {
        return styles[series.toLowerCase()]
      }
      return {}
    }
  }
}
