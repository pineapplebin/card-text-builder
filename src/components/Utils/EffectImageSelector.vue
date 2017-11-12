<template>
  <div class="EffectImageSelector">
    <select v-model="selected" @change="onChange">
      <option :value="null">无</option>
      <option v-for="(d, c) in images" :value="c">{{ c }}</option>
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
  import ravnica_UR_1 from '../../assets/effect/ravnica_UR_1.png'
  import ravnica_UR_2 from '../../assets/effect/ravnica_UR_2.png'
  import watermark_w from '../../assets/effect/watermark_w.png'
  import watermark_u from '../../assets/effect/watermark_u.png'
  import watermark_b from '../../assets/effect/watermark_b.png'
  import watermark_r from '../../assets/effect/watermark_r.png'
  import watermark_g from '../../assets/effect/watermark_g.png'

  export default {
    data() {
      return {
        selected: null,
        images: {
          story_spotlight,
          ravnica_BG_1,
          ravnica_UR_1,
          ravnica_UR_2,
          watermark_w,
          watermark_u,
          watermark_b,
          watermark_r,
          watermark_g,
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
