<template>
  <div class="LevelUpCard" id="card">
    <div class="background-image" :style="{backgroundImage: `url(${color.background})`}">
      <div class="border-radius-block">
        <div class="border-color-block" :style="{background: color.border}">
          <div class="content-block name-block" style="border-radius: 3% / 50%"
               :style="{backgroundColor: color.name}">
            <span>{{ name }}</span>
            <img v-for="c in cost" :src="$$images['mana'][c]" alt=""
                 v-if="c" :class="{bigger: c.match(/^[2wubrg][wubrg]$/)}">
          </div>
        </div>
      </div>
      <div class="border-radius-block" style="width: 335px; border-radius: 2px;">
        <div class="border-color-block" style="padding-top: 0; padding-bottom: 0;"
             :style="{background: color.border}">
          <div class="content-block image-block" style="border-width: 2px 2px 0 0;"
               :style="{backgroundImage: card_image}"></div>
        </div>
      </div>
      <div class="border-radius-block">
        <div class="border-color-block" :style="{background: color.border}">
          <div class="content-block type-block" style="border-radius: 2% / 50%"
               :style="{backgroundColor: color.type}">
            <span class="dot" v-if="show_dot">
              <span v-for="d in color.dot" :style="{background: d}"></span>
            </span>
            <span class="type">{{ type }}</span>
            <span class="symbol">
              <img :src="$$images.getSymbol(version, rarity)"/>
            </span>
            <!--<span style="font-size: 1.1em;" class="ss ss-grad"-->
            <!--:class="[`ss-${version}`, `ss-${rarity}`]"></span>-->
          </div>
        </div>
      </div>
      <div class="border-radius-block" style="width: 335px; border-radius: 0 0 5px 5px;">
        <div class="border-color-block" style="padding-top: 0;"
             :style="{background: color.border}">
          <div class="content-block effect-block" style="border-width: 1px 2px 2px 1px"
               :style="{background: color.effect}">
            <!--<div class="content" v-html="effect_render"-->
            <!--:style="{backgroundImage: `url(${effect_background})`}">-->
            <!--{{ effect_render }}-->
            <!--</div>-->
            <div class="content">
              <div class="level-block" :style="{background: color.level1}">
                <div class="effect">
                  <span class="text" v-html="effect_render_1">{{ effect_render_1 }}</span>
                </div>
              </div>
              <div class="level-block" :style="{background: color.level2}">
                <div class="effect">
                  <div class="level-tag" :style="{background: color.level2_body}">
                    <div class="right-arrow" :style="{background: color.level2_body}">
                      <span :style="{borderRight: `1px solid ${color.effect}`}"></span>
                    </div>
                    <div class="level-text"
                         :style="{borderLeft: `1px solid ${color.effect}`}">
                      <span style="font-size: 4pt; margin-bottom: -5px; color: #444;">等级</span>
                      <span style="font-size: 14pt">
                        {{ levels.level2.level_from }}-{{ levels.level2.level_to }}
                      </span>
                    </div>
                  </div>
                  <span class="text" v-html="effect_render_2">{{ effect_render_2 }}</span>
                </div>
              </div>
              <div class="level-block" :style="{background: color.level3}">
                <div class="effect">
                  <div class="level-tag" :style="{background: color.level3_body}">
                    <div class="right-arrow" :style="{background: color.level3_body}">
                      <span :style="{borderRight: `1px solid ${color.effect}`}"></span>
                    </div>
                    <div class="level-text"
                         :style="{borderLeft: `1px solid ${color.effect}`}">
                      <span style="font-size: 4pt; margin-bottom: -5px; color: #444;">等级</span>
                      <span style="font-size: 14pt">
                        {{ levels.level3.level_from }}+
                      </span>
                    </div>
                  </div>
                  <span class="text" v-html="effect_render_3">{{ effect_render_3 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="extra-info">
      <span class="id">{{ id }}</span>
      <div class="body" :style="{
                borderColor: color.level1_body, background: color.level1_body, top: '-152px'}">
        <span :style="{backgroundColor: color.level1_body, color: color.body_font}">
          {{ levels.level1.atk }}/{{ levels.level1.def }}
        </span>
      </div>
      <div class="body" :style="{
                borderColor: color.level2_body, background: color.level2_body, top: '-100px'}">
        <span :style="{backgroundColor: color.level2_body, color: color.body_font}">
          {{ levels.level2.atk }}/{{ levels.level2.def }}
        </span>
      </div>
      <div class="body" :style="{
                borderColor: color.level3_body, background: color.level3_body, top: '-48px'}">
        <span :style="{backgroundColor: color.level3_body, color: color.body_font}">
          {{ levels.level3.atk }}/{{ levels.level3.def }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .LevelUpCard {
    width: 350px;
    border: 13px solid #202020;
    border-radius: 5px;
    background: #202020;
    text-align: center;
  }

  .background-image {
    background-position: center;
    background-size: 100%;
    border-radius: 0 0 15% 15%;
  }

  .border-radius-block {
    /*border-radius: 10px;*/
    border-radius: ~"3% / 50%";
    overflow: hidden;
    /*border-left: 3px solid black;*/
    box-shadow: -3px 3px 2px 0 black;
    margin: 0 auto;

    .border-color-block {
      padding: 8px;

      .content-block {
        border: solid black;
        border-width: 0 0 2px 2px;
      }
    }
  }

  .name-block {
    font-family: Beleren, "FZCuSong-B09S", sans-serif;
    font-size: 14pt;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 3px 3px 5px;
    text-align: left;

    span {
      flex: 1 0 auto;
    }

    img {
      display: inline-block;
      width: 18px;
      margin-right: 2px;
      border-left: 1px solid black;
      border-bottom: 2px solid black;
      border-radius: 50%;

      &.bigger {
        width: 22px;
        margin-bottom: 1px;
      }
    }
  }

  .image-block {
    height: 230px;
    background: center -60px no-repeat;
    background-size: 375px;
  }

  .type-block {
    font-family: Beleren, "Weibei SC", STKaiti, sans-serif;
    font-size: 13pt;
    font-weight: bold;
    height: 19px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2px 8px 2px 5px;
    text-align: left;

    .dot {
      margin: 0 3px;
      height: 10px;
      width: 10px;
      border: 1px solid black;
      border-radius: 50%;
      box-shadow: 0 -1px 2px 0 #333;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      transform: rotate(45deg);

      span {
        height: 20px;
        width: 20px;
        display: inline-block;
      }
    }

    .type {
      flex: 1 0 auto;
    }

    .symbol {
      display: inline-flex;
      align-items: center;

      img {
        height: 20px;
      }
    }
  }

  .effect-block {

    .content {
      height: 154px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .level-block {
        height: 50.6px;
        width: 100%;

        .effect {
          font-family: MPlantin, sans-serif;
          font-size: 11pt;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          text-align: left;
          height: 100%;
          width: 88%;

          .text {
            padding: 0 5px;
          }

          .level-tag {
            display: inline-block;
            margin-left: 5px;
            margin-right: 20px;
            border: solid #555;
            border-width: 1px 0 2px 2px;
            border-radius: 2px 0 0 2px;
            padding: 3px 0 3px 3px;

            .right-arrow {
              z-index: 1;
              position: relative;
              display: inline-block;
              width: 25px;
              height: 25px;
              transform: rotate(45deg);
              float: right;
              margin: -28px;
              top: 30px;
              right: 13px;
              border: solid #555;
              border-width: 1px 1px 0 0;
              border-radius: 2px;
              padding: 3px 3px 0 0;
              text-align: right;

              span {
                display: inline-block;
                width: 22px;
                height: 22px;
                border-top: 2px solid black;
              }
            }

            .level-text {
              z-index: 10;
              position: relative;
              float: left;
              font-family: Beleren, sans-serif;
              height: 30px;
              width: 35px;
              border-top: 2px solid black;
              border-top-right-radius: 2px;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
          }
        }
      }
    }
  }

  .extra-info {
    height: 15px;
    text-align: left;

    .id {
      font-family: "Gill Sans", sans-serif;
      font-size: 9pt;
      position: relative;
      top: 2px;
      color: white;
    }

    .body {
      font-family: Beleren, sans-serif;
      font-size: 12pt;
      position: relative;
      float: right;
      top: -10px;
      bottom: 10px;
      margin-bottom: -100px;
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
        padding: 1px 10px;
        text-align: center;
      }
    }
  }

  .test {
    background: linear-gradient(to right, #F5F5ED, #E2EDF5);
  }
</style>

<script>
  export default {
    data() {
      return {}
    },
    props: ['id', 'name', 'cost_text', 'card_url', 'type', 'levels',
      'is_creature', 'color', 'rarity', 'version', 'effect_background', 'show_dot'],
    computed: {
      cost() {
        return this.cost_text.split(',').map(t => t.trim())
      },
      card_image() {
        return `url(${this.card_url}`;
      },
      effect_render_1() {
        return this.$$ability.translate(this.levels.level1.effect);
      },
      effect_render_2() {
        return this.$$ability.translate(this.levels.level2.effect);
      },
      effect_render_3() {
        return this.$$ability.translate(this.levels.level3.effect);
      },
    }
  }
</script>

