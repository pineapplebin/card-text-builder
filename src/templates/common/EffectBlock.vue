<template>
  <div class="EffectBlock" :style="{ width: `${width}px` }">
    <div
      class="effect-border"
      :style="{ background: $$borders.getColorText(border, 'border') }"
    >
      <div
        class="effect"
        @click.stop="showPanel"
        :style="{
          height: `${height - 5}px`,
          background: $$borders.getColorText(border, 'effect'),
        }"
      >
        <div class="icon" v-if="watermark" :style="{ opacity: opacity / 100 }">
          <!--<img :src="watermark" alt="">-->
          <watermark
            :watermark="watermark"
            :border="border"
            :height="height * 0.8"
          ></watermark>
        </div>
        <div class="content">
          <slot>
            <div class="render-effect" v-html="render_effect" />
          </slot>
        </div>
        <div class="double-face-block" v-if="false"></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.EffectBlock {
  margin: 0 auto;
  text-align: left;
  font-family: MPlantin, sans-serif;
}

.effect-border {
  padding: 0 5px 5px 5px;
  background: transparent;

  .effect {
    position: relative;
    padding: 0 10px;
    border: 1px solid #fefefe;
    border-top-color: #dadada;
    border-right-color: #dadada;
    background: transparent;
    box-shadow: inset 0 0 10px 0 rgba(44, 44, 44, 0.3);

    .icon {
      position: absolute;
      width: 100%;
      height: 100%;
      margin-left: -10px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1;

      img {
        height: 80%;
      }
    }

    .content {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      z-index: 5;
    }

    .double-face-block {
      position: absolute;
      right: -6px;
      bottom: 15px;
      width: 10px;
      height: 100px;
      background: red;
    }
  }
}
</style>

<script>
import Watermark from './Watermark/Watermark'

export default {
  components: { Watermark },
  data() {
    return {
      opacity: 100,
    }
  },
  computed: {
    render_effect() {
      return this.$$effect(this.effect || '')
    },
  },
  props: {
    effect: {
      type: String,
      default: '',
    },
    border: {
      type: String,
      default: 'w',
    },
    width: {
      type: Number,
      default: 390,
    },
    height: {
      type: Number,
      default: 188,
    },
    watermark: {
      type: String,
      default: null,
    },
  },
  methods: {
    showPanel() {
      this.$$ps.showPanel(this, ['opacity'])
    },
  },
}
</script>
