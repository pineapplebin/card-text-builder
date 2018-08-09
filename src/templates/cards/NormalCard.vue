<template>
  <base-card>
    <div class="bg">
      <normal-bg :bg="$$images.bg[cardData.bg_style]"></normal-bg>
    </div>
    <div class="main">
      <name-block :name="cardData.name" :is-legendary="cardData.is_legendary"
                  :cost-text="cardData.cost" :border="cardData.border_style"></name-block>
      <image-block :border="cardData.border_style" :is-legendary="cardData.is_legendary">
        <div class="image" :style="{backgroundImage: `url(${cardData.image_url})`}"></div>
      </image-block>
      <type-block :type="cardData.type" :series="cardData.series"
                  :rarity="cardData.rarity" :border="cardData.border_style"></type-block>
      <effect-block :border="cardData.border_style" :effect="cardData.effect"></effect-block>
      <series-block style="margin-top: 10px" :number="$$tools.getNumberFromImage(cardData.image_url)"
                    :series="cardData.series" :rarity="cardData.rarity"></series-block>
      <body-block v-show="cardData.is_creature" :bottom="20" :right="20"
                  :border="cardData.border_style" :body="cardData.body"></body-block>
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
  import BodyBlock from '../common/BodyBlock'
  import {TextField, CheckBoxField, SelectField, TextareaField} from '../../utils/form-engine/fields'
  import {common_conf, fetchCardInfo, api_parser} from './common'

  const form = {
    api: TextField({
      label: '加载数据', onchange: (url, form) => {
        fetchCardInfo(url).then(data => {
          if (!data) return
          form.cost = api_parser.parseCost(data)
          form.name = data.printed_name
          form.type = api_parser.parseType(data)
          form.image_url = data.image_uris.large
          form.effect = api_parser.parseEffect(data)
          form.is_creature = data.power !== undefined
          form.body = api_parser.parseBody(data)
          form.series = data.set
          form.rarity = data.rarity
          form.border_style = api_parser.parseBorder(data)
          form.bg_style = api_parser.parseBg(data)
          form.is_legendary = api_parser.parseLegendary(data)
        })
      }
    }),
    ...common_conf,
    is_legendary: CheckBoxField({ label: '传奇?' }),
    is_creature: CheckBoxField({ label: '生物?' }),
    body: TextField({ label: '身材' }),
    effect: TextareaField({ label: '效果' }),
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
      BodyBlock,
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
