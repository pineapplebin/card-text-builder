<template>
  <div class="cardshow">
    <div class="cardshow-block">
      <token-card :id="id" :name="name" :card_url="card_url"
                  :type="type" :effect="effect" :body="[atk, def]" :is_creature="is_creature"
                  :color="background" :rarity="rarity" :version="version"
                  :effect_background="effect_background" :is_old="is_old"
                  :show_dot="show_dot"></token-card>
    </div>
    <hr>
    <button @click="show_form = !show_form">隐藏／显示表单</button>
    <div class="form" v-show="show_form">
      <div class="form-control">
        <label>卡框颜色</label>
        <color-selector style="margin-right: 50px" :filter="$$filter.without(/^DB/, /^PW/)"
                        @change="changeColor"></color-selector>
        <label>效果背景图</label>
        <effect-image-selector @change="changeEffect"></effect-image-selector>
        <label for="is_old">是否旧款？</label>
        <input type="checkbox" v-model="is_old" id="is_old" style="width: 30px;">
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
      <div class="form-control">
        <label for="is_creature">是否生物？</label>
        <input id="is_creature" type="checkbox" v-model="is_creature" style="width: 50px">
        <label for="atk">攻击力</label>
        <input id="atk" type="text" v-model="atk" style="width: 50px;">
        <label for="def">防御力</label>
        <input id="def" type="text" v-model="def" style="width: 50px;">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/card-show.less';
</style>

<script>
  import TokenCard from '../Cards/TokenCard.vue'
  import ColorSelector from '../Utils/ColorSelector.vue'
  import RaritySelector from '../Utils/RaritySelector.vue'
  import EffectImageSelector from '../Utils/EffectImageSelector.vue'

  export default {
    components: {
      TokenCard,
      ColorSelector,
      RaritySelector,
      EffectImageSelector,
    },
    data() {
      return {
        show_form: true,
        // card
        id: '',
        name: '',
        card_url: '',
        type: '',
        effect: '',
        atk: 0,
        def: 0,
        is_creature: true,
        background: {},
        rarity: 'common',
        version: 'xln',
        effect_background: null,
        show_dot: false,
        is_old: false,
      }
    },
    methods: {
      changeColor(color) {
        this.background = color;
      },
      changeRarity(rarity) {
        this.rarity = rarity
      },
      changeEffect(effect) {
        this.effect_background = effect;
      }
    }
  }
</script>
