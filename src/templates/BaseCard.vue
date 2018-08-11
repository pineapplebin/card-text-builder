<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped lang="less">
  .card {
    position: relative;
    width: 450px;
    height: 627px;
    border-radius: 15px;
    background: #191919;
    overflow: hidden;
  }
</style>

<script>
  export default {
    data () {
      return {}
    },
  }
</script>
