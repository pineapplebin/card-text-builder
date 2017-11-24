<template>
  <div class="PlanewalkerCard" id="card">
    <div class="background-image" :style="{backgroundImage: `url(${color.background})`}">
      <div class="border-radius-block" style="border-radius: 20px 20px 5px 5px">
        <div class="border-color-block" :style="{background: color.border}">
          <div class="content-block name-block" style="border-radius: 15px 15px 5px 5px"
               :style="{backgroundColor: color.name}">
            <span class="double-image" v-if="double_image"
                  :style="{backgroundImage: `url(${double_image})`}"></span>
            <span class="text">{{ name }}</span>
            <img v-for="c in cost" :src="$$images['mana'][c]" alt=""
                 v-if="c" :class="{bigger: c.match(/^[2wubrg][wubrgp]$/)}">
          </div>
        </div>
      </div>
      <div class="border-radius-block" style="width: 340px; border-radius: 5% / 50%;">
        <div class="border-color-block" style="padding-top: 0; padding-bottom: 0;"
             :style="{background: color.border}">
          <div class="content-block image-block" style="border-radius: 5% / 50%; border-width: 2px;"
               :style="{backgroundImage: card_image, height: `${image_height}px`}"></div>
        </div>
      </div>
      <div class="border-radius-block" style="border-radius: 15px 15px 5px 5px">
        <div class="border-color-block" :style="{background: color.border}">
          <div class="content-block type-block" style="border-radius: 10px 10px 5px 5px"
               :style="{backgroundColor: color.type}">
            <span class="dot" v-if="show_dot">
              <span v-for="d in color.dot" :style="{background: d}"></span>
            </span>
            <span class="type">{{ type }}</span>
            <span class="symbol">
              <img :src="$$images.getSymbol(version, rarity)"/>
            </span>
            <!--<span style="font-size: 1.1em;" class="ss ss-grad"-->
            <!--:class="[`ss-${version}`, `ss-${rarity}`]"></span>-->
          </div>
        </div>
      </div>
      <div class="border-radius-block" style="width: 335px; border-radius: 0 0 50% 50% / 10%;">
        <div class="border-color-block"
             style="padding-top: 0; padding-bottom: 10px; padding-left: 20px;"
             :style="{background: color.border}">
          <div class="content-block effect-block"
               style="border-radius: 10px 10px 50% 50% / 10%; border-width: 1px 2px 2px 1px"
               :style="{background: color.effect, height: `${TOTAL_HEIGHT - image_height}px`}">
            <div class="content" v-html="$$ability.translate(l['effect'])"
                 v-for="l in loyalty_effects">
              {{ $$ability.translate(l['effect']) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="extra-info">
      <span class="id">{{ id }}</span>
      <div class="body" :style="{backgroundImage: `url(${loyalty_img})`}">
        <span>{{ loyalty }}</span>
      </div>
      <div class="mask"></div>
      <div class="loyalty"
           :style="{height: `${TOTAL_HEIGHT - image_height}px`,
           top: `-${TOTAL_HEIGHT - image_height + 1}px`}">
        <div class="holder" v-for="l in loyalty_effects">
          <span class="symbol" :style="{backgroundImage: getLoyaltyImage(l['count'])}">
            {{ l['count'] }}
          </span>
          <span class="colon" v-show="String(l['count']).length">:</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .PlanewalkerCard {
    width: 350px;
    border: 13px solid #202020;
    border-radius: 5px;
    background: #202020;
    text-align: center;
  }

  .background-image {
    background-position: center;
    background-size: 100%;
    border-radius: 0 0 15% 15%;
    height: 477px;
  }

  .border-radius-block {
    border-radius: 10px;
    overflow: hidden;
    /*border-left: 3px solid black;*/
    box-shadow: -3px 3px 2px 0 black;
    margin: 0 auto;

    .border-color-block {
      padding: 8px;

      .content-block {
        border: solid black;
        border-width: 0 0 2px 2px;
      }
    }
  }

  .name-block {
    font-family: Beleren, "FZCuSong-B09S", sans-serif;
    font-size: 14pt;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 5px 3px 8px;
    text-align: left;

    .double-image {
      position: relative;
      left: -12px;
      width: 32px;
      height: 32px;
      background-position: center;
      background-size: 100%;
      margin-right: -10px;
      border: solid black;
      border-width: 0 2px 0 0;
      border-radius: 50%;
      background-color: black;
    }

    .text {
      flex: 1 0 auto;
    }

    img {
      display: inline-block;
      width: 18px;
      margin-right: 2px;
      border-left: 1px solid black;
      border-bottom: 2px solid black;
      border-radius: 50%;

      &.bigger {
        width: 22px;
        margin-bottom: 1px;
      }
    }
  }

  .image-block {
    /*<!--height: 230px;-->*/
    /*<!--background: center -60px no-repeat;-->*/
    /*<!--background-size: 375px;-->*/
    height: 242px;
    background: center -54px no-repeat;
    background-size: 380px;
  }

  .type-block {
    font-family: Beleren, "Weibei SC", STKaiti, sans-serif;
    font-size: 13pt;
    font-weight: bold;
    height: 19px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2px 8px 2px 5px;
    text-align: left;

    .dot {
      margin: 0 3px;
      height: 10px;
      width: 10px;
      border: 1px solid black;
      border-radius: 50%;
      box-shadow: 0 -1px 2px 0 #333;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transform: rotate(45deg);

      span {
        height: 20px;
        width: 20px;
        display: inline-block;
      }
    }

    .type {
      flex: 1 0 auto;
    }

    .symbol {
      display: inline-flex;
      align-items: center;

      img {
        height: 20px;
      }
    }
  }

  .effect-block {
    height: 134px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    padding-bottom: 5px;

    .content {
      width: 93.5%;
      height: 30%;
      font-family: MPlantin, sans-serif;
      font-size: 11pt;
      padding: 5px 0 5px 22px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      word-break: normal;
      text-align: left;
      background-size: 100px;
      background-position: center;
      background-repeat: no-repeat;

      &:nth-child(even) {
        background-color: rgba(100, 100, 100, .1);
      }
    }
  }

  .extra-info {
    height: 15px;
    text-align: left;

    .id {
      font-family: "Gill Sans", sans-serif;
      font-size: 9pt;
      position: relative;
      top: 9px;
      color: white;
    }

    .body {
      position: relative;
      float: right;
      top: -20px;
      bottom: 10px;
      margin-bottom: -100px;
      z-index: 20;
      width: 65px;
      height: 42px;
      background-size: 100%;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-size: 14pt;
        font-family: Beleren, sans-serif;
        color: white;
      }
    }

    .mask {
      position: relative;
      float: right;
      width: 200px;
      height: 20px;
      left: -76px;
      top: 10px;
      background: #202020;
      border-top: 2px solid black;
      z-index: 10;
      border-radius: ~"20% 20% 0 0";
    }

    .loyalty {
      position: relative;
      float: right;
      width: 48px;
      height: 242px;
      margin-bottom: -1000px;
      top: -144px;
      left: -102px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .holder {
        display: flex;
        align-items: center;

        .symbol {
          font-family: Beleren, sans-serif;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 45px;
          height: 43px;
          background: center no-repeat;
          background-size: 100%;
          color: white;
        }

        .colon {
          font-family: MPlantin, sans-serif;
        }
      }
    }
  }

  .test {
    background: linear-gradient(to right, #F5F5ED, #E2EDF5);
  }
</style>

<script>
  import loyalty_img from '../../assets/planewalker/loyalty.png'
  import loyaltyup_img from '../../assets/planewalker/loyaltyup.png'
  import loyaltynaught_img from '../../assets/planewalker/loyaltynaught.png'
  import loyaltydown_img from '../../assets/planewalker/loyaltydown.png'

  export default {
    data() {
      return {
        loyalty_img,
        loyaltyup_img,
        loyaltynaught_img,
        loyaltydown_img,
        TOTAL_HEIGHT: 385,
        image_height: 238,
        is_moving: false,
        clientY: 0,
      }
    },
    props: ['id', 'name', 'cost_text', 'card_url', 'type', 'color', 'rarity', 'version',
      'effect_background', 'show_dot', 'double_image', 'loyalty', 'loyalty_effects'],
    computed: {
      cost() {
        return this.cost_text.split(',').map(t => t.trim())
      },
      card_image() {
        return `url(${this.card_url}`;
      },
      effect_render() {
        return this.$$ability.translate(this.effect);
      },
    },
    methods: {
      getLoyaltyImage(value) {
        value = String(value);
        const BASE = 'url(%0)';
        if (value === '0')
          return BASE.format(this.loyaltynaught_img);
        else if (value[0] === '+')
          return BASE.format(this.loyaltyup_img);
        else if (value[0] === '-')
          return BASE.format(this.loyaltydown_img);
        else
          return ''
      },
    }
  }
</script>
