<template>
  <div class="NormalSplitCard" id="card">
    <div class="cards-block">
      <div class="background-image" :style="{backgroundImage: `url(${bg})`}">
        <div class="border-radius-block">
          <div class="border-color-block" :style="{background: color.border}">
            <div class="content-block name-block" style="border-radius: 8px"
                 :style="{backgroundColor: color.name}">
              <span>hello</span>
              <img v-for="c in cost" :src="$$images['mana'][c]" alt=""
                   v-if="c" :class="{bigger: c.match(/^[2wubrg][wubrg]$/)}">
            </div>
          </div>
        </div>
        <div class="border-radius-block" style="width: 227px; border-radius: 2px;">
          <div class="border-color-block" style="padding-top: 0; padding-bottom: 0;"
               :style="{background: color.border}">
            <div class="content-block image-block" style="border-width: 2px 2px 0 0;">
              <img :src="card_image" alt="image" class="image">
            </div>
          </div>
        </div>
        <div class="border-radius-block">
          <div class="border-color-block" :style="{background: color.border}">
            <div class="content-block type-block" style="border-radius: 8px"
                 :style="{backgroundColor: color.type}">
              <span class="type">{{ type }}</span>
              <span style="font-size: 1.1em;" class="ss ss-grad"
                    :class="[`ss-${version}`, `ss-${rarity}`]"></span>
            </div>
          </div>
        </div>
        <div class="border-radius-block" style="width: 227px; border-radius: 0 0 5px 5px;">
          <div class="border-color-block" style="padding-top: 0;"
               :style="{background: color.border}">
            <div class="content-block effect-block" style="border-width: 1px 2px 2px 1px"
                 :style="{background: color.effect}">
              <div class="content" v-html="effect_render"
                   :style="{backgroundImage: `url(${effect_background})`}">
                {{ effect_render }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="background-image" :style="{backgroundImage: `url(${bg})`}">
        <div class="border-radius-block">
          <div class="border-color-block" :style="{background: color.border}">
            <div class="content-block name-block" style="border-radius: 8px"
                 :style="{backgroundColor: color.name}">
              <span>hello</span>
              <img v-for="c in cost" :src="$$images['mana'][c]" alt=""
                   v-if="c" :class="{bigger: c.match(/^[2wubrg][wubrg]$/)}">
            </div>
          </div>
        </div>
        <div class="border-radius-block" style="width: 227px; border-radius: 2px;">
          <div class="border-color-block" style="padding-top: 0; padding-bottom: 0;"
               :style="{background: color.border}">
            <div class="content-block image-block" style="border-width: 2px 2px 0 0;">
              <img :src="card_image" alt="image" class="image" style="left: -186px;">
            </div>
          </div>
        </div>
        <div class="border-radius-block">
          <div class="border-color-block" :style="{background: color.border}">
            <div class="content-block type-block" style="border-radius: 8px"
                 :style="{backgroundColor: color.type}">
              <span class="type">{{ type }}</span>
              <span style="font-size: 1.1em;" class="ss ss-grad"
                    :class="[`ss-${version}`, `ss-${rarity}`]"></span>
            </div>
          </div>
        </div>
        <div class="border-radius-block" style="width: 227px; border-radius: 0 0 5px 5px;">
          <div class="border-color-block" style="padding-top: 0;"
               :style="{background: color.border}">
            <div class="content-block effect-block" style="border-width: 1px 2px 2px 1px"
                 :style="{background: color.effect}">
              <div class="content" v-html="effect_render"
                   :style="{backgroundImage: `url(${effect_background})`}">
                {{ effect_render }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="extra-info"></div>
  </div>
</template>

<style lang="less" scoped>
  .NormalSplitCard {
    height: 350px;
    width: 499px;
    border: 13px solid #202020;
    border-radius: 5px;
    background: #202020;
    text-align: center;
    /*transform: rotate(-90deg);*/
  }

  .cards-block {
    display: flex;
    justify-content: space-between;
  }

  .extra-info {
    height: 15px;
    text-align: left;
  }

  .background-image {
    width: 242px;
    height: 335px;
    background-position: center;
    background-size: 100%;
    border-radius: 0 0 15% 15%;
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
    padding: 5px 3px 3px 5px;
    text-align: left;

    span {
      flex: 1 0 auto;
    }

    img {
      display: inline-block;
      width: 19px;
      margin-right: 2px;
      border-left: 1px solid black;
      border-bottom: 2px solid black;
      border-radius: 50%;

      &.bigger {
        width: 23px;
        margin-bottom: 1px;
      }
    }
  }

  .image-block {
    height: 145px;
    overflow: hidden;
    text-align: left;

    .image {
      display: inline-block;
      position: relative;
      float: left;
      width: 340px;
      left: 57px;
      top: -117px;
      transform: rotate(90deg);
    }
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

    .type {
      flex: 1 0 auto;
    }
  }

  .effect-block {

    .content {
      font-family: MPlantin, sans-serif;
      height: 90px;
      font-size: 11pt;
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      word-break: break-all;
      text-align: left;
      background-size: 100px;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
</style>

<script>
  import bg from '../../assets/background/default_red.jpg'
  import color from '../Utils/ColorSelector.js'

  export default {
    data() {
      return {
        bg,
        color: color.R,
        cost_text: '1,r',
        card_image: 'https://magiccards.info/scans/en/pc/112a.jpg',
        effect: '[[飞行]]'
      }
    },
    computed: {
      cost() {
        return this.cost_text.split(',').map(t => t.trim())
      },
      effect_render() {
        return this.$$ability.translate(this.effect);
      },
    }
  }
</script>
