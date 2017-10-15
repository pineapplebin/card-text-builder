<template>
  <div class="Tools">
    <label for="cards">卡模板</label>
    <select id="cards" :value="card" @change="changeCard" v-model="selected">
      <option v-for="(_, c) in cards" :value="c">{{ c }}</option>
    </select>
  </div>
</template>

<style lang="less" scoped>
  .Tools {
    min-height: 100vh;
    border-left: 1px solid black;
    padding: 0 5px;
    overflow-x: hidden;
  }
</style>

<script>
  export default {
    data() {
      return {
        selected: null
      }
    },
    props: ['cards', 'card'],
    methods: {
      changeCard() {
        this.$emit('change', this.selected)
      }
    }
  }
</script>
