<template>
  <div id="MainPage">
    <el-menu class="menu" mode="horizontal" background-color="#545c64"
             text-color="#fff" active-text-color="#ffd04b" ref="menu" default-active="normal"
             @select="selectMenu" :class="{focusing: is_focus}">
      <el-submenu index="1">
        <template slot="title">卡片模版</template>
        <el-menu-item v-for="(card, key) in card_map" :key="key" :index="key">
          {{ card.name }}
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <div class="content">
      <div class="card-preview padding" @click="focusCard" :class="{focusing: is_focus}">
        <component :is="active_card" :card-data="current_data"></component>
      </div>
      <div class="card-setting padding" v-show="!is_focus">
        <div style="text-align: right">
          <el-button type="primary" icon="el-icon-edit" circle @click="tempSave"></el-button>
        </div>
        <h2>{{ selecting_card }}</h2>
        <!--<div><span>／</span></div>-->
        <form-renderer ref="form_renderer"></form-renderer>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .menu {
    overflow: hidden;

    &.focusing {
      max-height: 0;
    }
  }

  .content {
    display: flex;
    width: 100%;
    position: relative;

    .card-preview {
      display: flex;
      justify-content: center;
      position: sticky;
      position: -webkit-sticky;
      top: 20px;
      padding: 50px;
      width: 40%;

      &.focusing {
        width: 100%;
      }
    }

    .card-setting {
      width: 60%;
      border-left: 1px solid #e5e5e5;
    }
  }
</style>

<script>
  import card_map from './templates/card-map'
  import FormRenderer from './utils/form-engine/FormRenderer'
  import {initData} from './utils/form-engine'

  export default {
    name: 'main-page',
    components: {
      FormRenderer,
    },
    data () {
      return {
        card_map,
        selecting_card: null,
        active_card: null,
        current_data: null,
        is_focus: false,
      }
    },
    mounted () {
      this.selectMenu('normal')
    },
    methods: {
      selectMenu (key) {
        this.selecting_card = key
        const card = this.card_map[this.selecting_card]
        this.active_card = card.component
        // load temp save
        const saved = localStorage.getItem(`tempsave:${key}`)
        if (saved) {
          this.current_data = JSON.parse(saved)
          this.$notify({ title: '读取成功', message: '读取之前临时保存的数据', type: 'success' })
        }
        else
          this.current_data = initData(card.form)
        const renderer = this.$refs.form_renderer
        renderer.renderForm(card.form, this.current_data)
      },
      tempSave () {
        localStorage.setItem(`tempsave:${this.selecting_card}`, JSON.stringify(this.current_data))
        this.$notify({ title: '保存成功', message: '刷新或切换模版后可自动读取', type: 'success' })
      },
      focusCard () {
        this.is_focus = !this.is_focus
      }
    },
  }
</script>
