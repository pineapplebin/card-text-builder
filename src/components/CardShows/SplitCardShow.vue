<template>
  <div class="cardshow">
    <div class="cardshow-block">
      <normal-split-card :id="id"></normal-split-card>
    </div>
    <hr>
    <button @click="show_form = !show_form">隐藏／显示表单</button>
    <div class="form" v-show="show_form">
      <div class="form-control">
        <label for="id">ID</label>
        <input id="id" type="text" v-model="id" autocomplete="off" placeholder="美版编号">
      </div>
      <br>
      <h3>Card 1</h3>
      <div class="form-control">
        <label>卡框颜色</label>
        <color-selector style="margin-right: 50px" :filter="filterColor"
                        @change="changeColor"></color-selector>
        <label>效果背景图</label>
        <effect-image-selector @change="changeEffect"></effect-image-selector>
      </div>
      <div class="form-control">
        <label>稀有度</label>
        <rarity-selector @change="changeRarity"></rarity-selector>
        <label for="version" style="margin-left: 50px;">卡包</label>
        <input id="version" type="text" v-model="version" placeholder="Keyrune code"
               style="width: 50px;">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/card-show.less';
</style>

<script>
  import NormalSplitCard from '../Cards/NormalSplitCard.vue'
  import ColorSelector from '../Utils/ColorSelector.vue'
  import EffectImageSelector from '../Utils/EffectImageSelector.vue'
  import RaritySelector from '../Utils/RaritySelector.vue'

  const constructor = () => {
    return {
      name: '',
      cost_text: '',
      card_url: '',
      type: '',
      effect: '',
      background: {},
      rarity: 'common',
      version: 'xln',
      effect_background: null,
      show_dot: false,
    }
  };

  export default {
    components: {
      NormalSplitCard,
      ColorSelector,
      EffectImageSelector,
      RaritySelector,
    },
    data () {
      return {
        show_form: true,
        // card
        id: '',
        card1: constructor(),
        card2: constructor(),
      }
    },
    methods: {
    }
  }
</script>
