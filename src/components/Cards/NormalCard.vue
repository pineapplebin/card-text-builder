<template>
  <div id="card" style="width: 300px; border-radius: 5px;
    border: 10px solid black; border-bottom: 15px solid black;
    text-align: left; background: #000;">
    <div style="padding: 3px; border: 1px solid transparent;
                border-bottom-left-radius: 15%; border-bottom-right-radius: 15%;"
         :style="{background: colors[color][2]}">
      <div style='font-family: Beleren, "FZCuSong-B09S", STSong, sans-serif; font-weight: normal;
           font-size: 13pt; padding: 2px 5px; border: solid; border-width: 2px 3px;
           border-radius: 5px; box-shadow: -2px 1px 3px 0 black;
           display: flex; align-items: center; text-align: left;'
           :style="{borderColor:  colors[color][3], background: colors[color][1]}">
        <span style="flex: 1 0 auto;">{{ name }}</span>
        <img v-for="c in cost" :src="$$images.mana[c]" v-if="c" style="width: 18px;
          height: 18px; margin-right: 2px; border-left: 1px solid black;
          border-bottom: 2px solid black; border-radius: 50%;">
      </div>
      <div id="cardImage" style="width: 275px; height: 200px; border: solid;
           border-width: 2px 3px; border-radius: 1px; box-shadow: -2px 1px 3px 0 black;
           background: center -53px no-repeat; background-size: 330px; margin: 0 auto;"
           :style="{backgroundImage: card_image, borderColor: colors[color][3]}">
      </div>
      <div style='font-family: Beleren, STKaiti, sans-serif; font-size: 1em; font-weight: bold;
           padding: 3px; border: solid; border-width: 2px 3px; border-radius: 5px;
           box-shadow: -2px 1px 3px 0 black; text-align: left; display: flex; align-items: center;'
           :style="{borderColor: colors[color][3], background: colors[color][1]}">
        <span style="flex: 1 0 auto;">{{ type }}</span>
        <span style="font-size: 1.2em;" class="ss ss-grad"
              :class="[`ss-${version}`, `ss-${rarity}`]"></span>
      </div>
      <div style="font-size: 10pt; padding: 10px 10px; width: 260px; min-height: 100px;
           display: flex; align-items: center; justify-content: flex-start;
           margin: 0 auto -5px auto; border: solid; border-width: 2px 3px; word-break: break-all;
           border-radius: 1px; box-shadow: -2px 1px 3px 0 black; text-align: left;"
           :style="{borderColor: colors[color][3], background: colors[color][0]}">
        <span v-html="effect_render">{{ effect_render }}</span>
      </div>
      <div style='float: right; right: -5px; bottom: 15px; margin-bottom: -28px;
             font-family: Beleren, sans-serif; border: 1px solid; border-radius: 5px;
             box-shadow: -2px 1px 3px 0 black; position: relative;'
           :style="{background: colors[color][1], borderColor: colors[color][0]}"
           v-if="is_creature">
          <span style="border-top: 2px solid #444; border-right: 2px solid #444;
                border-radius: 5px; display: inline-block; padding: 0 10px;">{{ body[0]
            }}/{{ body[1] }}</span>
      </div>
    </div>
    <div style="font-size: 8pt; color: white; margin-bottom: -12px; height: 15px;">
      <span style="position: relative;">{{ id }}</span>
    </div>
  </div>
</template>

