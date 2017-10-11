<template>
  <div id="card" class="RealNormalCard">
    <div class="inner-background" :style="{backgroundImage: `url(${default_white})`}">
      <div class="block-border" :style="{borderRadius: '12px'}">
        <div class="holder name-holder">
          <span class="text">{{ name }}</span>
          <img v-for="c in cost" :src="$$images['mana'][c]" alt="" v-if="c">
        </div>
      </div>
      <div class="block-border" style="width: 308px">
        <div class="holder image-holder" :style="{backgroundImage: card_image}"></div>
      </div>
      <div class="block-border" :style="{borderRadius: '12px'}">
        <div class="holder type-holder">
          <span class="text">{{ type }}</span>
          <span></span>
        </div>
      </div>
      <div class="block-border" style="width: 308px; margin-bottom: -10px;">
        <div class="holder effect-holder" v-html="effect_render">{{ effect_render }}</div>
      </div>
    </div>
    <div class="card-info">
      <span class="id">{{ id }}</span>
      <span class="body"><span>{{ body[0] }}/{{ body[1] }}</span></span>
    </div>
  </div>
</template>

<style lang="less">
  .RealNormalCard {
    width: 350px;
    border: 13px solid black;
    border-radius: 5px;
    background: #000;
    text-align: center;
  }

  .inner-background {
    border: 1px solid transparent;
    background-size: auto;
    border-radius: 5px 5px 15% 15%;
    padding: 5px 2px 5px 5px;
  }

  .block-border {
    border: solid white;
    border-width: 2px 3px;
    box-shadow: -3px 2px 1px 0 black;
    margin: -1px auto 0 auto;
  }

  .holder {
    background: rgb(255, 255, 255);
    border: 1px solid #404040;
    box-shadow: -1px 1px 0 0 #AAA;
    text-align: left;
  }

  .name-holder {
    height: 25px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    text-align: left;
    padding: 0 10px;
    font-family: Beleren, "FZCuSong-B09S", sans-serif;
    font-size: 14pt;

    .text { flex: 1 0 auto; }

    img {
      display: inline-block;
      width: 18px;
      margin-right: 2px;
      border-left: 1px solid black;
      border-bottom: 2px solid black;
      border-radius: 50%;
    }
  }

  .image-holder {
    height: 225px;
    margin: 0 auto;
    background: center -55px no-repeat;
    background-size: 360px;
  }

  .type-holder {
    font-family: Beleren, STKaiti, sans-serif;
    height: 20px;
    border-radius: 13px;
    display: flex;
    align-items: center;
    padding: 0 10px;

    .text { flex: 1 0 auto; }
  }

  .effect-holder {
    min-height: 170px;
    border-width: 1px 1px 0 0;
    font-size: 11pt;
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    word-break: break-all;
    text-align: left;
  }

  .card-info {
    max-height: 18px;
    text-align: left;

    .id {
      display: inline-block;
      position: relative;
      bottom: -5px;
      color: white;
      font-size: 10pt;
    }

    .body {
      margin-bottom: -10px;
      font-family: Beleren, sans-serif;
      font-size: 13pt;
      float: right;
      position: relative;
      right: 10px;
      bottom: 15px;
      border: 2px solid white;
      border-radius: 8px;
      box-shadow: -2px 1px 3px 0 black;
      background: white;

      span {
        border-top: 2px solid #444;
        border-right: 2px solid #444;
        border-radius: 8px;
        display: inline-block;
        min-width: 30px;
        padding: 0 10px;
        text-align: center;
      }
    }
  }
</style>

<script>
  import default_white from '../../assets/backgound/default_white.jpg'

  export default {
    data () {
      return {
        default_white
      }
    },
    props: ['id', 'name', 'cost_text', 'card_url', 'type', 'effect', 'body',
      'is_creature', 'color', 'rarity'],
    computed: {
      cost () {
        return this.cost_text.split(',').map(t => t.trim())
      },
      card_image () {
        return `url(${this.card_url}`;
      },
      effect_render () {
        return this.$$ability.translate(this.effect);
      }
    }
  }
</script>
