<template>
  <div class="EffectBlock" :style="{ width: `${width}px` }">
    <div class="effect-border">
      <div class="effect" :style="{ height: `${height - 5}px` }"></div>
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
    background: #fffdf7;

    .effect {
      border: 1px solid #fefefe;
      border-top-color: #dadada;
      border-right-color: #dadada;
      background: #e9e6dd;
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
