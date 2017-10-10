// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import images from './plugins/images'
Vue.use(images)
import ability from './plugins/ability'
Vue.use(ability)

import '../static/fonts/Beleren-Bold.ttf'
import '../static/fonts/Beleren Small Caps.ttf'
import '../static/fonts/JaceBeleren-Bold.ttf'
import '../static/fonts/方正粗宋简体.ttf'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
