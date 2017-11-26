<template>
  <div class="cardshow">
    <div class="cardshow-block">
      <component :is="cards[card_style]"
                 :id="id" :card1="card1" :card2="card2" :version="version" :rarity="rarity"
                 :card_url="card_url" :is_fuse="is_fuse"
                 :fuse_text="fuse_text"></component>
    </div>
    <hr>
    <button @click="show_form = !show_form">隐藏／显示表单</button>
    <label for="card">样式</label>
    <select id="card" v-model="card_style">
      <option value="normal">normal</option>
      <option value="aftermath">aftermath</option>
      <option value="kamigawa">kamigawa</option>
    </select>
    <div class="form" v-show="show_form">
      <div class="form-control">
        <label for="id">ID</label>
        <input id="id" type="text" v-model="id" style="margin-right: 50px; width: 150px;"
               autocomplete="off" placeholder="美版编号">
        <label for="is_fuse">Is Fuse?</label>
        <input id="is_fuse" type="checkbox" v-model="is_fuse" style="width: 100px;">
      </div>
      <div class="form-control" v-show="is_fuse">
        <label for="fuse_zh">融咒</label>
        <input type="radio" name="fuse_text" value="融咒" id="fuse_zh" style="width: 10px;"
               v-model="fuse_text">
        <label for="fuse_en">Fuse</label>
        <input type="radio" name="fuse_text" value="fuse" id="fuse_en" style="width: 10px;"
               v-model="fuse_text">
      </div>
      <div class="form-control">
        <label>稀有度</label>
        <rarity-selector @change="changeRarity"></rarity-selector>
        <label for="version" style="margin-left: 50px;">卡包</label>
        <input id="version" type="text" v-model="version" placeholder="Keyrune code"
               style="width: 50px;">
      </div>
      <div class="form-control">
        <label for="url">图片链接</label>
        <input id="url" type="text" placeholder="gatherer.wizards.com的图片"
               v-model="card_url" autocomplete="off">
      </div>
      <br>
      <h3>Card 1</h3>
      <div class="form-control">
        <label>卡框颜色</label>
        <color-selector style="margin-right: 50px" :filter="filterColor"
                        @change="changeColor('card1', $event)"></color-selector>
        <label>效果背景图</label>
        <effect-image-selector @change="changeEffect('card1', $event)"></effect-image-selector>
      </div>
      <div class="form-control">
        <label for="name">名字</label>
        <input id="name" type="text" v-model="card1.name" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="cost">费用</label>
        <input id="cost" type="text" placeholder="eg: 1,r" v-model="card1.cost_text"
               autocomplete="off">
      </div>
      <div class="form-control">
        <label for="type">类别</label>
        <input id="type" type="text" placeholder="完整类别" v-model="card1.type" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="effect">效果</label>
        <textarea id="effect" cols="80" rows="5" style="vertical-align: middle"
                  v-model="card1.effect" placeholder="{1}为费用图片，[[xxx]]为异能"></textarea>
      </div>
      <div class="form-control">
        <label for="is_creature">是否生物？</label>
        <input id="is_creature" type="checkbox" v-model="card1.is_creature" style="width: 50px">
        <label for="atk">攻击力</label>
        <input id="atk" type="text" v-model="card1.body[0]" style="width: 50px;">
        <label for="def">防御力</label>
        <input id="def" type="text" v-model="card1.body[1]" style="width: 50px;">
      </div>
      <h3>Card 2</h3>
      <div class="form-control">
        <label>卡框颜色</label>
        <color-selector style="margin-right: 50px" :filter="filterColor"
                        @change="changeColor('card2', $event)"></color-selector>
        <label>效果背景图</label>
        <effect-image-selector @change="changeEffect('card2', $event)"></effect-image-selector>
      </div>
      <div class="form-control">
        <label for="name2">名字</label>
        <input id="name2" type="text" v-model="card2.name" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="cost2">费用</label>
        <input id="cost2" type="text" placeholder="eg: 1,r" v-model="card2.cost_text"
               autocomplete="off">
      </div>
      <div class="form-control">
        <label for="type2">类别</label>
        <input id="type2" type="text" placeholder="完整类别" v-model="card2.type" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="effect2">效果</label>
        <textarea id="effect2" cols="80" rows="5" style="vertical-align: middle"
                  v-model="card2.effect" placeholder="{1}为费用图片，[[xxx]]为异能"></textarea>
      </div>
      <div class="form-control">
        <label for="is_creature2">是否生物？</label>
        <input id="is_creature2" type="checkbox" v-model="card2.is_creature" style="width: 50px">
        <label for="atk2">攻击力</label>
        <input id="atk2" type="text" v-model="card2.body[0]" style="width: 50px;">
        <label for="def2">防御力</label>
        <input id="def2" type="text" v-model="card2.body[1]" style="width: 50px;">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/card-show.less';
</style>

<script>
  import NormalSplitCard from '../Cards/NormalSplitCard.vue'
  import AftermathSplitCard from '../Cards/AftermathSplitCard.vue'
  import KamigawaFlipCard from '../Cards/KamigawaFlipCard.vue'

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
      color: {dot: []},
      effect_background: null,
      show_dot: false,
      is_creature: false,
      body: [0, 0]
    }
  };

  export default {
    components: {
      ColorSelector,
      EffectImageSelector,
      RaritySelector,
    },
    data() {
      return {
        cards: {
          'aftermath': AftermathSplitCard,
          'normal': NormalSplitCard,
          'kamigawa': KamigawaFlipCard,
        },
        show_form: true,
        card_style: 'kamigawa',
        // card
        id: '1',
        version: 'xln',
        rarity: 'common',
        card_url: '',
        is_fuse: false,
        fuse_text: '',
        card1: constructor(),
        card2: constructor(),
      }
    },
    methods: {
      changeColor(card, color) {
        this[card].color = color;
      },
      changeRarity(rarity) {
        this.rarity = rarity;
      },
      changeEffect(card, effect_bg) {
        this[card].effect_background = effect_bg;
      },
      filterColor(color) {
        return color.code.match(/^(MIX)?[WUBRG]{1,2}$/);
      }
    }
  }
</script>
