import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/styles/element-custom/index.css'
import BaseCard from './templates/BaseCard.vue'

import images from './utils/plugins/images'
import borders from './utils/plugins/borders'
import tools from './utils/plugins/tools'
import series from './utils/plugins/series'
import effect from './utils/plugins/effect'
import request from './utils/plugins/request'
import Photoshop, { install as psInstall } from './utils/plugins/Photoshop.vue'

String.prototype.replaceAll = function (split, replace) {
  return this.split(split).join(replace)
}

String.prototype.format = function (...args) {
  let str = this.slice(0)
  args.forEach((content, idx) => {
    str = str.replaceAll(`%${idx}`, content)
  })
  return str
}

String.prototype.title = function () {
  if (this.length === 0) return this
  return this[0].toUpperCase() + this.slice(1)
}

const app = createApp(App)

app.use(ElementUI)
app.use(images)
app.use(borders)
app.use(tools)
app.use(series)
app.use(effect)
app.use(request)
app.use(psInstall)
app.component('base-card', BaseCard)
app.component('photoshop', Photoshop)

import '../static/fonts/Beleren-Bold.ttf'
import '../static/fonts/Beleren Small Caps.ttf'
import '../static/fonts/JaceBeleren-Bold.ttf'
import '../static/fonts/方正粗宋简体.ttf'

app.mount('#app')
