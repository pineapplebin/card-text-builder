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

String.prototype.title = function() {
  if (this.length === 0)
    return this;
  return this[0].toUpperCase() + this.slice(1);
};

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import images from './plugins/images'
Vue.use(images);
import ability from './plugins/ability'
Vue.use(ability);

import '../static/fonts/Beleren-Bold.ttf'
import '../static/fonts/Beleren Small Caps.ttf'
import '../static/fonts/JaceBeleren-Bold.ttf'
import '../static/fonts/方正粗宋简体.ttf'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
})
