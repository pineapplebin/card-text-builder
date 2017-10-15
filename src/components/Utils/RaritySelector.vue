<template>
  <div class="RaritySelector">
    <select id="rarity" v-model="rarity" @change="onChange">
      <option value="common">Common</option>
      <option value="uncommon">Uncommon</option>
      <option value="rare">Rare</option>
      <option value="mythic">Mythic</option>
      <option value="foil">Foil</option>
    </select>
  </div>
</template>

<style lang="less" scoped>
  .RaritySelector {
    display: inline-block;
    width: 100px;
  }
</style>

<script>
  export default {
    data() {
      return {
        rarity: 'common'
      }
    },
    methods: {
      onChange() {
        this.$emit('change', this.rarity)
      }
    }
  }
</script>
