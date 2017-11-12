<template>
  <div class="ColorSelector">
    <select v-model="border_selected" @change="onChange">
      <option v-for="(d, c) in border" :value="c">{{ d.display }}</option>
    </select>
    <select v-model="background_selected" @change="onChange">
      <option :value="{}">默认</option>
      <option v-for="(d, c) in background" :value="c">{{ d.display }}</option>
    </select>
  </div>
</template>

<style lang="less" scoped>
  .ColorSelector {
    width: 150px;
    display: inline-flex;

    select {
      width: 100%;
      display: inline-block;
    }
  }
</style>

<script>
  import ColorSelector from './ColorSelector.js'

  export default {
    data() {
      return {
        border: ColorSelector.border,
        background: ColorSelector.background,
        border_selected: null,
        background_selected: {},
      }
    },
    props: {
      filter: {default: null}
    },
    methods: {
      onChange() {
        const border = {...(this.border[this.border_selected] || {})};
        const background = {...(this.background[this.background_selected] || {})};
        const _new = Object.assign(border, background);
        this.$emit('change', _new);
      }
    }
  }
</script>
