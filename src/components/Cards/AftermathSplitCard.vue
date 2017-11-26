<template>
  <div class="AftermathSplitCard" id="card">
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
      <div class="border-radius-block" style="width: 335px; border-radius: 2px;">
        <div class="border-color-block" style="padding-top: 0; padding-bottom: 0;"
             :style="{background: card1.color.border}">
          <div class="content-block image-block" style="border-width: 2px 2px 0 0;"
               :style="{backgroundImage: `url(${card_url})`}"></div>
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
          </div>
        </div>
      </div>
      <div class="border-radius-block" style="width: 335px; border-radius: 0 0 5px 5px;">
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
    <div class="rotate-block" :style="{backgroundImage: `url(${card2.color.background})`}">
      <div class="rotated">
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
        <div class="border-radius-block" style="width: 210px; border-radius: 2px;">
          <div class="border-color-block" style="padding-top: 0; padding-bottom: 0;"
               :style="{background: card2.color.border}">
            <div class="content-block image-block" style="border-width: 2px 2px 0 0;">
              <img :src="card_url" alt="image" class="image">
            </div>
          </div>
        </div>
        <div class="border-radius-block">
          <div class="border-color-block" :style="{background: card2.color.border}">
            <div class="content-block type-block" style="border-radius: 2% / 50%"
                 :style="{backgroundColor: card2.color.type}">
              <span class="type">{{ card2.type }}</span>
            </div>
          </div>
        </div>
        <div class="border-radius-block" style="width: 210px; border-radius: 0 0 5px 5px;">
          <div class="border-color-block" style="padding-top: 0;"
               :style="{background: card2.color.border}">
            <div class="content-block effect-block" style="border-width: 1px 2px 2px 1px"
                 :style="{background: card2.color.effect}">
              <div class="content" v-html="effect_render2" style="height: 120px;"
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
    </div>
  </div>
</template>

<style lang="less" scoped>
  .AftermathSplitCard {
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
  }

  .border-radius-block {
    border-radius: ~"3% / 50%";
    overflow: hidden;
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
    height: 114px;
    background: center -61px no-repeat;
    background-size: 375px;
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
      height: 55px;
      font-size: 11pt;
      padding: 0 3px;
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
    height: 10px;
    text-align: left;

    .id {
      z-index: 100;
      font-family: "Gill Sans", sans-serif;
      font-size: 9pt;
      height: 16px;
      position: relative;
      color: white;
    }
  }

  .rotate-block {
    margin-top: 10px;
    height: 210px;
    background-position: center;
    background-position-y: bottom;
    background-size: 100%;
    border-radius: 15%;

    .rotated {
      position: relative;
      top: -60px;
      transform: rotate(90deg);

      .border-radius-block {
        width: 220px;
      }

      .image-block {
        overflow: hidden;

        .image {
          width: 396px;
          top: -141px;
          left: -234px;
          display: inline-block;
          position: relative;
          float: left;
          transform: rotate(-90deg);
        }
      }
    }
  }
</style>

<script>
  import white from '../../assets/background/default_white.jpg'

  export default {
    data() {
      return {}
    },
    props: ['id', 'card1', 'card2', 'version', 'rarity', 'card_url', 'is_fuse', 'fuse_text'],
    computed: {
      effect_render1() {
        return this.$$ability.translate(this.card1.effect);
      },
      effect_render2() {
        return this.$$ability.translate(this.card2.effect)
      },
    }
  }
</script>
