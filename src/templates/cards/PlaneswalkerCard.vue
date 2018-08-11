<template>
  <base-card>
    <div class="bg">
      <normal-bg hide-smaller :bg="$$images.bg[cardData.bg_style]"></normal-bg>
    </div>
    <div class="main">
      <name-block class="name-block" :name="cardData.name"
                  :cost-text="cardData.cost" :border="cardData.border_style"></name-block>
      <image-block class="image-block" :border="cardData.border_style" :height="280">
        <div class="image" slot-scope="{ brightness, contrast, saturate }"
             :style="{backgroundImage: `url(${cardData.image_url})`,
             filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`}"></div>
      </image-block>
      <type-block class="type-block" :type="cardData.type" :series="cardData.series"
                  :rarity="cardData.rarity" :border="cardData.border_style"></type-block>
      <effect-block class="effect-block" :height="177" :border="cardData.border_style"
                    :effect="cardData.effect">
        <div class="planeswalker-effect">
          <div class="single-effect" v-for="(eff, idx) in rendered_effects" :key="idx">
            <div class="content render-effect" v-html="eff.effect"></div>
            <div class="counter">
              <div class="loyalty-counter" v-if="eff.counter">
                <img v-if="eff.counter[0] === '+'" src="../../assets/images/loyalty/plus.png" alt="">
                <img v-else-if="eff.counter[0] === '-'" src="../../assets/images/loyalty/minus.png" alt="">
                <img v-else src="../../assets/images/loyalty/neutral.png" alt="">
                <span>{{ eff.counter }}</span>
              </div>
              <span>：</span>
            </div>
          </div>
        </div>
      </effect-block>
      <series-block style="margin-top: 10px" :number="$$tools.getNumberFromImage(cardData.image_url)"
                    :series="cardData.series" :rarity="cardData.rarity"></series-block>
      <div class="loyalty">
        <img src="../../assets/images/loyalty/loyalty.png" alt="">
        <span>{{ cardData.loyalty }}</span>
      </div>
      <div class="mask">
        <div class="inner"></div>
      </div>
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

    /deep/ .normal-border {
      border-radius: 25px 25px 10px 10px;
    }

    /deep/ .name {
      border-radius: 20px 20px 5px 5px;
    }
  }

  .image-block {

    .image {
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: 443px;
      background-position-x: center;
      background-position-y: -63px;
    }

    /deep/ .image-holder {
      border-radius: ~'2.5% / 50%';

      .image {
        border-radius: ~'3.5% / 50%';
      }
    }
  }

  .type-block {

    /deep/ .type-border {
      border-radius: 25px 25px 10px 10px;

      .content {
        border-radius: 15px 15px 5px 5px;
      }
    }
  }

  .effect-block {
    /deep/ .effect-border {
      padding-left: 30px;
      padding-bottom: 10px;
      border-radius: ~'50% / 10%';
      border-top-left-radius: 0;
      border-top-right-radius: 0;

      .effect {
        padding: 0;
        border: 2px solid #333;
        border-radius: ~'50% / 10%';
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }

    .planeswalker-effect {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-bottom: 10px;

      .single-effect {
        flex: 1 1 auto;
        position: relative;
        display: flex;
        align-items: center;

        &:nth-child(even) {
          background: rgba(100, 100, 100, .2);
        }

        .counter {
          position: absolute;
          left: -40px;
          top: 0;
          bottom: 0;
          display: flex;
          align-items: center;

          .loyalty-counter {
            width: 50px;
            position: relative;

            img {
              width: 100%;
              filter: drop-shadow(-3px 5px 3px #282828);
            }

            span {
              font-family: Beleren, sans-serif;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              font-size: 16px;
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }

        .content {
          padding-left: 20px;
        }
      }
    }
  }

  .loyalty {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 70px;
    font-size: 16pt;

    img {
      width: 100%;
      filter: drop-shadow(-3px 5px 3px #282828);
    }

    span {
      font-family: Beleren, sans-serif;
      position: absolute;
      left: 0;
      right: 0;
      top: -2px;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }

  .mask {
    position: absolute;
    bottom: 27px;
    left: 0;
    right: 0;
    height: 20px;
    display: flex;
    justify-content: center;

    .inner {
      height: 100%;
      width: 180px;
      border-radius: ~'50% / 20%';
      background: #191919;
    }
  }
</style>

<script>
  import NormalBg from '../common/NormalBg'
  import NameBlock from '../common/NameBlock'
  import ImageBlock from '../common/ImageBlock'
  import TypeBlock from '../common/TypeBlock'
  import EffectBlock from '../common/EffectBlock'
  import SeriesBlock from '../common/SeriesBlock'
  import {TextField, CheckBoxField, SelectField, TextareaField} from '../../utils/form-engine/fields'
  import {common_conf, fetchCardInfo, api_parser, getBgOptions} from './common'

  const form = {
    api: TextField({
      label: '加载数据', onchange: (url, form) => {
        fetchCardInfo(url).then(data => {
          if (!data) return
          form.cost = api_parser.parseCost(data)
          form.name = data.printed_name
          form.type = api_parser.parseType(data)
          form.image_url = data.image_uris.large
          form.series = data.set
          form.rarity = data.rarity
          form.border_style = api_parser.parseBorder(data)
          form.bg_style = 'pw' + api_parser.parseBg(data)
          form.loyalty = data.loyalty
          form.pw_effect = data.printed_text
        })
      }
    }),
    ...common_conf,
    bg_style: SelectField({ label: '背景样式', options: getBgOptions(opt => opt.value.match(/pw/)) }),
    loyalty: TextField({ label: '忠诚度' }),
    pw_effect: TextareaField({ label: '鹏洛客效果' }),
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
      return {}
    },
    props: {
      cardData: {
        type: Object,
        default: () => {
        },
      }
    },
    computed: {
      rendered_effects () {
        if (!this.cardData.pw_effect)
          return []
        return this.cardData.pw_effect.split('\n').map((line) => {
          const splited = line.split('：', 2)
          return {
            counter: splited.length === 2 ? splited[0] : null,
            effect: splited.length === 2 ? this.$$effect(splited[1]) : this.$$effect(splited[0])
          }
        })
      },
    },
  }
</script>
