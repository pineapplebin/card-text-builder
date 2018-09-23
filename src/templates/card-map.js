import NormalCard from './cards/NormalCard'
import PlaneswalkerCard from './cards/PlaneswalkerCard'
import TokenCard from './cards/TokenCard'
import SplitCard from './cards/SplitCard'

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
  },
  token: {
    component: TokenCard,
    name: '衍生物牌',
    form: TokenCard.form,
  },
  split: {
    component: SplitCard,
    name: '连体牌',
    form: SplitCard.form,
  }
}
