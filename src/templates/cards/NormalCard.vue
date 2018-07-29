<template>
  <base-card>
    <div class="bg">
      <normal-bg></normal-bg>
    </div>
    <div class="main">
      <name-block :name="cardData.name" :is-legendary="cardData.is_legendary"
                  :cost-text="cardData.cost"></name-block>
      <image-block :is-legendary="cardData.is_legendary">
        <div class="image" :style="{backgroundImage: `url(${cardData.image_url})`}"></div>
      </image-block>
      <type-block :type="cardData.type" :series="cardData.series"
                  :rarity="cardData.rarity"></type-block>
      <effect-block></effect-block>
      <series-block style="margin-top: 10px" :number="$$tools.getNumberFromImage(cardData.image_url)"
                    :series="cardData.series" :rarity="cardData.rarity"></series-block>
    </div>
  </base-card>
</template>

<style scoped lang="less">
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    filter: drop-shadow(-3px 2px 2px #191919);
    text-align: center;
  }

  .image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 446px;
    background-position-x: center;
    background-position-y: -70px;
  }

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>

<script>
  import NormalBg from '../common/NormalBg'
  import NameBlock from '../common/NameBlock'
  import ImageBlock from '../common/ImageBlock'
  import TypeBlock from '../common/TypeBlock'
  import EffectBlock from '../common/EffectBlock'
  import SeriesBlock from '../common/SeriesBlock'
  import {TextField, CheckBoxField, SelectField} from '../../utils/form-engine/fields'
  import {common_conf} from './common'

  const form = {
    ...common_conf,
    border_style: SelectField({ label: '边框样式', options: [{ label: '普通白', value: 'w' }] }),
    bg_style: SelectField({ label: '背景样式' }),
    cost: TextField({ label: '法术力费用' }),
    is_legendary: CheckBoxField({ label: '传奇?' }),
    image_url: TextField({ label: '卡图地址' }),
  }

  export default {
    form,
    components: {
      NormalBg,
      NameBlock,
      ImageBlock,
      TypeBlock,
      EffectBlock,
      SeriesBlock,
    },
    data () {
      return {
        img_url: 'https://img.scryfall.com/cards/large/en/m19/7.jpg',
      }
    },
    props: {
      cardData: {
        type: Object,
        default: () => {
        },
      }
    },
  }
</script>
