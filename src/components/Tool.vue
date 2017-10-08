<template>
  <div class="Tools">
    <button @click="clickOutput">输出HTML</button>
    <hr>
    <div class="output">
      <textarea cols="40" rows="20">{{ output }}</textarea>
    </div>
  </div>
</template>

<style lang="less">
</style>

<script>
  export default {
    data() {
      return {
        output: ''
      }
    },
    methods: {
      clickOutput() {
        const el = document.getElementById('card');
        console.log(el.outerHTML);
        this.output = el.outerHTML;
      }
    }
  }
</script>
