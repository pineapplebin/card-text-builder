<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 395 75">
    <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
      <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21        ">
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
          <rdf:Description rdf:about=""/>
        </rdf:RDF>
      </x:xmpmeta>
      <?xpacket end="w"?>
    </metadata>
    <defs>
      <linearGradient id="MyGradient">
        <stop offset="35%" :stop-color="leftColor"/>
        <stop offset="65%" :stop-color="rightColor"/>
      </linearGradient>
      <filter id="innershadow" x0="-50%" y0="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="0" result="blur"></feGaussianBlur>
        <feOffset dy="0" dx="0"></feOffset>
        <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite>
        <feFlood flood-color="#fff" flood-opacity="0.3"></feFlood>
        <feComposite in2="shadowDiff" operator="in"></feComposite>
        <feComposite in2="SourceGraphic" operator="over" result="firstfilter"></feComposite>
        <feGaussianBlur in="firstfilter" stdDeviation="0" result="blur2"></feGaussianBlur>
        <feOffset dy="1" dx="-1"></feOffset>
        <feComposite in2="firstfilter" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"></feComposite>
        <feFlood flood-color="#fff" flood-opacity="0.3"></feFlood>
        <feComposite in2="shadowDiff" operator="in"></feComposite>
        <feComposite in2="firstfilter" operator="over"></feComposite>
      </filter>
    </defs>
    <path id="legend" data-name="legend" class="cls-1"
          d="M199,62.667l-173.686.778-8.548,3.111L12.1,72,5.886,64.222,2,54.111l0.777-7,0.777-4.667v-14l3.108-7,10.1-13.222,6.217,3.111,7.771,2.333L41.633,16l15.542,0.778,10.88-9.333,7.771,3.111L83.6,13.667l10.88,3.111H110.8l17.1-.778L156.647,5.889l5.44,2.333H168.3l8.548-3.111,6.994-2.333L190.84,2H199V62.667Zm0,0-173.686.778-8.548,3.111L12.1,72,5.886,64.222,2,54.111l0.777-7,0.777-4.667v-14l3.108-7,10.1-13.222,6.217,3.111,7.771,2.333L41.633,16l15.542,0.778,10.88-9.333,7.771,3.111L83.6,13.667l10.88,3.111H110.8l17.1-.778L156.647,5.889l5.44,2.333H168.3l8.548-3.111,6.994-2.333L190.84,2H199V62.667Zm-3,0,173.686,0.778,8.549,3.111L382.9,72l6.217-7.778L393,54.111l-0.777-7-0.777-4.667v-14l-3.109-7-10.1-13.222-6.217,3.111-7.771,2.333L353.367,16l-15.543.778L326.945,7.444l-7.771,3.111L311.4,13.667l-10.879,3.111H284.2L267.107,16,238.353,5.889l-5.44,2.333H226.7l-8.548-3.111-6.994-2.333L204.16,2H196V62.667Zm0,0,173.686,0.778,8.549,3.111L382.9,72l6.217-7.778L393,54.111l-0.777-7-0.777-4.667v-14l-3.109-7-10.1-13.222-6.217,3.111-7.771,2.333L353.367,16l-15.543.778L326.945,7.444l-7.771,3.111L311.4,13.667l-10.879,3.111H284.2L267.107,16,238.353,5.889l-5.44,2.333H226.7l-8.548-3.111-6.994-2.333L204.16,2H196V62.667Z"/>
  </svg>
</template>

<style scoped lang="less">
  .cls-1 {
    fill: url(#MyGradient);
    stroke: url(#MyGradient);
    stroke-width: 3px;
    fill-rule: nonzero;
    box-shadow: inset 0 2px 0 white;
    filter: url(#innershadow)
  }
</style>

<script>
  export default {
    data () {
      return {}
    },
    props: {
      width: { type: Number, default: 440 },
      leftColor: { type: String, default: 'transparent' },
      rightColor: { type: String, default: 'transparent' },
    },
    computed: {
      height () {
        return (75 / 395) * this.width
      }
    }
  }
</script>
