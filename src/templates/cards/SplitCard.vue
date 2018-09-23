<template>
  <base-card style="padding: 20px;">
    <div class="content">
      <div class="split-part" style="margin-bottom: 11px">
        <div class="card-face">
          <div class="bg">
            <normal-bg padding="0" :image-url="cardData.image_url"
                       :bg="$$images.bg[cardData.bg_style1]"></normal-bg>
          </div>
          <div class="main">
            <name-block :width="278" :name="cardData.name1" :cost-text="cardData.cost1"
                        :border="cardData.border_style1"></name-block>
            <image-block :width="258" :height="172" :border="cardData.border_style1">
              <div class="part-image-holder" slot-scope="{ brightness, contrast, saturate }">
                <div class="part-image part-image-up"
                     :class="{ 'old-series': cardData.is_old_series }"
                     :style="{backgroundImage: `url(${cardData.image_url})`, filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`}">
                </div>
              </div>
            </image-block>
            <type-block :type="cardData.type1" :series="cardData.series" :rarity="cardData.rarity"
                        :border="cardData.border_style1"></type-block>
            <effect-block :width="258" :height="132"
                          :border="cardData.border_style1" :effect="cardData.effect1"
                          :watermark="cardData.effect_watermark1"></effect-block>
          </div>
        </div>
      </div>
      <div class="split-part">
        <div class="card-face">
          <div class="bg">
            <normal-bg padding="0" :image-url="cardData.image_url"
                       :bg="$$images.bg[cardData.bg_style2]"></normal-bg>
          </div>
          <div class="main">
            <name-block :width="278" :name="cardData.name2" :is-legendary="cardData.is_legendary2"
                        :cost-text="cardData.cost2" :border="cardData.border_style2"></name-block>
            <image-block :width="258" :height="172" :border="cardData.border_style2">
              <div class="part-image-holder" slot-scope="{ brightness, contrast, saturate }">
                <div class="part-image part-image-down"
                     :class="{ 'old-series': cardData.is_old_series }"
                     :style="{backgroundImage: `url(${cardData.image_url})`, filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturate}%)`}">
                </div>
              </div>
            </image-block>
            <type-block :type="cardData.type2" :series="cardData.series" :rarity="cardData.rarity"
                        :border="cardData.border_style2"></type-block>
            <effect-block :width="258" :height="132"
                          :border="cardData.border_style2" :effect="cardData.effect2"
                          :watermark="cardData.effect_watermark2"></effect-block>
          </div>
        </div>
      </div>
    </div>
    <series-block style="margin-top: 10px" :series="cardData.series"
                  :number="$$tools.getNumberFromImage(cardData.image_url)"
                  :rarity="$$tools.getSeriesRarity(cardData.rarity, cardData.type)"></series-block>
  </base-card>
</template>

<style scoped lang="less">
  .content {
    height: 567px;

    .split-part {
      width: 410px;
      height: 278px;
      display: flex;
      justify-content: center;
      align-items: center;

      .card-face {
        position: relative;
        transform-origin: center center;
        transform: rotate(-90deg);
        width: 278px;
        height: 410px;

        .bg {
          position: absolute;
          width: 100%;
          height: 100%;

          /deep/ .bigger {
            height: 382px;
          }

          /deep/ .smaller {
            width: 258px;
          }
        }

        .main {
          position: absolute;
          width: 100%;
          height: 100%;
          filter: drop-shadow(-3px 2px 2px #191919);
          text-align: center;
        }
      }
    }
  }

  .part-image-holder {
    width: 100%;
    height: 100%;
    overflow: hidden;

    .part-image {
      width: 100%;
      height: 246px;
      transform: rotate(90deg);
      transform-origin: center center;
      background-repeat: no-repeat;
      background-size: 461px;
    }

    .part-image-up {
      background-position-x: -74px;
      background-position-y: -37px;
    }

    .part-image-down {
      background-position-x: -74px;
      background-position-y: -331px;
    }
  }
</style>

<script>
  import NormalBg from '../common/NormalBg'
  import NameBlock from '../common/NameBlock'
  import ImageBlock from '../common/ImageBlock'
  import TypeBlock from '../common/TypeBlock'
  import EffectBlock from '../common/EffectBlock'
  import SeriesBlock from '../common/SeriesBlock'
  import {TextField, CheckBoxField, SelectField, TextareaField} from '../../utils/form-engine/fields'
  import {fetchCardInfo, api_parser, getBorderOptions, getBgOptions, getWatermarkOptions} from './common'

  const form = {
    api: TextField({
      label: '加载数据', onchange: (url, form) => {
        fetchCardInfo(url).then(data => {
          if (!data) return;
        })
      }
    }),
    series: TextField({ label: '系列编号' }),
    rarity: SelectField({
      label: '稀有度', options: [
        { label: '普通', value: 'common' },
        { label: '非普通', value: 'uncommon' },
        { label: '稀有', value: 'rare' },
        { label: '秘稀', value: 'mythic' },
      ]
    }),
    image_url: TextField({ label: '卡图地址' }),
    border_style1: SelectField({ label: '边框样式(上)', options: getBorderOptions() }),
    bg_style1: SelectField({ label: '背景样式(上)', options: getBgOptions() }),
    name1: TextField({ label: '名字(上)' }),
    cost1: TextField({ label: '法术力费用(上)' }),
    type1: TextField({ label: '类别(上)' }),
    effect1: TextareaField({ label: '效果(上)' }),
    effect_watermark1: SelectField({ label: '效果栏水印(上)', options: getWatermarkOptions() }),
    border_style2: SelectField({ label: '边框样式(下)', options: getBorderOptions() }),
    bg_style2: SelectField({ label: '背景样式(下)', options: getBgOptions() }),
    name2: TextField({ label: '名字(下)' }),
    cost2: TextField({ label: '法术力费用(下)' }),
    type2: TextField({ label: '类别(下)' }),
    effect2: TextareaField({ label: '效果(下)' }),
    effect_watermark2: SelectField({ label: '效果栏水印(下)', options: getWatermarkOptions() }),
  }

  export default {
    form,
    components: {
      NormalBg,
      NameBlock,
      ImageBlock,
      TypeBlock,
      EffectBlock,
      SeriesBlock,
    },
    props: {
      cardData: {
        type: Object,
        default: () => {
        },
      }
    },
  }
</script>
