<template>
  <div id="app">
    <div class="contents">
      <card-show></card-show>
    </div>
    <div class="tools">
      <tools></tools>
    </div>
  </div>
</template>

<script>
  import CardShow from './components/CardShow.vue'
  import Tools from './components/Tool.vue'

  export default {
    name: 'app',
    components: {
      CardShow,
      Tools
    }
  }
</script>

<style lang="less">
  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    text-align: center;

    .contents {
      width: 80vw;
    }

    .tools {
      position: fixed;
      top: 0;
      left: 80vw;
      width: 20vw;
      height: 100vh;
      border-left: 1px solid #555;
      overflow-y: scroll;
    }
  }
</style>
