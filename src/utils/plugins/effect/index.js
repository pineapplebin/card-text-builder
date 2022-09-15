import render from './render.js'
import nrender from './new_render'

export default {
  install(app) {
    app.config.globalProperties.$$effect = nrender
  },
}
