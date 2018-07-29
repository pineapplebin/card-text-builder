<template>
  <el-select :value="value" @input="$emit('input', $event)">
    <el-option v-for="(opt, idx) in conf.options"
               :key="idx" :label="opt.label" :value="opt.value"></el-option>
  </el-select>
</template>

<style lang="less" scoped></style>

<script>
  export default {
    props: {
      conf: {
        type: Object,
        default: () => ({
          options: []
        })
      },
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>
