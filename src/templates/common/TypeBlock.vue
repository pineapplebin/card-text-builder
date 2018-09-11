<template>
  <div class="TypeBlock">
    <div class="type-border" :style="{background: $$borders.getColorText(border, 'border')}">
      <div class="content" :style="{background: $$borders.getColorText(border, 'type')}">
        <div class="indicator-holder" v-if="indicator">
          <div class="indicator" :data-count="indicator.length">
            <div class="indicator-inner" v-for="(c, idx) in indicator" :key="idx"
                 :style="{backgroundColor: $$borders.getColorText(c, 'border')}"></div>
          </div>
        </div>
        <p class="type">{{ parseType(type) }}</p>
        <img class="symbol" :style="$$series.getSymbolStyle(series || 'dom')"
             :src="$$images.getSymbol(series || 'dom', rarity)"/>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .TypeBlock {
    width: 100%;
    text-align: left;
    font-family: Beleren, "Weibei SC", STKaiti, sans-serif;
    font-size: 20px;
  }

  .type-border {
    padding: 10px;
    background: transparent;
    border-radius: ~'3% / 50%';

    .content {
      height: 30px;
      background: transparent;
      border-radius: ~'3% / 50%';
      border: 1px solid #191919;
      box-shadow: inset -1px 1px 3px 1px rgba(250, 250, 250, .7), -1px 1px 1px 1px rgba(44, 44, 44, .8);
      display: flex;
      align-items: center;
      padding: 0 5px;

      .type {
        flex: 1 0 auto;
      }

      .symbol {
        display: inline-block;
        height: 25px;
      }
    }
  }

  .content .indicator-holder {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    padding: 2px;
    box-shadow: inset -2px 2px 5px 0 rgba(25, 25, 25, 0.8),
    -2px 2px 5px 0 rgba(255, 255, 255, 1);
    margin-right: 5px;

    .indicator {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #444;

      .indicator-inner {
        display: inline-block;
      }

      &[data-count="1"] {
        display: flex;

        .indicator-inner {
          width: 100%;
          height: 100%;
        }
      }

      &[data-count="2"] {
        transform: rotate(45deg);
        transform-origin: center center;
        display: flex;

        .indicator-inner {
          width: 50%;
          height: 100%;
        }
      }

      &[data-count="3"] {
        position: relative;
        transform: rotate(30deg);

        .indicator-inner {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;

          &:nth-child(1) {
            transform: rotate(0deg) skew(-30deg) translate(-50%, -50%);
          }

          &:nth-child(2) {
            transform: rotate(120deg) skew(-30deg) translate(-50%, -50%);
          }

          &:nth-child(3) {
            transform: rotate(240deg) skew(-30deg) translate(-50%, -50%);
          }
        }
      }
    }
  }
</style>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      border: {
        type: String,
        default: 'w'
      },
      type: {
        type: String,
        default: ''
      },
      series: {
        type: String,
        default: ''
      },
      rarity: {
        type: String,
        default: ''
      },
      indicator: {
        type: String,
        default: '',
      }
    },
    methods: {
      parseType (t) {
        if (!t)
          return ''
        return t.replace('/', '／')
      }
    }
  }
</script>
