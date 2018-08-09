import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import BaseCard from './templates/BaseCard.vue'

import images from './utils/plugins/images'
import borders from './utils/plugins/borders'
import tools from './utils/plugins/tools'
import series from './utils/plugins/series'
import effect from './utils/plugins/effect'
import request from './utils/plugins/request'
import Photoshop, { install as psInstall } from './utils/plugins/Photoshop'

String.prototype.replaceAll = function (split, replace) {
  return this.split(split).join(replace);
};

String.prototype.format = function (...args) {
  let str = this.slice(0);
  args.forEach((content, idx) => {
    str = str.replaceAll(`%${idx}`, content)
  });
  return str;
};

String.prototype.title = function () {
  if (this.length === 0)
    return this;
  return this[0].toUpperCase() + this.slice(1);
};

Vue.use(ElementUI)
Vue.use(images)
Vue.use(borders)
Vue.use(tools)
Vue.use(series)
Vue.use(effect)
Vue.use(request)
Vue.use(psInstall)
Vue.component('base-card', BaseCard)
Vue.component('photoshop', Photoshop)

Vue.config.productionTip = false

import '../static/fonts/Beleren-Bold.ttf'
import '../static/fonts/Beleren Small Caps.ttf'
import '../static/fonts/JaceBeleren-Bold.ttf'
import '../static/fonts/方正粗宋简体.ttf'

new Vue({
  render: h => h(App)
}).$mount('#app')
