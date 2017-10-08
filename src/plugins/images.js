import resources from '../resources/images.json'

const images = {
  install(Vue) {
    Vue.prototype.$$images = {
      ...resources
    }
  }
};

export default images
