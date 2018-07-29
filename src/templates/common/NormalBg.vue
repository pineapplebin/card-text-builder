<template>
  <div class="NormalBg">
    <div class="inner" :class="{ full: isFull }">
      <div class="bigger"></div>
      <div class="smaller"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .NormalBg {
    width: 100%;
    height: 100%;
    padding: 20px;
    padding-bottom: 40px;

    .inner {
      width: 100%;
      height: 100%;
      text-align: center;

      .bigger, .smaller {
        background: no-repeat center;
        background-size: cover;
      }

      .bigger {
        height: 547px;
        border-radius: 10px 10px 10% 10%;
        background-image: url("../../assets/images/background/default_white.jpg");
      }

      .smaller {
        margin: 0 auto;
        width: 390px;
        height: 20px;
        background-size: 105%;
        background-position: bottom;
        background-image: url("../../assets/images/background/default_white.jpg");
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
      isFull: {
        type: Boolean,
        default: false,
      }
    }
  }
</script>
