<template>
  <el-input
    :value="value"
    @input="$emit('input', $event)"
    type="textarea"
    :autosize="{ minRows: 4 }"
  ></el-input>
</template>

<style lang="less" scoped></style>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>
