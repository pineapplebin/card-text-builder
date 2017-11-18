<template>
  <div class="cardshow">
    <div class="cardshow-block">
      <xln-land-card :id="id" :name="name" :type="type" :version="version"
                     :rarity="rarity" :effect="effect" :card_url="card_url"
                     :color="background"></xln-land-card>
    </div>
    <hr>
    <button @click="show_form = !show_form">隐藏／显示表单</button>
    <div class="form" v-show="show_form">
      <div class="form-control">
        <label for="color">卡框颜色</label>
        <select id="color" style="width: 100px;" v-model="background">
          <option v-for="f in card_frames" :value="f">{{ f.display }}</option>
        </select>
      </div>
      <div class="form-control">
        <label>稀有度</label>
        <rarity-selector @change="changeRarity"></rarity-selector>
        <label for="version" style="margin-left: 50px;">卡包</label>
        <input id="version" type="text" v-model="version" placeholder="Keyrune code"
               style="width: 50px;">
      </div>
      <div class="form-control">
        <label for="id">ID</label>
        <input id="id" type="text" v-model="id" autocomplete="off" placeholder="美版编号">
      </div>
      <div class="form-control">
        <label for="name">名字</label>
        <input id="name" type="text" v-model="name" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="url">图片链接</label>
        <input id="url" type="text" placeholder="gatherer.wizards.com的图片"
               v-model="card_url" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="type">类别</label>
        <input id="type" type="text" placeholder="完整类别"
               v-model="type" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="effect">效果</label>
        <textarea id="effect" cols="80" rows="5" style="vertical-align: middle"
                  v-model="effect" placeholder="{1}为费用图片，[[xxx]]为异能"></textarea>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/card-show.less';
</style>

<script>
  import XlnLandCard from '../Cards/XlnLandCard.vue'
  import ColorSelector from '../Utils/ColorSelector.vue'
  import RaritySelector from '../Utils/RaritySelector.vue'
  import EffectImageSelector from '../Utils/EffectImageSelector.vue'

  import white_top from '../../assets/background/ixalan_land_white_top.png'
  import white_bottom from '../../assets/background/ixalan_land_white_bottom.png'
  import blue_top from '../../assets/background/ixalan_land_blue_top.png'
  import blue_bottom from '../../assets/background/ixalan_land_blue_bottom.png'
  import red_top from '../../assets/background/ixalan_land_red_top.png'
  import red_bottom from '../../assets/background/ixalan_land_red_bottom.png'
  import black_top from '../../assets/background/ixalan_land_black_top.png'
  import black_bottom from '../../assets/background/ixalan_land_black_bottom.png'
  import green_top from '../../assets/background/ixalan_land_green_top.png'
  import green_bottom from '../../assets/background/ixalan_land_green_bottom.png'
  import multi_top from '../../assets/background/ixalan_land_multi_top.png'
  import multi_bottom from '../../assets/background/ixalan_land_multi_bottom.png'
  import land_top from '../../assets/background/ixalan_land_land_top.png'
  import land_bottom from '../../assets/background/ixalan_land_land_bottom.png'

  export default {
    components: {
      XlnLandCard,
      ColorSelector,
      RaritySelector,
      EffectImageSelector,
    },
    data() {
      return {
        show_form: true,
        card_frames: [
          {display: '白', top: white_top, bottom: white_bottom},
          {display: '蓝', top: blue_top, bottom: blue_bottom},
          {display: '红', top: red_top, bottom: red_bottom},
          {display: '黑', top: black_top, bottom: black_bottom},
          {display: '绿', top: green_top, bottom: green_bottom},
          {display: '多色', top: multi_top, bottom: multi_bottom},
          {display: '地', top: land_top, bottom: land_bottom},
        ],
        // card
        id: '',
        name: '',
        cost_text: '',
        card_url: '',
        type: '',
        effect: '',
        background: {},
        rarity: 'rare',
        version: 'xln',
      }
    },
    methods: {
      changeColor(color) {
        this.background = color;
      },
      changeRarity(rarity) {
        this.rarity = rarity
      },
    }
  }
</script>
