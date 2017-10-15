<template>
  <div class="Tools">
    <label for="cards">卡模板</label>
    <select id="cards" :value="card">
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
      return {}
    },
    props: ['cards', 'card'],
    methods: {}
  }
</script>
