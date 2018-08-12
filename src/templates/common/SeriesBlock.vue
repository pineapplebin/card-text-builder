<template>
  <div class="SeriesBlock">
    <div>
      <span>{{ series ? series.toUpperCase() : 'XXX' }}</span>
      <span> • </span>
      <span>{{ padZero(number) }}</span>
      <span>/</span>
      <span>{{ padZero($$series.getSeriesAmount(series)) }}</span>
      <span>&nbsp;{{ rarity }}</span>
    </div>
    <!--{{ series ? series.toUpperCase() : '___' }} • {{ padZero(number) }}/{{-->
    <!--padZero($$series.getSeriesAmount(series)) }} {{ parseRarity(rarity) }}-->
  </div>
</template>

<style lang="less" scoped>
  .SeriesBlock {
    text-align: left;
    font-family: "Gill Sans", sans-serif;
    color: white;
    font-weight: lighter;
    font-size: 12px;
  }
</style>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      series: {
        type: String,
        default: '___'
      },
      number: {
        type: Number,
        default: 1,
      },
      rarity: {
        type: String,
        default: 'C'
      }
    },
    methods: {
      padZero (n) {
        let sn = '' + n
        while (sn.length < 3) {
          sn = '0' + sn
        }
        return sn
      },
    }
  }
</script>
