<template>
  <div class="ColorSelector">
    <select v-model="selected" @change="onChange">
      <option v-for="(d, c) in datas" :value="c" v-if="checkIsDoubleBack(c)">{{ d.display }}
      </option>
    </select>
  </div>
</template>

<style lang="less" scoped>
  .ColorSelector {
    width: 100px;
    display: inline-block;

    select {
      width: 100%;
      display: inline-block;
    }
  }
</style>

<script>
  import datas from './ColorSelector.js'

  export default {
    data() {
      return {
        datas,
        selected: null,
      }
    },
    props: {
      is_double_back: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      checkIsDoubleBack(name) {
        const result = name.match(/^DB\w+$/);
        return this.is_double_back ? result : !result;
      },
      onChange() {
        this.$emit('change', datas[this.selected]);
      }
    }
  }
</script>
