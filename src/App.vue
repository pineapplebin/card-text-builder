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

  .ss-uncommon.ss-grad {
    background: -webkit-linear-gradient(left, #434f54 0%, #cee5f0 50%, #434f54 100%);
    -webkit-text-stroke: 0.03em #111;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ss-common.ss-grad {
    -webkit-text-stroke: 0.01em #000;
  }
</style>

<script>
  import Tools from './components/Tool.vue'
  import NormalCardShow from './components/CardShows/NormalCardShow.vue'
  import DoubleFaceCardShow from './components/CardShows/DoubleFaceCardShow.vue'
  import LevelUpCardShow from './components/CardShows/LevelUpCardShow.vue'
  import SplitCardShow from './components/CardShows/SplitCardShow.vue'

  export default {
    name: 'app',
    components: {Tools},
    data() {
      return {
        CARDS: {
          NormalCardShow,
          DoubleFaceCardShow,
          LevelUpCardShow,
          SplitCardShow,
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
