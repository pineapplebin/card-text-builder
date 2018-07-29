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
    border: 10px;
    border-radius: 20px;
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
