<template>
  <div id="app">
    <main-page></main-page>
  </div>
</template>

<script>
  import MainPage from './MainPage'

  export default {
    name: 'app',
    components: {
      MainPage,
    }
  }
</script>

<style lang="less">
  @import './assets/styles/common.less';
  @import './utils/plugins/effect/style';

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 14px;
  }
</style>
