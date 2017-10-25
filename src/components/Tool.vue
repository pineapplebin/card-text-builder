<template>
  <div class="Tools">
    <label for="cards">卡模板</label>
    <select id="cards" :value="card" @change="changeCard" v-model="selected">
      <option v-for="(_, c) in cards" :value="c">{{ c }}</option>
    </select>
    <button @click="save">save</button>
    <br>
    <img :src="img" alt="">
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
  import dom2image from 'dom-to-image'

  export default {
    data() {
      return {
        selected: null,
        img: ''
      }
    },
    props: ['cards', 'card'],
    methods: {
      changeCard() {
        this.$emit('change', this.selected)
      },
      save() {
        const dom = document.getElementById('card');
        dom2image.toPng(dom).then(url => {
          this.img = url;
          const a = document.createElement('a');
          a.href = url;
          a.download = 'image.png';
          a.click();
        });
      }
    }
  }
</script>
