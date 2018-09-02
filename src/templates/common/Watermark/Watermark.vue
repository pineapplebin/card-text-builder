<template>
  <div class="watermark" :style="{height: `${height}px`}">
    <img v-if="watermark_content.type === 'bitmap'" :src="watermark_content.content" class="bitmap">
    <component v-else :is="watermark_content.content" :height="height"
               :left-color="colors[0]" :right-color="colors[1]"></component>
  </div>
</template>

<style lang="less" scoped>
  .watermark {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bitmap {
    height: 100%;
  }
</style>

<script>
  import getWatermarkOptions from './index'

  export default {
    data () {
      return {
        options: getWatermarkOptions(),
      }
    },
    props: {
      watermark: {
        type: String,
        default: null
      },
      border: {
        type: String,
        default: '',
      },
      height: {
        type: Number,
        default: 0,
      }
    },
    computed: {
      watermark_content () {
        console.log(this.options[+(this.watermark || 0)])
        return this.options[+(this.watermark || 0)]
      },
      colors () {
        return this.$$borders.getLegendaryColor(this.border, 'watermark')
      },
    },
  }
</script>
