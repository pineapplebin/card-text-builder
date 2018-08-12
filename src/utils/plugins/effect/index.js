import render from './render.js'
import nrender from './new_render'

export default {
  install (Vue) {
    Vue.prototype.$$effect = nrender
  }
}
