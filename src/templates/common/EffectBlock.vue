<template>
  <div class="EffectBlock" :style="{ width: `${width}px` }">
    <div class="effect-border" :style="{background: $$borders.getColorText(border, 'border')}">
      <div class="effect"
           :style="{height: `${height - 5}px`, background: $$borders.getColorText(border, 'effect')}"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .EffectBlock {
    margin: 0 auto;
    text-align: left;
    font-family: MPlantin, sans-serif;
  }

  .effect-border {
    padding: 0 5px 5px 5px;
    background: transparent;

    .effect {
      border: 1px solid #fefefe;
      border-top-color: #dadada;
      border-right-color: #dadada;
      background: transparent;
      box-shadow: inset 0 0 10px 0 rgba(44, 44, 44, .3);
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
      width: {
        type: Number,
        default: 390,
      },
      height: {
        type: Number,
        default: 188
      }
    }
  }
</script>
