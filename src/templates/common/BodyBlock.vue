<template>
  <div class="body"
       :style="{bottom: `${bottom}px`, right: `${right}px`,
         borderColor: border_color, background: border_color}">
        <span :style="{backgroundColor: border_color, color: font_color}">
          {{ body_list[0] }}/{{ body_list[1] }}
        </span>
  </div>
</template>

<style lang="less" scoped>
  .body {
    position: absolute;
    font-family: Beleren, sans-serif;
    font-size: 16pt;
    border: 3px solid white;
    border-radius: ~'10% / 50%';
    box-shadow: inset 2px -2px 2px rgba(250, 250, 250, .9), -2px 1px 3px 0 black;
    background: white;

    span {
      min-width: 75px;
      border-top: 2px solid #444;
      border-right: 2px solid #444;
      /*border-radius: 8px;*/
      border-radius: ~'10% / 50%';
      display: inline-block;
      padding: 0 2px;
      text-align: center;
      box-shadow: inset 0 0 5px rgba(33, 33, 33, .5);
    }
  }
</style>

<script>
  export default {
    props: {
      right: {
        type: Number,
        default: 0,
      },
      bottom: {
        type: Number,
        default: 0,
      },
      border: {
        type: String,
        default: 'w',
      },
      body: {
        type: String,
        default: ''
      }
    },
    computed: {
      border_color () {
        return this.$$borders.getColorText(this.border, 'body')
      },
      font_color () {
        return this.$$borders.getColorText(this.border, 'body_font')
      },
      body_list () {
        if (!this.body)
          return [0, 0]
        const splited = this.body.split('/')
        return [splited[0] || 0, splited[1] || 0]
      }
    }
  }
</script>
