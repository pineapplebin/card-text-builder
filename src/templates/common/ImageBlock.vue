<template>
  <div class="ImageBlock" :style="{ width: `${width}px` }">
    <div class="image-holder">
      <div class="image" :style="{ width: `${width - 10}px`, height: `${height}px` }">
        <slot></slot>
      </div>
    </div>
    <div class="left-legendary" v-show="isLegendary">
      <div class="rect"></div>
    </div>
    <div class="right-legendary" v-show="isLegendary">
      <div class="rect"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .ImageBlock {
    position: relative;
    margin: 0 auto;
  }

  .image-holder {
    background: #fffdf7;
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
      border-right: 5px solid #fffdf7;
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
      border-left: 5px solid #fffdf7;
      border-bottom: 5px solid transparent;
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
        default: 274,
      },
      isLegendary: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>
