<template>
  <div class="cardshow">
    <div class="cardshow-block">
      <normal-split-card></normal-split-card>
    </div>
    <hr>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/card-show.less';
</style>

<script>
  import NormalSplitCard from '../Cards/NormalSplitCard.vue'

  export default {
    components: {
      NormalSplitCard,
    },
    data() {
      return {}
    }
  }
</script>
