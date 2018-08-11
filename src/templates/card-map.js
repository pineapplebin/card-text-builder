import NormalCard from './cards/NormalCard'

export default {
  normal: {
    component: NormalCard,
    name: '普通牌',
    form: NormalCard.form,
  },
  planewalker: {
    component: null,
    name: '鹏洛客牌',
    form: null,
  }
}
