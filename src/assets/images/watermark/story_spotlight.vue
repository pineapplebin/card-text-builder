<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="height * ratio + 'px'" :height="height + 'px'"
       viewBox="0 0 200 281">
    <metadata><?xpacket begin="﻿" id="W5M0MpCehiHzreSzNTczkc9d"?>
      <x:xmpmeta xmlns:x="adobe:ns:meta/"
                 x:xmptk="Adobe XMP Core 5.6-c140 79.160451, 2017/05/06-01:08:21">
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
          <rdf:Description rdf:about=""/>
        </rdf:RDF>
      </x:xmpmeta>
      <?xpacket end="w"?></metadata>
    <defs>
      <linearGradient id="WatermarkGradient">
        <stop offset="45%" :stop-color="leftColor"/>
        <stop offset="55%" :stop-color="rightColor"/>
      </linearGradient>
    </defs>
    <path id="story_spotlight" data-name="story_spotlight" class="content"
          d="M0,144.984A146.622,146.622,0,0,1,61.94,185.34C86.809,212.8,94.645,248.6,97.015,268.3c0.472,3.925,1.411,12.667,2.985,12.7,1.631,0.039,3.058-9.279,3.731-13.452,6.339-39.272,17.743-65.84,32.836-82.208A137.874,137.874,0,0,1,200,146.479q-5.225-42.6-10.448-85.2a273.763,273.763,0,0,1-8.209,41.1c-2.347,8.357-5.077,16.559-8.209,24.662l-11.94-5.232L144.776,24.662c-1.383,18.32-3.616,36.458-6.716,54.556-2.292,13.376-5,26.421-8.209,39.609l-12.687-.747c-2.723-15.524-5.174-30.742-7.463-46.335C106.173,47.7,103.237,24.178,100.746,0a673.5,673.5,0,0,1-8.209,72.492c-2.509,14.889-5.456,29.4-8.955,44.093L70.9,118.08,55.224,27.652c-2.028,20.607-5,40.978-8.955,61.282-2.21,11.358-4.661,22.4-7.463,33.631l-11.94,4.484c-2.973-9.228-5.665-18.3-8.209-27.652-3.719-13.675-6.912-27.2-9.7-41.1Z"/>
  </svg>
</template>

<script>
  export default {
    name: "story_spotlight",
    data () {
      return {
        ratio: 200 / 281,
      }
    },
    props: {
      height: {
        type: Number,
        default: 0,
      },
      leftColor: {
        type: String,
        default: '',
      },
      rightColor: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style scoped lang="less">
  .content {
    fill: url(#WatermarkGradient);
  }
</style>
