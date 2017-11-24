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
  import tarkir_abzan from '../../assets/effect/tarkir_abzan.png'
  import tarkir_jeskai from '../../assets/effect/tarkir_jeskai.png'
  import tarkir_sultai from '../../assets/effect/tarkir_sultai.png'
  import tarkir_mardu from '../../assets/effect/tarkir_mardu.png'
  import tarkir_temur from '../../assets/effect/tarkir_temur.png'
  import mirran_symbol from '../../assets/effect/mirran_symbol.png'
  import phyrexia_symbol from '../../assets/effect/phyrexia_symbol.png'

  export default {
    data() {
      return {
        selected: null,
        images: {
          story_spotlight,
          watermark_w, watermark_u, watermark_b, watermark_r, watermark_g,
          ravnica_BG_1, ravnica_UR_1, ravnica_UR_2,
          tarkir_abzan, tarkir_jeskai, tarkir_sultai, tarkir_mardu, tarkir_temur,
          mirran_symbol, phyrexia_symbol,
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
