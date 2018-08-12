<template>
  <div class="ImageBlock" :style="{ width: `${width}px` }" @click.stop="showPanel">
    <div class="image-holder" :style="{background: $$borders.getColorText(border, 'border')}">
      <div class="image" :style="{ width: `${width - 10}px`, height: `${height}px` }">
        <slot :brightness="brightness" :contrast="contrast" :saturate="saturate"></slot>
      </div>
    </div>
    <div class="left-legendary" v-show="isLegendary">
      <div class="rect" :style="{borderRightColor: $$borders.getLegendaryColor(border, 'border')[0]}"></div>
    </div>
    <div class="right-legendary" v-show="isLegendary">
      <div class="rect" :style="{borderLeftColor: $$borders.getLegendaryColor(border, 'border')[1]}"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .ImageBlock {
    position: relative;
    margin: 0 auto;
  }

  .image-holder {
    padding: 0 5px;

    .image {
      border: 1px solid #191919;
    }
  }

  .left-legendary {
    content: '';
    box-sizing: content-box;
    position: absolute;
    top: 0;
    left: -5px;

    .rect {
      content: '';
      height: 30px;
      box-sizing: content-box;
      border-right: 5px solid transparent;
      border-bottom: 5px solid transparent;
    }
  }

  .right-legendary {
    content: '';
    box-sizing: content-box;
    position: absolute;
    top: 0;
    right: -5px;

    .rect {
      content: '';
      height: 30px;
      box-sizing: content-box;
      border-left: 5px solid transparent;
      border-bottom: 5px solid transparent;
    }
  }
</style>

<script>
  export default {
    data () {
      return {
        brightness: 100,
        contrast: 100,
        saturate: 100,
      }
    },
    props: {
      border: {
        type: String,
        default: 'w',
      },
      width: {
        type: Number,
        default: 390,
      },
      height: {
        type: Number,
        default: 274,
      },
      isLegendary: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      showPanel () {
        this.$$ps.showPanel(this)
      }
    }
  }
</script>
