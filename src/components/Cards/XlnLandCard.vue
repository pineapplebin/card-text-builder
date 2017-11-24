<template>
  <div class="IxaLandCard" id="card">
    <div class="top" :style="{backgroundImage: `url(${color.top})`}">
      <div class="name">{{ name }}</div>
      <span class="symbol version">
        <img :src="$$images.getSymbol(version, rarity)"/>
      </span>
      <!--<span style="font-size: 1.4em;" class="version ss ss-grad"-->
      <!--:class="[`ss-${version}`, `ss-${rarity}`]"></span>-->
    </div>
    <div class="image" :style="{backgroundImage: `url(${card_url})`}"></div>
    <div class="bottom" :style="{backgroundImage: `url(${color.bottom})`}">
      <div class="type">{{ type }}</div>
      <div class="effect" v-html="effect_render">{{ effect_render }}</div>
    </div>
    <div class="extra">
      <span class="id">{{ id }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .IxaLandCard {
    width: 350px;
    border: 13px solid #202020;
    border-radius: 5px;
    background: #202020;
    text-align: center;
  }

  .top {
    margin-top: 3px;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 55px;
    z-index: 10;
    position: relative;

    .name {
      min-height: 22px;
      position: relative;
      font-family: "Beleren Small Caps", "FZCuSong-B09S", sans-serif;
      font-size: 14pt;
      top: 13px;
    }

    .symbol {
      display: inline-flex;
      align-items: center;

      img {
        height: 24px;
      }
    }

    .version {
      position: relative;
      top: 15px;
    }
  }

  .bottom {
    background-repeat: no-repeat;
    background-size: 100%;
    height: 205px;
    z-index: 10;
    top: -20px;
    margin-bottom: -14px;
    position: relative;

    .type {
      min-height: 22px;
      font-family: Beleren, "Weibei SC", STKaiti, sans-serif;
      font-size: 14pt;
      font-weight: bold;
      position: relative;
      top: 12px;
    }

    .effect {
      height: 140px;
      width: 81%;
      margin: 0 auto;
      position: relative;
      top: 23px;
      font-family: MPlantin, sans-serif;
      font-size: 11pt;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      word-break: normal;
      text-align: left;
    }
  }

  .image {
    background-size: 109%;
    background-position-x: center;
    background-position-y: -60px;
    background-repeat: no-repeat;
    height: 240px;
    position: relative;
    top: -10px;
    z-index: 5;
  }

  .extra {
    height: 10px;
    text-align: left;

    .id {
      font-family: "Gill Sans", sans-serif;
      font-size: 9pt;
      position: relative;
      top: -5px;
      color: white;
    }
  }
</style>

<script>
  import top from '../../assets/background/ixalan_land_black_top.png'
  import bottom from '../../assets/background/ixalan_land_black_bottom.png'

  export default {
    data() {
      return {
        top,
        bottom,
      }
    },
    props: ['id', 'name', 'version', 'rarity', 'type', 'effect', 'card_url', 'color'],
    computed: {
      effect_render() {
        return this.$$ability.translate(this.effect);
      }
    }
  }
</script>
