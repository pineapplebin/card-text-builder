<template>
  <div class="SeriesBlock">
    {{ series ? series.toUpperCase() : '___' }} • {{ padZero(number) }}/{{
    padZero($$series.getSeriesAmount(series)) }} {{ parseRarity(rarity) }}
  </div>
</template>

<style lang="less" scoped>
  .SeriesBlock {
    text-align: left;
    font-family: "Gill Sans", sans-serif;
    color: white;
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
      parseRarity (r) {
        if (!r)
          return 'C'
        return r[0].toUpperCase()
      }
    }
  }
</script>
