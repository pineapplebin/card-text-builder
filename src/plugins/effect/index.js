import render from './render.js'

export default {
  install(Vue) {
    Vue.prototype.$$ability = {
      translate: render
    }
  }
}
