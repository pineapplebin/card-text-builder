<template>
  <div class="cardshow">
    <div class="cardshow-block">
      <div style="margin-right: 10px">
        <double-face-card :id="up.id" :name="up.name" :cost_text="up.cost_text"
                          :card_url="up.card_url"
                          :type="up.type" :effect="up.effect" :body="[up.atk, up.def]"
                          :is_creature="up.is_creature" :color="up.background" :rarity="up.rarity"
                          :version="up.version" :effect_background="up.effect_background"
                          :double_image="up.double_image" :back_body="up.back_body"
                          :show_dot="up.show_dot"
                          key="up"></double-face-card>
      </div>
      <div>
        <double-face-card :id="down.id" :name="down.name" :cost_text="down.cost_text"
                          :card_url="down.card_url" :type="down.type" :effect="down.effect"
                          :body="[down.atk, down.def]" :is_creature="down.is_creature"
                          :color="down.background" :rarity="down.rarity" :version="down.version"
                          :effect_background="down.effect_background" :show_dot="down.show_dot"
                          :double_image="down.double_image" :is_double_back="true"
                          key="down"></double-face-card>
      </div>
    </div>
    <hr>
    <button @click="show_form = !show_form">隐藏／显示表单</button>
    <button @click="showing_up = !showing_up">{{ showing_up ? '切换背面' : '切换正面' }}</button>
    <div class="form" v-show="show_form && showing_up">
      <div class="form-control">
        <label>卡框颜色</label>
        <color-selector style="margin-right: 50px" :filter="$$filter.only(/^[WUBRGM]\w*/)"
                        @change="changeColor" key="upcolor"></color-selector>
        <label>效果背景图</label>
        <effect-image-selector @change="changeEffect"></effect-image-selector>
      </div>
      <div class="form-control">
        <label>稀有度</label>
        <rarity-selector @change="changeRarity" key="uprarity"></rarity-selector>
        <label for="up_version" style="margin-left: 50px;">卡包</label>
        <input id="up_version" type="text" v-model="up.version" placeholder="Keyrune code"
               style="width: 50px;">
      </div>
      <div class="form-control">
        <label for="up_double_image">双面牌标志</label>
        <select id="up_double_image" v-model="up.double_image" style="width: 150px;">
          <option v-for="(img, n) in DOUBLE_ICONS" :value="img">{{ n }}</option>
        </select>
        <label>背面攻防</label>
        <input type="text" v-model="up.back_body[0]" style="width: 30px;">
        <input type="text" v-model="up.back_body[1]" style="width: 30px;">
      </div>
      <div class="form-control">
        <label for="up_id">ID</label>
        <input id="up_id" type="text" v-model="up.id" autocomplete="off" placeholder="美版编号">
      </div>
      <div class="form-control">
        <label for="up_name">名字</label>
        <input id="up_name" type="text" v-model="up.name" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="up_cost">费用</label>
        <input id="up_cost" type="text" placeholder="eg: 1,r" v-model="up.cost_text"
               autocomplete="off">
      </div>
      <div class="form-control">
        <label for="up_url">图片链接</label>
        <input id="up_url" type="text" placeholder="gatherer.wizards.com的图片"
               v-model="up.card_url" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="up_type">类别</label>
        <input id="up_type" type="text" placeholder="完整类别"
               v-model="up.type" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="up_effect">效果</label>
        <textarea id="up_effect" cols="80" rows="5" style="vertical-align: middle"
                  v-model="up.effect" placeholder="{1}为费用图片，[[xxx]]为异能"></textarea>
      </div>
      <div class="form-control">
        <label for="up_is_creature">是否生物？</label>
        <input id="up_is_creature" type="checkbox" v-model="up.is_creature" style="width: 50px">
        <label for="up_atk">攻击力</label>
        <input id="up_atk" type="text" v-model="up.atk" style="width: 50px;">
        <label for="up_def">防御力</label>
        <input id="up_def" type="text" v-model="up.def" style="width: 50px;">
      </div>
    </div>
    <div class="form" v-show="show_form && !showing_up">
      <div class="form-control">
        <label>卡框颜色</label>
        <color-selector style="margin-right: 50px" :filter="$$filter.only(/^DB/)"
                        @change="changeColor"></color-selector>
        <label>效果背景图</label>
        <effect-image-selector @change="changeEffect"></effect-image-selector>
      </div>
      <div class="form-control">
        <label>稀有度</label>
        <rarity-selector @change="changeRarity"></rarity-selector>
        <label for="version" style="margin-left: 50px;">卡包</label>
        <input id="version" type="text" v-model="down.version" placeholder="Keyrune code"
               style="width: 50px;">
      </div>
      <div class="form-control">
        <label for="double_image">双面牌标志</label>
        <select id="double_image" v-model="down.double_image" style="width: 150px;">
          <option v-for="(img, n) in DOUBLE_ICONS" :value="img">{{ n }}</option>
        </select>
      </div>
      <div class="form-control">
        <label for="id">ID</label>
        <input id="id" type="text" v-model="down.id" autocomplete="off" placeholder="美版编号">
      </div>
      <div class="form-control">
        <label for="name">名字</label>
        <input id="name" type="text" v-model="down.name" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="cost">费用</label>
        <input id="cost" type="text" placeholder="eg: 1,r" v-model="down.cost_text"
               autocomplete="off">
      </div>
      <div class="form-control">
        <label for="url">图片链接</label>
        <input id="url" type="text" placeholder="gatherer.wizards.com的图片"
               v-model="down.card_url" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="type">类别</label>
        <input id="type" type="text" placeholder="完整类别"
               v-model="down.type" autocomplete="off">
      </div>
      <div class="form-control">
        <label for="effect">效果</label>
        <textarea id="effect" cols="80" rows="5" style="vertical-align: middle"
                  v-model="down.effect" placeholder="{1}为费用图片，[[xxx]]为异能"></textarea>
      </div>
      <div class="form-control">
        <label for="is_creature">是否生物？</label>
        <input id="is_creature" type="checkbox" v-model="down.is_creature"
               @change="changeBackIsCreature" style="width: 50px">
        <label for="atk">攻击力</label>
        <input id="atk" type="text" v-model="down.atk" style="width: 50px;">
        <label for="def">防御力</label>
        <input id="def" type="text" v-model="down.def" style="width: 50px;">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '../../assets/css/card-show.less';
