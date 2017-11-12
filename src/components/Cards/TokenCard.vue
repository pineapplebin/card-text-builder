<template>
  <div class="TokenCard" id="card">
    <div class="background-image" :style="background_style">
      <div class="border-radius-block" style="margin-bottom: 4px;">
        <div class="border-color-block" style="background: #A7853C;">
          <div class="content-block name-block"
               style="border-radius: 3% / 50%; background-color: black; border-color: #CCC">
            <span>{{ name }}</span>
          </div>
        </div>
      </div>
      <div class="border-radius-block" style="border-radius: 50% 50% 20px 20px; z-index: 10;"
           :style="{width: is_old ? `330px` : `335px`}">
        <div class="border-color-block" style="padding-bottom: 0;"
             :style="{background: color.border }">
          <div class="content-block image-block"
               style="border-radius: 50% 50% 0 0;border-width: 2px 2px 0 2px; height: 200px;"
               :style="{backgroundImage: card_image,
               backgroundPositionY: `${is_old && effect_length ? '-66px' : '-68px'}`}"></div>
        </div>
      </div>
      <div style="overflow: hidden;" :style="{marginTop: `${second_image_position}px`}">
        <div class="border-radius-block" :style="{width: is_old ? `330px` : `335px`,
            borderRadius: `0 0 ${is_old ? '50%' : '2px'} ${is_old ? '50%' : '2px'}`,
            marginTop: effect_length ? '-20px' : 0}">
          <div class="border-color-block" style="padding-top: 0;"
               :style="{background: color.border, paddingBottom: is_old ? '8px' : '0'}">
            <div class="content-block image-block"
                 style="border-radius: 2px 2px 50% 50%;border-width: 0 2px 2px 2px; height: 200px;"
                 :style="{backgroundImage: card_image,
               backgroundPositionY: `${(effect_length ? -141: -206) + (is_old ? 0 : -8) +
               (effect_length ? (1 + (is_old ? 2 : 0)) : -7)}px`,
               borderRadius: is_old ? `0 0 50% 50%` : ''}"></div>
          </div>
        </div>
      </div>
      <div class="border-radius-block">
        <div class="border-color-block" :style="{background: color.border}">
          <div class="content-block type-block" style="border-radius: 2% / 50%"
               :style="{backgroundColor: color.type}">
            <span class="dot" v-if="show_dot">
              <span v-for="d in color.dot" :style="{background: d}"></span>
            </span>
            <span class="type">{{ type }}</span>
            <span style="font-size: 1.1em;" class="ss ss-grad"
                  :class="[`ss-${version}`, `ss-${rarity}`]"></span>
          </div>
        </div>
      </div>
      <div class="border-radius-block" style="width: 335px; border-radius: 0 0 5px 5px;">
        <div class="border-color-block"
             style="padding-top: 0; min-height: 20px; background-size: 100%"
             :style="effect_block_style">
          <div class="content-block effect-block" v-if="effect.length > 0"
               style="border-width: 1px 2px 2px 1px;"
               :style="{background: color.effect, height: effect_length ? '90px' : ''}">
            <div class="content" v-html="effect_render"
                 :style="{backgroundImage: `url(${effect_background})`,
                 alignItems: effect.split('\n').length === 1 ? 'center' : 'left'}">
              {{ effect_render }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="extra-info">
      <span class="id">{{ id }}</span>
      <div class="body" v-if="is_creature"
           :style="{borderColor: color.body, background: color.body}">
        <span :style="{backgroundColor: color.body, color: color.body_font}">
          {{ body[0] }}/{{ body[1] }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .TokenCard {
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
    padding: 5px 3px 3px 5px;
    text-align: center;

    span {
      flex: 1 0 auto;
      color: #E8D87D;
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
    height: 230px;
    background: center -68px no-repeat;
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
  }

  .effect-block {
    height: 136px;

    .content {
      font-family: MPlantin, sans-serif;
      font-size: 11pt;
      height: 100%;
      padding: 5px 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      word-break: normal;
      text-align: left;
      background-size: 100px;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  .extra-info {
    height: 15px;
    text-align: left;

    .id {
      font-family: "Gill Sans", sans-serif;
      font-size: 9pt;
      position: relative;
      top: 2px;
      color: white;
    }

    .body {
      font-family: Beleren, sans-serif;
      font-size: 12pt;
      position: relative;
      float: right;
      top: -10px;
      bottom: 10px;
      margin-bottom: -100px;
      border: 2px solid white;
      border-radius: 8px;
      box-shadow: -2px 1px 3px 0 black;
      background: white;

      span {
        border-top: 2px solid #444;
        border-right: 2px solid #444;
        border-radius: 8px;
        display: inline-block;
        min-width: 30px;
        padding: 1px 10px;
        text-align: center;
      }
    }
  }

  .test {
    background: linear-gradient(to right, #F5F5ED, #E2EDF5);
  }
</style>

<script>
  export default {
    data() {
      return {}
    },
    props: ['id', 'name', 'card_url', 'type', 'effect', 'body',
      'is_creature', 'color', 'rarity', 'version', 'effect_background', 'show_dot', 'is_old'],
    computed: {
      effect_length() {
        return !!(this.effect.trim().length)
      },
      card_image() {
        return `url(${this.card_url})`;
      },
      effect_render() {
        return this.$$ability.translate(this.effect);
      },
      effect_block_background() {
        return this.effect.trim().length ? this.color.border : `url(${this.color.background})`;
      },
      effect_block_style() {
        const basic = {
          background: this.effect.trim().length ?
              this.color.border : `url(${this.color.background})`,
          backgroundPositionY: (this.color.code || '').match(/^EC/) ? 'bottom' : 'top',
        };
        if ((this.color.code || '').match(/^DEVOID/) && !this.effect_length) {
          return {background: this.color.type}
        } else
          return basic;
      },
      second_image_position() {
        return (this.effect_length ? -108 : -55) + (this.is_old ? 0 : 8);
      },
      background_style() {
        const basic = {backgroundImage: `url(${this.color.background})`};
        if ((this.color.code || '').match(/^DEVOID/)) {
          return {
            backgroundImage: `url(${this.card_url})`,
            backgroundPositionX: 'center',
            backgroundPositionY: '-13px',
            backgroundSize: '110%'
          }
        } else
          return basic;
      }
    },
  }
</script>
