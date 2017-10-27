<template>
  <div class="holder" @click="is_vertical = !is_vertical">
    <div class="NormalSplitCard" id="card" :style="{transform: is_vertical ? 'rotate(-90deg)': ''}">
      <div class="cards-block">
        <div class="background-image" :style="{backgroundImage: `url(${card1.color.background})`}">
          <div class="border-radius-block">
            <div class="border-color-block" :style="{background: card1.color.border}">
              <div class="content-block name-block" style="border-radius: 8px"
                   :style="{backgroundColor: card1.color.name}">
                <span>{{ card1.name }}</span>
                <img v-for="c in card1.cost_text.split(',')" :src="$$images['mana'][c]" alt=""
                     v-if="c" :class="{bigger: c.match(/^[2wubrg][wubrg]$/)}">
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
              <div class="content-block type-block" style="border-radius: 8px"
                   :style="{backgroundColor: card1.color.type}">
                <span class="type">{{ card1.type }}</span>
                <span style="font-size: 1.1em;" class="ss ss-grad"
                      :class="[`ss-${version}`, `ss-${rarity}`]"></span>
              </div>
            </div>
          </div>
          <div class="border-radius-block" style="width: 227px; border-radius: 0 0 5px 5px;">
            <div class="border-color-block" style="padding-top: 0;"
                 :style="{background: card1.color.border}">
              <div class="content-block effect-block" style="border-width: 1px 2px 2px 1px"
                   :style="{background: card1.color.effect}">
                <div class="content" v-html="effect_render1"
                     :style="{backgroundImage: `url(${card1.effect_background})`}">
                  {{ effect_render1 }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="background-image" :style="{backgroundImage: `url(${card2.color.background})`}">
          <div class="border-radius-block">
            <div class="border-color-block" :style="{background: card2.color.border}">
              <div class="content-block name-block" style="border-radius: 8px"
                   :style="{backgroundColor: card2.color.name}">
                <span>{{ card2.name }}</span>
                <img v-for="c in card2.cost_text.split(',')" :src="$$images['mana'][c]" alt=""
                     v-if="c" :class="{bigger: c.match(/^[2wubrg][wubrg]$/)}">
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
              <div class="content-block type-block" style="border-radius: 8px"
                   :style="{backgroundColor: card2.color.type}">
                <span class="type">{{ card2.type }}</span>
                <span style="font-size: 1.1em;" class="ss ss-grad"
                      :class="[`ss-${version}`, `ss-${rarity}`]"></span>
              </div>
            </div>
          </div>
          <div class="border-radius-block" style="width: 227px; border-radius: 0 0 5px 5px;">
            <div class="border-color-block" style="padding-top: 0;"
                 :style="{background: card2.color.border}">
              <div class="content-block effect-block" style="border-width: 1px 2px 2px 1px;"
                   :style="{background: card2.color.effect}">
                <div class="content" v-html="effect_render2"
                     :style="{backgroundImage: `url(${card2.effect_background})`}">
                  {{ effect_render2 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="extra-info">
        <span class="id">{{ id }}</span>
        <!--<div class="fuse-block">-->
        <!--<div class="fuse-arrow">-->
        <!--<span class="left"></span>-->
        <!--<span class="right"></span>-->
        <!--</div>-->
        <!--</div>-->
        <div class="fuse-effect">
          <div class="border-radius-block" style="width: 499px; border-radius: 5px;">
            <div class="border-color-block" style=""
                 :style="{background: card2.color.border}">
              <div class="content-block effect-block" style="height: 15px; border-radius: 5px"
                   :style="{backgroundColor: card2.color.type}">
                <span class="content" style="height: auto; padding: 1px 10px 0 10px;">Fuse</span>
              </div>
            </div>
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
    /*transform: rotate(-90deg);*/
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
      background-size: 50px;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .extra-info {
    height: 15px;
    text-align: left;

    .id {
      font-family: Beleren, sans-serif;
      font-size: 10pt;
      height: 16px;
      position: relative;
      top: 7px;
      color: white;
    }

    .fuse-block {

      .fuse-arrow {
        position: relative;
        float: left;
        top: -315px;
        left: 248px;
        border: 2px solid red;
        text-align: center;

        span {
          display: inline-block;
        }
      }
    }

    .fuse-effect {
      position: relative;
      float: left;
      z-index: 10;
      top: -42px;
    }
  }
</style>

<script>

  export default {
    data () {
      return {
        is_vertical: false,
        // card
        card_image: 'https://magiccards.info/scans/en/pc/112a.jpg',
        effect: '[[飞行]]'
      }
    },
    props: ['id', 'card1', 'card2', 'version', 'rarity', 'card_url'],
    computed: {
      effect_render1 () {
        return this.$$ability.translate(this.card1.effect);
      },
      effect_render2 () {
        return this.$$ability.translate(this.card2.effect)
      }
    }
  }
</script>