<style lang="less">
  .NormalCreature {
    font-family: sans-serif;
    width: 300px;
    padding: 3px;
    border-radius: 5px;
    border: 10px solid black;
    border-bottom: 15px solid black;
    background: #BD4E30;
    text-align: center;
  }

  .round {
    padding: 3px;
    border: 1px solid transparent;
    border-bottom-left-radius: 15%;
    border-bottom-right-radius: 15%;
  }

  .name {
    font-family: Beleren, STSong, sans-serif;
    font-weight: bold;
    font-size: 14pt;
    padding: 3px;
    border: solid #c30000;
    border-width: 1px 2px;
    border-radius: 5px;
    box-shadow: -2px 0 3px 0 black;
    background: #E6BAA4;
    display: flex;
    align-items: center;
    text-align: left;

    .text {
      flex: 1 0 auto;
    }

    img {
      width: 18px;
      height: 18px;
      margin-right: 2px;
      border-left: 1px solid black;
      border-bottom: 2px solid black;
      border-radius: 50%;
    }
  }

  .image {
    width: 275px;
    height: 200px;
    border: solid #c30000;
    border-width: 1px 2px;
    border-radius: 5px;
    box-shadow: -2px 0 3px 0 black;
    background: center -53px no-repeat;
    background-size: 330px;
    margin: 0 auto;
  }

  .type {
    font-family: "Beleren", "STKaiti";
    font-size: 12pt;
    padding: 3px;
    border: solid #c30000;
    border-width: 1px 2px;
    border-radius: 5px;
    box-shadow: -2px 0 3px 0 black;
    background: #E6BAA4;
    text-align: left;
  }

  .effect {
    font-size: 10pt;
    padding: 10px 10px;
    width: 260px;
    margin: 0 auto;
    border: solid #c30000;
    border-width: 1px 2px;
    border-radius: 5px;
    box-shadow: -2px 0 3px 0 black;
    background: #f8dbd1;
    text-align: left;

    .body {
      float: right;
      right: -15px;
      bottom: -15px;
      font-family: "Beleren";
      border: 2px solid #ffe9e6;
      border-radius: 5px;
      box-shadow: -2px 1px 3px 0 black;
      background: #E6BAA4;
      position: relative;

      span {
        border-top: 2px solid #444;
        border-right: 2px solid #444;
        border-radius: 5px;
        display: inline-block;
        padding: 2px 10px;
        color: rgb(250, 243, 184);
        background: linear-gradient(to right, #FFF, #000);
      }
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        colors: {
          W: ['#FDFDF9', '#EFF5DE', '#DED7B9', '#FFFFFF'],
          U: ['#E4EDF4', '#C8DDEB', '#4EAEDB', '#3888C8'],
          B: ['#EEEEEE', '#CDC7C6', '#4F5149', '#000000'],
          R: ['#F0E6E1', '#F0D7C8', '#BD4E30', '#E95A39'],
          G: ['#DCE6E0', '#C4D2CB', '#7CA782', '#398246'],
          A: ['#D6DFE3', '#E0E7EB', '#9DB5C1', '#F3F3F3'],
          WU: ['#EBEBEB', '#DBCA94', '#FAF3B8', '#FFFFFF #3888C8 #3888C8 #FFFFFF'],
          UB: ['#EBEBEB', '#DBCA94', '#FAF3B8', '#3888C8 #000000 #000000 #3888C8'],
          BR: ['#EBEBEB', '#DBCA94', '#FAF3B8', '#000000 #E95A39 #E95A39 #000000'],
          RG: ['#EBEBEB', '#DBCA94', '#FAF3B8', '#E95A39 #398246 #398246 #E95A39'],
          WG: ['#EBEBEB', '#DBCA94', '#FAF3B8', '#FFFFFF #398246 #398246 #FFFFFF'],
          WB: ['#EBEBEB', '#DBCA94', '#FAF3B8', '#FFFFFF #000000 #000000 #FFFFFF'],
          UR: ['#EBEBEB', '#DBCA94', '#FAF3B8', '#3888C8 #E95A39 #E95A39 #3888C8'],
          BG: ['#EBEBEB', '#DBCA94', '#FAF3B8', '#000000 #398246 #398246 #000000'],
          WR: ['#EBEBEB', '#DBCA94', '#FAF3B8', '#FFFFFF #E95A39 #E95A39 #FFFFFF'],
          UG: ['#EBEBEB', '#DBCA94', '#FAF3B8', '#3888C8 #398246 #398246 #3888C8'],
        },
//        color: 'R',
      }
    },
    props: ['id', 'name', 'cost_text', 'card_url', 'type', 'effect', 'body',
      'is_creature', 'color', 'rarity', 'version'],
    computed: {
      cost() {
        return this.cost_text.split(',').map(t => t.trim())
      },
      card_image() {
        return `url(${this.card_url}`;
      },
      effect_render() {
        return this.$$ability.translate(this.effect);
      }
    }
  }
</script>
