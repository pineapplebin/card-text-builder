<template>
  <div class="NormalBg" :style="{padding}">
    <div class="inner" :class="{ full: isFull }">
      <div class="bigger" :class="{ 'origin-card': !bg }"
           :style="{backgroundImage: `url(${bg || imageUrl})`}"></div>
      <div class="smaller" v-show="!hideSmaller" :style="{backgroundImage: `url(${bg})`}"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .NormalBg {
    width: 100%;
    height: 100%;
    padding-bottom: 40px;

    .inner {
      width: 100%;
      height: 100%;
      text-align: center;

      .bigger, .smaller {
        background: no-repeat center;
        background-size: 100%;
      }

      .bigger {
        height: 547px;
        border-radius: 10px 10px 10% 10%;
        background-image: none;

        &.origin-card {
          background-size: 109%;
          background-position-y: -14px;
        }
      }

      .smaller {
        margin: 0 auto;
        width: 390px;
        height: 20px;
        background-size: 105%;
        background-position: bottom;
        background-image: none;
      }
    }

    .inner.full {
      .bigger {
        height: 587px;
        border-radius: 0;
      }

      .smaller {
        display: none;
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
      bg: {
        type: String,
        default: null,
      },
      isFull: {
        type: Boolean,
        default: false,
      },
      hideSmaller: {
        type: Boolean,
        default: false,
      },
      imageUrl: {
        type: String,
        default: null,
      },
      padding: {
        type: String,
        default: '20px',
      },
    },
  }
</script>
