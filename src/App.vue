<template>
  <div id="app" class="layout">
    <div class="flex">
      <div style="flex: .8 0 auto;">
        <component :is="CARDS[card]" ref="card_show"></component>
      </div>
      <div>
        <tools :cards="CARDS" :card="card" @change="onChangeCard"></tools>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .layout {
    border: 1px solid #d7dde4;
    position: relative;
  }

  .flex {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>

<script>
  import Tools from './components/Tool.vue'
  import NormalCardShow from './components/CardShows/NormalCardShow.vue'
  import DoubleFaceCardShow from './components/CardShows/DoubleFaceCardShow.vue'

  export default {
    name: 'app',
    components: {Tools},
    data() {
      return {
        CARDS: {
          NormalCardShow,
          DoubleFaceCardShow,
        },
        card: 'NormalCardShow',
      }
    },
    methods: {
      onChangeCard(card) {
        this.card = card;
      }
    }
  }
</script>
