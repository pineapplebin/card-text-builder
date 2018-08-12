<template>
  <base-card>
    <div class="bg">
      <normal-bg :bg="$$images.bg[cardData.bg_style]"></normal-bg>
    </div>
    <div class="main">
      <name-block class="name-block" :name="cardData.name" :is-legendary="cardData.is_legendary"
                  :cost-text="cardData.cost" :border="'token'"></name-block>
      <div class="image-block">
        <div class="top" :style="{background: $$borders.getColorText(cardData.border_style, 'border')}">
          <div class="image">
            <div class="content" :style="{backgroundImage: `url(${cardData.image_url})`,
                 filter: `brightness(${100}%) contrast(${100}%) saturate(${100}%)`}"></div>
          </div>
        </div>
        <div class="middle" :class="{large: !cardData.effect}"
             :style="{background: $$borders.getColorText(cardData.border_style, 'border')}">
          <div class="image">
            <div class="content" :style="{backgroundImage: `url(${cardData.image_url})`,
                 filter: `brightness(${100}%) contrast(${100}%) saturate(${100}%)`}"></div>
          </div>
        </div>
      </div>
      <type-block :type="cardData.type" :series="cardData.series"
                  :rarity="cardData.rarity" :border="cardData.border_style"></type-block>
      <div>
        <effect-block v-show="cardData.effect" :height="119" :border="cardData.border_style"
                      :effect="cardData.effect" :watermark="cardData.effect_watermark"></effect-block>
        <div class="effect-holder" v-show="!cardData.effect"
             :style="{backgroundImage: `url(${$$images.bg[cardData.bg_style]})`}"></div>
      </div>
      <series-block style="margin-top: 10px" :series="cardData.series"
                    :number="$$tools.getNumberFromImage(cardData.image_url)"
                    rarity="T" :amount="cardData.amount"></series-block>
      <body-block :bottom="20" :right="20" :border="cardData.border_style"
                  :body="cardData.body"></body-block>
    </div>
  </base-card>
</template>

<style lang="less" scoped>
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    filter: drop-shadow(-3px 2px 2px #191919);
    text-align: center;
  }

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .name-block {
    /deep/ .name {
      text-align: center;
    }
  }

  .image-block {
    width: 390px;
    margin: 0 auto;

    .content {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: 446px;
      background-position-x: center;
    }

    .top {
      height: 195px;
      padding: 5px 5px 0 5px;
      border-radius: ~'50% / 70%';
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;

      .image {
        height: 100%;
        border: 2px solid #191919;
        border-bottom: none;
        border-radius: ~'50% / 70%';
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        overflow: hidden;

        .content {
          background-position-y: -80px;
        }
      }
    }

    .middle {
      height: 148px;
      padding: 0 5px;

      &.large {
        height: 239px;
      }

      .image {
        height: 100%;
        border: 2px solid #191919;
        border-top: 0;

        .content {
          background-position-y: -268px;
        }
      }
    }
  }

  .effect-holder {
    margin: 0 auto;
    width: 390px;
    height: 28px;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 100%;
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
  import {TextField, CheckBoxField, TextareaField} from '../../utils/form-engine/fields'
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
    amount: TextField({ label: '系列总数' }),
    is_legendary: CheckBoxField({ label: '传奇?' }),
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
      return {}
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