</style>

<script>
  import DoubleFaceCard from '../Cards/DoubleFaceCard.vue'
  import ColorSelector from '../Utils/ColorSelector.vue'
  import RaritySelector from '../Utils/RaritySelector.vue'
  import EffectImageSelector from '../Utils/EffectImageSelector.vue'

  import sun_circle from '../../assets/double/sun_circle.png'
  import night_circle from '../../assets/double/night_circle.png'
  import origin from '../../assets/double/ccorner.png'
  import planeswalker from '../../assets/double/planeswalker.png'
  import ixalan from '../../assets/double/ixalan.png'

  const constrctor = () => {
    return {
      id: '', name: '', cost: [], cost_text: '', card_url: '', url: '', type: '',
      effect: '', atk: 0, def: 0, is_creature: true, background: {dot: []}, rarity: 'common',
      version: 'xln', effect_background: 'none', double_image: null, back_body: [0, 0],
      show_dot: false,
    }
  };

  export default {
    components: {
      DoubleFaceCard,
      ColorSelector,
      RaritySelector,
      EffectImageSelector,
    },
    data() {
      return {
        DOUBLE_ICONS: {
          "sun": sun_circle,
          "night": night_circle,
          "origin": origin,
          "planeswalker": planeswalker,
          "ixalan": ixalan,
        },
        up: constrctor(),
        down: constrctor(),
        show_form: true,
        showing_up: true,
      }
    },
    methods: {
      changeColor(color) {
        if (this.showing_up)
          this.up.background = color;
        else
          this.down.background = color;
      },
      changeRarity(rarity) {
        if (this.showing_up)
          this.up.rarity = rarity;
        else
          this.down.rarity = rarity;
      },
      changeEffect(effect) {
        if (this.showing_up)
          this.up.effect_background = effect;
        else
          this.down.effect_background = effect;
      },
      changeBackIsCreature() {
        this.up.back_body = this.down.is_creature ? [0, 0] : []
      }
    }
  }
</script>
