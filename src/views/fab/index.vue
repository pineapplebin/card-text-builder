<script setup lang="ts">
import { reactive, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { FABDomain } from './domain'
import CCard from '@/components/CCard.vue'
import CButton from '@/components/CButton.vue'
import CTextBlock from '@/components/CTextBlock.vue'
import type { RawTextBlock } from '@/classes/BaseDomain/types'

const TEXT_CACHED = 'FAB_TEXT_CACHED'

const canvasRef = ref<HTMLCanvasElement>()
const domain = reactive(new FABDomain({ debug: false }))

watch(domain.rawTextList, (val) => {
  if (val) {
    localStorage.setItem(TEXT_CACHED, JSON.stringify(val))
  }
})

// @ts-ignore
window.domain = domain

const handleFile = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target.files && target.files.length) {
    const [file] = target.files
    domain.initFile(file)
  }
}

onMounted(() => {
  if (canvasRef.value) {
    domain.initCanvas(canvasRef.value)
  }
  setTimeout(() => {
    const cached = localStorage.getItem(TEXT_CACHED)
    if (cached) {
      const list: RawTextBlock[] = JSON.parse(cached)
      list.forEach((raw) => {
        domain.addRawTextBlock({ ...raw, id: 100 + raw.id + list.length })
      })
    }
  }, 0)
})

onBeforeUnmount(() => {
  domain.destroy()
})

const DISPLAY_TYPE_OPTIONS = ['name']
</script>

<template>
  <div class="container">
    <div class="part preview-part">
      <div class="scale-preview">
        <canvas ref="canvasRef" width="1500" height="2100"></canvas>
      </div>
    </div>
    <div class="part action-part">
      <CCard>
        <input type="file" accept="image/jpeg,image/png" @change="handleFile" />
      </CCard>
      <CCard>
        <CButton @click="domain.addRawTextBlock()">增加新文本</CButton>
      </CCard>
      <CTextBlock
        v-for="block in domain.rawTextList"
        :key="block.id"
        :block="block"
        :options="DISPLAY_TYPE_OPTIONS"
        @position="domain.updateTextBlockPosition(block.id, $event)"
        @content="domain.updateTextContent(block.id, $event)"
        @color="domain.updateRawTextInfo(block.id, { color: $event })"
        @scale="domain.updateRawTextInfo(block.id, { scale: $event })"
        @align="domain.updateRawTextInfo(block.id, { align: $event })"
        @display-type="
          domain.updateRawTextInfo(block.id, { displayType: $event })
        "
        @remove="domain.removeTextBlock(block.id)"
      />
      <hr />
      <div class="hint"></div>
    </div>
  </div>
</template>

<style>
@import '../conjurer/variables.css';
</style>

<style scoped>
.container {
  --conjurer-background: url(https://cardconjurer.com/img/lowpolyBackground.svg);
  position: relative;
  width: 100%;
  min-height: 100%;
  background-image: var(--conjurer-background);
  background-size: cover;
  background-repeat: repeat;
  display: flex;
  align-items: flex-start;
  padding: 15px;
}

.part {
  display: inline-block;
  width: 50%;
}

.preview-part {
  position: relative;
  height: 1090px;
  padding: 20px;
}

.scale-preview {
  position: absolute;
  width: 1500px;
  height: 2100px;
  transform-origin: top left;
  transform: scale(0.5);
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 0 20px 0 black;
  border-radius: 80px;
}

.action-part {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hint {
  color: white;
}

.hint > p::before {
  content: '';
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: white;
  margin-right: 10px;
}
</style>
