<template>
  <div class="TypeBlock">
    <div class="type-border" :style="{background: $$borders.getColorText(border, 'border')}">
      <div class="content" :style="{background: $$borders.getColorText(border, 'type')}">
        <p class="type">{{ parseType(type) }}</p>
        <img class="symbol" :src="$$images.getSymbol(series || 'dom', rarity)"/>
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
      box-shadow: -1px 1px 1px 1px rgba(44, 44, 44, .8);
      display: flex;
      align-items: center;
      padding: 0 5px;

      .type {
        flex: 1 0 auto;
      }

      .symbol {
        height: 25px;
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
