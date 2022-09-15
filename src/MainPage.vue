<template>
  <div id="MainPage">
    <div class="menu" :class="{ focusing: is_focus }">
      <div class="menu-item">
        <img
          src="https://magic.wizards.com/sites/all/themes/wiz_mtg/img/interface/logo-magic-small.png"
          alt
        />
      </div>
      <div
        class="menu-item"
        v-for="(card, key) in card_map"
        :key="key"
        :class="{ selected: selecting_card === key }"
        @click="selectMenu(key)"
      >
        <div class="name">{{ card.name }}</div>
      </div>
      <div
        class="menu-item"
        :class="{ selected: selecting_card === 'conjurer' }"
        @click="selectMenu('conjurer')"
      >
        <div class="name">CardConjurer</div>
      </div>
    </div>
    <div v-if="selecting_card === 'conjurer'"></div>
    <div v-else class="content">
      <div
        class="card-preview"
        :class="{ focusing: is_focus }"
        @click="focusCard"
      >
        <component :is="active_card" :card-data="current_data"></component>
      </div>
      <div class="card-setting" v-show="!is_focus">
        <div class="controller padding">
          <h2>{{ card_map[selecting_card].name }}</h2>
          <el-button
            icon="el-icon-delete"
            circle
            @click="tempDelete"
          ></el-button>
          <el-button icon="el-icon-edit" circle @click="tempSave"></el-button>
        </div>
        <!--<div><span>／</span></div>-->
        <div class="padding">
          <form-renderer ref="form_renderer"></form-renderer>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.menu {
  display: flex;
  height: 50px;
  overflow: hidden;
  background: #222;

  &.focusing {
    max-height: 0;
  }

  .menu-item {
    height: 100%;
    width: 150px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-weight: bold;
    color: #eee;
    border-bottom: 2px solid transparent;

    &.selected {
      color: #d7391c;
      border-bottom-color: #d7391c;
    }

    img {
      width: 80%;
    }
  }
}

.content {
  display: flex;
  width: 100%;
  height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;

  .card-preview {
    display: flex;
    justify-content: center;
    top: 20px;
    padding: 50px;
    width: 40%;
    height: 100%;
    min-width: 550px;

    &.focusing {
      width: 100%;
    }
  }

  .card-setting {
    height: 100%;
    width: 60%;
    border-left: 1px solid #e5e5e5;
    overflow: scroll;

    .controller {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      border-bottom: 1px solid #e5e5e5;
      background: white;

      h2 {
        flex: 1 0 auto;
      }
    }
  }
}
</style>

<script>
import card_map from './templates/card-map'
import FormRenderer from './utils/form-engine/FormRenderer'
import { initData } from './utils/form-engine'

export default {
  name: 'main-page',
  components: {
    FormRenderer,
  },
  data() {
    return {
      card_map,
      selecting_card: 'normal',
      active_card: null,
      current_data: null,
      is_focus: false,
    }
  },
  mounted() {
    this.selectMenu('normal')
  },
  methods: {
    selectMenu(key) {
      this.selecting_card = key

      if (key === 'conjurer') {
        return
      }

      const card = this.card_map[this.selecting_card]
      this.active_card = card.component
      // load temp save
      const saved = localStorage.getItem(`tempsave:${key}`)
      if (saved) {
        this.current_data = JSON.parse(saved)
        this.$notify({
          title: '读取成功',
          message: '读取之前临时保存的数据',
          type: 'success',
          duration: 2000,
        })
      } else this.current_data = initData(card.form)
      const renderer = this.$refs.form_renderer
      renderer.renderForm(card.form, this.current_data)
    },
    tempSave() {
      localStorage.setItem(
        `tempsave:${this.selecting_card}`,
        JSON.stringify(this.current_data)
      )
      this.$notify({
        title: '保存成功',
        message: '刷新或切换模版后可自动读取',
        type: 'success',
        duration: 2000,
      })
    },
    tempDelete() {
      localStorage.removeItem(`tempsave:${this.selecting_card}`)
      this.$notify({
        title: '清除成功',
        message: '保存的临时数据已清除',
        type: 'success',
        duration: 2000,
      })
    },
    focusCard() {
      this.is_focus = !this.is_focus
    },
  },
}
</script>
