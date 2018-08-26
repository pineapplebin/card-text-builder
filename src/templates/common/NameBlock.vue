<template>
  <div class="NameBlock" :style="{ width: `${width}px` }">
    <div class="normal-border" v-show="!isLegendary"
         :style="{background: $$borders.getColorText(border, 'border')}"></div>
    <div class="legendary-border" v-show="isLegendary">
      <legendary-title :width="width + 10"
                       :left-color="color_list[0]" :right-color="color_list[1]">
      </legendary-title>
    </div>
    <div class="name"
         :style="{ width: `${width - 20}px`, background: $$borders.getColorText(border, 'name') }">
      <p class="name-content" :class="{'double-face-name': doubleFaceSymbol}"
         :style="{color: $$borders.getColorText(border, 'name_font')}">{{ name }}</p>
      <img class="mana-icon" v-for="(icon, idx) in parseCost(costText)" :src="$$images.mana[icon]"
           :key="idx" :class="{ bigger: icon.match(/^[2wubrg][wubrgp]$/) }">
    </div>
    <template v-if="doubleFaceSymbol">
      <div class="double-face-mask up-mask" :style="{backgroundColor: color_list[0]}"></div>
      <div class="double-face-mask down-mask" :style="{backgroundColor: color_list[0]}"></div>
      <div class="double-face-symbol"
           :style="{backgroundColor: color_list[0]}">
        <div class="symbol" :style="{backgroundImage: `url(${doubleFaceSymbol})`}"></div>
      </div>
    </template>
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
    background: transparent;
    border-radius: ~'3% / 50%';
  }

  .legendary-border {
    position: absolute;
    top: -13px;
    left: -5px;
    filter: drop-shadow(0 3px 1px #191919);
  }

  .double-face-mask {
    position: absolute;
    top: 5px;
    left: 12px;
    width: 15px;
    height: 10px;
    background: red;

    &.down-mask {
      left: 6px;
      width: 20px;
      top: 40px;
    }
  }

  .double-face-symbol {
    position: absolute;
    top: 8px;
    left: 3px;
    width: 39px;
    height: 39px;
    border-radius: 20% 50% 50% 20%;
    /*box-shadow: 3px 0 2px 0 rgba(44, 44, 44, .8);*/
    border-right: 3px solid #191919;
    display: flex;
    justify-content: center;
    align-items: center;

    .symbol {
      margin-right: 3px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: no-repeat center;
      background-size: 100%;
    }
  }

  .name {
    position: absolute;
    left: 10px;
    top: 10px;
    height: 35px;
    background: transparent;
    border-radius: ~'3% / 50%';
    border: 1px solid #191919;
    box-shadow: inset -1px 1px 3px 1px rgba(250, 250, 250, .7), -1px 1px 2px 2px rgba(44, 44, 44, .8);
    display: flex;
    align-items: center;
    padding: 0 5px 0 10px;

    .name-content {
      flex: 1 0 auto;
      font-size: 20px;

      &.double-face-name {
        padding-left: 25px;
      }
    }

    img.mana-icon {
      display: inline-block;
      width: 20px;
      margin-right: 2px;
      border-left: 1px solid black;
      border-bottom: 2px solid black;
      border-radius: 50%;

      &.bigger {
        width: 24px;
        margin-bottom: 1px;
      }
    }
  }
</style>

<script>
  import LegendaryTitle from './LegendaryTitle'
  import dbf from '../../assets/images/double-face/symbol-night.png'

  export default {
    components: {
      LegendaryTitle,
    },
    data () {
      return {}
    },
    computed: {
      color_list () {
        return this.$$borders.getLegendaryColor(this.border, 'border')
      },
    },
    props: {
      border: {
        type: String,
        default: 'w'
      },
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
      },
      doubleFaceSymbol: {
        type: String,
        default: '',
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
