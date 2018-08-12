import NormalCard from './cards/NormalCard'
import PlaneswalkerCard from './cards/PlaneswalkerCard'

export default {
  normal: {
    component: NormalCard,
    name: '普通牌',
    form: NormalCard.form,
  },
  planeswalker: {
    component: PlaneswalkerCard,
    name: '鹏洛客牌',
    form: PlaneswalkerCard.form,
  }
}
