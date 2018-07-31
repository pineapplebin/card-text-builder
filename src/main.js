import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import BaseCard from './templates/BaseCard.vue'

import images from './utils/plugins/images'
import borders from './utils/plugins/borders'
import tools from './utils/plugins/tools'

Vue.use(ElementUI)
Vue.use(images)
Vue.use(borders)
Vue.use(tools)
Vue.component('base-card', BaseCard)

Vue.config.productionTip = false

import '../static/fonts/Beleren-Bold.ttf'
import '../static/fonts/Beleren Small Caps.ttf'
import '../static/fonts/JaceBeleren-Bold.ttf'
import '../static/fonts/方正粗宋简体.ttf'

new Vue({
  render: h => h(App)
}).$mount('#app')
