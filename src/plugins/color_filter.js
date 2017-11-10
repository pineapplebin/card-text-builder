export default function (Vue) {
  Vue.prototype.$$filter = {
    only(reg) {
      return function(color) {
        return color.code.match(reg);
      }
    },
    without(...reg_list) {
      return function (color) {
        return !reg_list.map(reg => color.code.match(reg)).some(result => result);
      }
    }
  }
}
