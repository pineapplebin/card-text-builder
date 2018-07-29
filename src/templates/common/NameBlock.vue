<template>
  <div class="NameBlock" :style="{ width: `${width}px` }">
    <div class="normal-border" v-show="!isLegendary"></div>
    <div class="legendary-border" v-show="isLegendary">
      <legendary-title :width="width + 20"
                       :left-color="'#fffdf7'" :right-color="'#fffdf7'"></legendary-title>
    </div>
    <div class="name" :style="{ width: `${width - 20}px` }">
      <p class="name-content">{{ name }}</p>
      <img class="mana-icon" v-for="icon in parseCost(costText)" :src="$$images.mana[icon]"
           :class="{ bigger: icon.match(/^[2wubrg][wubrgp]$/) }">
    </div>
  </div>
</template>

<style scoped lang="less">
  .NameBlock {
    z-index: 10;
    font-family: Beleren, "FZCuSong-B09S", sans-serif;
    position: relative;
    overflow: visible;
    height: 55px;
    margin: 0 auto;
    text-align: left;
  }

  .normal-border {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fffdf7;
    border-radius: ~'3% / 50%';
  }

  .legendary-border {
    position: absolute;
    top: -16px;
    left: -10px;
    filter: drop-shadow(0 3px 1px #191919);
  }

  .name {
    position: absolute;
    left: 10px;
    top: 10px;
    height: 35px;
    background: #e9e6dd;
    border-radius: ~'3% / 50%';
    border: 1px solid #191919;
    box-shadow: -1px 1px 2px 2px rgba(44, 44, 44, .8);
    display: flex;
    align-items: center;
    padding: 0 10px;

    .name-content {
      flex: 1 0 auto;
      font-size: 20px;
      /*letter-spacing: 1px;*/
    }

    img.mana-icon {
      display: inline-block;
      width: 22px;
      margin-right: 2px;
      border-left: 1px solid black;
      border-bottom: 2px solid black;
      border-radius: 50%;

      &.bigger {
        width: 26px;
        margin-bottom: 1px;
      }
    }
  }
</style>

<script>
  import LegendaryTitle from './LegendaryTitle'

  export default {
    components: {
      LegendaryTitle,
    },
    data () {
      return {
      }
    },
    props: {
      name: {
        type: String,
        default: ''
      },
      width: {
        type: Number,
        default: 410,
      },
      isLegendary: {
        type: Boolean,
        default: false,
      },
      costText: {
        type: String,
        default: ''
      }
    },
    methods: {
      parseCost (t) {
        if (!t)
          return []
        return t.split(',')
      }
    }
  }
</script>
