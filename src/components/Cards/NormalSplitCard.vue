<template>
  <div class="holder" @click="is_vertical = !is_vertical">
    <div class="NormalSplitCard" id="card"
         :style="{transform: is_vertical ? 'rotate(-90deg)': 'rotate(0)'}">
      <div class="cards-block">
        <div class="background-image" :style="{backgroundImage: `url(${card1.color.background})`}">
          <div class="border-radius-block">
            <div class="border-color-block" :style="{background: card1.color.border}">
              <div class="content-block name-block" style="border-radius: 3% / 50%"
                   :style="{backgroundColor: card1.color.name}">
                <span>{{ card1.name }}</span>
                <img v-for="c in card1.cost_text.split(',')" :src="$$images['mana'][c]" alt=""
                     v-if="c" :class="{bigger: c.match(/^[2wubrg][wubrgp]$/)}">
              </div>
            </div>
          </div>
          <div class="border-radius-block" style="width: 227px; border-radius: 2px;">
            <div class="border-color-block" style="padding-top: 0; padding-bottom: 0;"
                 :style="{background: card1.color.border}">
              <div class="content-block image-block" style="border-width: 2px 2px 0 0;">
                <img :src="card_url" alt="image" class="image">
              </div>
            </div>
          </div>
          <div class="border-radius-block">
            <div class="border-color-block" :style="{background: card1.color.border}">
              <div class="content-block type-block" style="border-radius: 2% / 50%"
                   :style="{backgroundColor: card1.color.type}">
                <span class="type">{{ card1.type }}</span>
                <span class="symbol">
                  <img :src="$$images.getSymbol(version, rarity)"/>
                </span>
                <!--<span style="font-size: 1.1em;" class="ss ss-grad"-->
                <!--:class="[`ss-${version}`, `ss-${rarity}`]"></span>-->
              </div>
            </div>
          </div>
          <div class="border-radius-block" style="width: 227px; border-radius: 0 0 5px 5px;">
            <div class="border-color-block" style="padding-top: 0;"
                 :style="{background: card1.color.border}">
              <div class="content-block effect-block" style="border-width: 1px 2px 2px 1px"
                   :style="{background: card1.color.effect}">
                <div class="content" v-html="effect_render1"
                     :style="{backgroundImage: `url(${card1.effect_background})`,
                     height: is_fuse ? '66px': ''}">
                  {{ effect_render1 }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="background-image" :style="{backgroundImage: `url(${card2.color.background})`}">
          <div class="border-radius-block">
            <div class="border-color-block" :style="{background: card2.color.border}">
              <div class="content-block name-block" style="border-radius: 3% / 50%"
                   :style="{backgroundColor: card2.color.name}">
                <span>{{ card2.name }}</span>
                <img v-for="c in card2.cost_text.split(',')" :src="$$images['mana'][c]" alt=""
                     v-if="c" :class="{bigger: c.match(/^[2wubrg][wubrgp]$/)}">
              </div>
            </div>
          </div>
          <div class="border-radius-block" style="width: 227px; border-radius: 2px;">
            <div class="border-color-block" style="padding-top: 0; padding-bottom: 0;"
                 :style="{background: card2.color.border}">
              <div class="content-block image-block" style="border-width: 2px 2px 0 0;">
                <img :src="card_url" alt="image" class="image" style="left: -186px;">
              </div>
            </div>
          </div>
          <div class="border-radius-block">
            <div class="border-color-block" :style="{background: card2.color.border}">
              <div class="content-block type-block" style="border-radius: 2% / 50%"
                   :style="{backgroundColor: card2.color.type}">
                <span class="type">{{ card2.type }}</span>
                <span class="symbol">
                  <img :src="$$images.getSymbol(version, rarity)"/>
                </span>
                <!--<span style="font-size: 1.1em;" class="ss ss-grad"-->
                <!--:class="[`ss-${version}`, `ss-${rarity}`]"></span>-->
              </div>
            </div>
          </div>
          <div class="border-radius-block" style="width: 227px; border-radius: 0 0 5px 5px;">
            <div class="border-color-block" style="padding-top: 0;"
                 :style="{background: card2.color.border}">
              <div class="content-block effect-block" style="border-width: 1px 2px 2px 1px;"
                   :style="{background: card2.color.effect}">
                <div class="content" v-html="effect_render2"
                     :style="{backgroundImage: `url(${card2.effect_background})`,
                      height: is_fuse ? '66px' : ''}">
                  {{ effect_render2 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra-info">
        <span class="id">{{ id }}</span>
        <div class="fuse-block" v-show="is_fuse">
          <div class="fuse-effect">
            <div class="border-radius-block" style="width: 499px; border-radius: 2% / 50%;">
              <div class="border-color-block" style=""
                   :style="{background: fuse_border_color}">
                <div class="content-block fuse-text-block" style="border-radius: 1% / 50%"
                     :style="{background: fuse_background_color}">
                  <span class="content" v-html="fuse_render">{{ fuse_render }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="fuse-arrow">
            <span class="sm-left" :style="{borderLeftColor: card1.color.name}"></span>
            <span class="left"
                  :style="{borderLeftColor: card1.color.dot[1] || card1.color.dot[0]}"></span>
            <span class="right" :style="{borderRightColor: card2.color.dot[0]}"></span>
            <span class="sm-right" :style="{borderRightColor: card2.color.name}"></span>
          </div>
          <div class="fuse-arrow" style="top: -200px; left: 189px;">
            <span class="sm-left" style="border-width: 12px 0 12px 10px"
                  :style="{borderLeftColor: card1.color.name}"></span>
            <span class="left" style="border-width: 20px 0 20px 10px;"
                  :style="{borderLeftColor: card1.color.dot[1] || card1.color.dot[0]}"></span>
            <span class="right" style="border-width: 20px 10px 20px 0;"
                  :style="{borderRightColor: card2.color.dot[0]}"></span>
            <span class="sm-right" style="border-width: 12px 10px 12px 0"
                  :style="{borderRightColor: card2.color.name}"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .holder {
    height: 525px;
    width: 525px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .NormalSplitCard {
    height: 350px;
    width: 499px;
    border: 13px solid #202020;
    border-radius: 5px;
    background: #202020;
    text-align: center;
    transition: transform 300ms;
  }

  .cards-block {
    display: flex;
    justify-content: space-between;
  }

  .background-image {
    width: 242px;
    height: 335px;
    background-position: center;
    background-size: 100%;
    border-radius: 0 0 15% 15%;
  }

  .border-radius-block {
    /*border-radius: 10px;*/
    border-radius: ~"3% / 50%";
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

    span {
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
    height: 145px;
    overflow: hidden;
    text-align: left;

    .image {
      display: inline-block;
      position: relative;
      float: left;
      width: 340px;
      left: 56px;
      top: -116px;
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
      padding-top: 2px;
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

    .content {
      font-family: MPlantin, sans-serif;
      height: 90px;
      font-size: 11pt;
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      word-break: normal;
      text-align: left;
      background-size: 50px;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .extra-info {
    height: 15px;
    text-align: left;

    .id {
      z-index: 100;
      font-family: "Gill Sans", sans-serif;
      font-size: 9pt;
      height: 16px;
      position: relative;
      top: 7px;
      color: white;
    }

    .fuse-effect {
      position: relative;
      float: left;
      z-index: 10;
      top: -46px;
    }

    .fuse-text-block {
      height: 18px;
      border-radius: 5px;

      .content {
        position: relative;
        top: -2px;
        display: inline-block;
        font-family: MPlantin, sans-serif;
        font-size: 10pt;
        padding: 0 5px;
        word-break: break-all;
        text-align: left;
        background-size: 50px;
        background-position: center;
        background-repeat: no-repeat;
      }
    }

    .fuse-arrow {
      position: relative;
      float: left;
      top: -392px;
      left: 230px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        display: inline-block;
        width: 0;
        height: 0;

        &.sm-left {
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-left: 10px solid;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        &.sm-right {
          margin-left: 1px;
          border-top: 15px solid transparent;
          border-bottom: 15px solid transparent;
          border-right: 10px solid;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }

        &.left {
          border-top: 22px solid transparent;
          border-bottom: 22px solid transparent;
          border-left: 10px solid;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        }

        &.right {
          border-top: 22px solid transparent;
          border-bottom: 22px solid transparent;
          border-right: 10px solid;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
    }
  }
</style>

<script>
  import {getAbility} from '../../plugins/effect/abilities.js'
  import ColorSelector from '../Utils/ColorSelector.js'

  function linear(c1, c2, dir = 'to right') {
    return `linear-gradient(${dir}, ${c1} 45%, ${c2} 55%)`
  }

  export default {
    data() {
      return {
        is_vertical: false,
        // card
        card_image: 'https://magiccards.info/scans/en/pc/112a.jpg',
        effect: '[[飞行]]'
      }
    },
    props: ['id', 'card1', 'card2', 'version', 'rarity', 'card_url', 'is_fuse', 'fuse_text'],
    computed: {
      fuse_render() {
        if (!this.fuse_text)
          return '';
        const ab = getAbility(this.fuse_text);
        return `${ab[ab.lang].name.title()}<span style="font-style: italic">（${ab[ab.lang].desc}）</span>`;
      },
      effect_render1() {
        return this.$$ability.translate(this.card1.effect);
      },
      effect_render2() {
        return this.$$ability.translate(this.card2.effect)
      },
      fuse_border_color() {
        if (!this.is_fuse)
          return 'white';
        const color1 = this.card1.color;
        const color2 = this.card2.color;
        if (Object.keys(color1).length < 2 || Object.keys(color2).length < 2)
          return 'white';

        // return linear(color1.border, color2.border);
        let result = `linear-gradient(to right, ${color1.dot[0]} 5%, ${
        color1.dot[1] || color1.dot[0]} 46%, ${color2.dot[0]} 53%, ${color2.dot[0]}, ${
        color2.dot[1] || color2.dot[0]} 95%)`;
        return result;
      },
      fuse_background_color() {
        if (!this.is_fuse)
          return 'white';
        const color1 = this.card1.color;
        const color2 = this.card2.color;
        if (Object.keys(color1).length < 2 || Object.keys(color2).length < 2)
          return 'white';

        if (color1.dot.length === 2 || color2.dot.length === 2)
          return ColorSelector.border.MUL.name;
        else
          return linear(color1.name, color2.name);
      }
    }
  }
</script>
