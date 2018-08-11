<template>
  <div class="EffectBlock" :style="{ width: `${width}px` }">
    <div class="effect-border" :style="{background: $$borders.getColorText(border, 'border')}">
      <div class="effect"
           :style="{height: `${height - 5}px`, background: $$borders.getColorText(border, 'effect')}">
        <slot>
          <div class="render-effect" v-html="render_effect">{{ render_effect }}</div>
        </slot>
      </div>
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
      display: flex;
      align-items: center;
      padding: 0 10px;
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
    computed: {
      render_effect () {
        return this.$$effect(this.effect || '')
      }
    },
    props: {
      effect: {
        type: String,
        default: ''
      },
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
