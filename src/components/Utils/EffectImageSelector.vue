<template>
  <div class="EffectImageSelector">
    <select v-model="selected" @change="onChange">
      <option v-for="(d, c) in images" :value="c">{{ c }}
      </option>
    </select>
  </div>
</template>

<style lang="less" scoped>
  .EffectImageSelector {
    display: inline-block;
  }
</style>

<script>
  import story_spotlight from '../../assets/effect/story_spotlight.png'
  import ravnica_BG_1 from '../../assets/effect/ravnica_BG_1.png'

  export default {
    data() {
      return {
        selected: null,
        images: {
          story_spotlight,
          ravnica_BG_1,
        }
      }
    },
    methods: {
      onChange() {
        this.$emit('change', this.images[this.selected])
      }
    }
  }
</script>
