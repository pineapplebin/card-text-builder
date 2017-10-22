<template>
  <div class="cardshow">
    <div class="cardshow-block">
      <level-up-card :id="id" :name="name" :cost_text="cost_text" :card_url="card_url"
                     :type="type" :levels="levels" :is_creature="is_creature"
                     :color="background" :rarity="rarity" :version="version"
                     :effect_background="effect_background"
                     :show_dot="show_dot"></level-up-card>
    </div>
    <hr>
    <button @click="show_form = !show_form">隐藏／显示表单</button>
    <div class="form" v-show="show_form">
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
      <div class="form-control">
        <label for="id">ID</label>
        <input id="id" type="text" v-model="id" autocomplete="off" placeholder="美版编号">
      </div>
      <div class="form-control">
        <label for="name">名字</label>
        <input id="name" type="text" v-model="name" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="cost">费用</label>
        <input id="cost" type="text" placeholder="eg: 1,r" v-model="cost_text" autocomplete="off">
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
        <label for="level1_effect">一阶效果</label>
        <textarea id="level1_effect" cols="30" rows="5" style="vertical-align: middle"
                  v-model="levels.level1.effect" placeholder="{1}为费用图片，[[xxx]]为异能"></textarea>
        <label for="level1_atk">攻击力</label>
        <input id="level1_atk" type="text" v-model="levels.level1.atk" style="width: 50px;">
        <label for="level1_def">防御力</label>
        <input id="level1_def" type="text" v-model="levels.level1.def" style="width: 50px;">
      </div>
      <div class="form-control">
        <label for="level2_effect">二阶效果</label>
        <textarea id="level2_effect" cols="30" rows="5" style="vertical-align: middle"
                  v-model="levels.level2.effect" placeholder="{1}为费用图片，[[xxx]]为异能"></textarea>
        <label for="level2_atk">攻击力</label>
        <input id="level2_atk" type="text" v-model="levels.level2.atk" style="width: 50px;">
        <label for="level2_def">防御力</label>
        <input id="level2_def" type="text" v-model="levels.level2.def" style="width: 50px;">
        <label for="level2_level_from">等级</label>
        <input id="level2_level_from" type="text" v-model="levels.level2.level_from"
               style="width: 30px;">-
        <input id="level2_level_to" type="text" v-model="levels.level2.level_to"
               style="width: 30px;">
      </div>
      <div class="form-control">
        <label for="level3_effect">三阶效果</label>
        <textarea id="level3_effect" cols="30" rows="5" style="vertical-align: middle"
                  v-model="levels.level3.effect" placeholder="{1}为费用图片，[[xxx]]为异能"></textarea>
        <label for="level3_atk">攻击力</label>
        <input id="level3_atk" type="text" v-model="levels.level3.atk" style="width: 50px;">
        <label for="level3_def">防御力</label>
        <input id="level3_def" type="text" v-model="levels.level3.def" style="width: 50px;">
        <label for="level3_level">等级</label>
        <input id="level3_level" type="text" v-model="levels.level3.level_from"
               style="width: 30px;">+
      </div>
      <div class="form-control">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/card-show.less';
</style>

<script>
  import LevelUpCard from '../Cards/LevelUpCard.vue'
  import ColorSelector from '../Utils/ColorSelector.vue'
  import RaritySelector from '../Utils/RaritySelector.vue'
  import EffectImageSelector from '../Utils/EffectImageSelector.vue'

  export default {
    components: {
      LevelUpCard,
      ColorSelector,
      RaritySelector,
      EffectImageSelector,
    },
    data() {
      return {
        LEVEL_COLOR: {
          W: {level1: '#FDFDF9', level2: '#EDE6D6', level3: '#E4D5BF'}
        },
        show_form: true,
        // card
        id: '',
        name: '',
        cost: [],
        cost_text: '',
        card_url: '',
        url: '',
        type: '',
        levels: {
          level1: {effect: '', atk: 0, def: 0, level_from: 0, level_to: 0},
          level2: {effect: '', atk: 0, def: 0, level_from: 0, level_to: 0},
          level3: {effect: '', atk: 0, def: 0, level_from: 0, level_to: 0},
        },
        effect: '',
        atk: 0,
        def: 0,
        is_creature: true,
        background: {},
        rarity: 'common',
        version: 'roe',
        effect_background: null,
        show_dot: false,
      }
    },
    methods: {
      changeColor(color) {
        this.background = Object.assign({...color}, this.LEVEL_COLOR[color.code]);
      },
      changeRarity(rarity) {
        this.rarity = rarity
      },
      changeEffect(effect) {
        this.effect_background = effect;
      },
      filterColor(color) {
        return color.code.match(/^[WUBRG]$/)
      }
    }
  }
</script>
