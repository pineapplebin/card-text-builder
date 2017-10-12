<template>
  <div class="CardShow">
    <div class="cardshow">
      <component :is="cards[card]" :id="id" :name="name"
                 :cost_text="cost_text" :card_url="card_url" :type="type"
                 :effect="effect" :body="[atk, def]" :is_creature="is_creature"
                 :color="background" :rarity="rarity" :version="version"></component>
      <!--<component :is="cards['RealNormalCard']" :id="id" :name="name"-->
      <!--:cost_text="cost_text" :card_url="card_url" :type="type"-->
      <!--:effect="effect" :body="[atk, def]" :is_creature="is_creature"-->
      <!--:color="background" :rarity="rarity" :version="version"></component>-->
    </div>
    <hr>
    <button @click="show_form = !show_form">隐藏／显示表单</button>
    <div class="form" v-show="show_form">
      <div class="form-control">
        <label for="background">卡框颜色</label>
        <select id="background" v-model="background" style="width: 100px; margin-right: 100px;">
          <option value="W">白色</option>
          <option value="U">蓝色</option>
          <option value="B">黑色</option>
          <option value="R">红色</option>
          <option value="G">绿色</option>
          <option value="A">神器</option>
          <option value="WU">白蓝</option>
          <option value="UB">蓝黑</option>
          <option value="BR">黑红</option>
          <option value="RG">红绿</option>
          <option value="WG">白绿</option>
          <option value="WB">白黑</option>
          <option value="UR">蓝红</option>
          <option value="BG">黑绿</option>
          <option value="WR">白红</option>
          <option value="UG">蓝绿</option>
        </select>
        <label for="rarity">稀有度</label>
        <select id="rarity" v-model="rarity">
          <option value="common">Common</option>
          <option value="uncommon">Uncommon</option>
          <option value="rare">Rare</option>
          <option value="mythic">Mythic</option>
          <option value="foil">Foil</option>
        </select>
        <label for="version" style="margin-left: 100px;">卡包</label>
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
  .cardshow {
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  .form {
    width: 80%;
    margin: 0 auto;
    text-align: left;
    overflow-y: scroll;

    .form-control {
      label {
        display: inline-block;
        width: 100px;
      }
      input {
        height: 25px;
        width: 500px;
      }
    }
  }
</style>

<script>
  import NormalCard from './Cards/NormalCard.vue'
  import RealNormalCard from './Cards/RealNormalCard.vue'
  import ArenaNormalCard from './Cards/ArenaNormalCard.vue'

  export default {
    data() {
      return {
        show_form: true,
        // card
        cards: {
          ArenaNormalCard,
        },
        card: 'ArenaNormalCard',
        id: '',
        name: '',
        cost: [],
        cost_text: '',
        card_url: '',
        url: '',
        type: '',
        effect: '',
        atk: 0,
        def: 0,
        is_creature: true,
        background: 'W',
        rarity: 'common',
        version: 'xln',
      }
    },
    methods: {}
  }
</script>
