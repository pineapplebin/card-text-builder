<script setup lang="ts">
import { reactive, ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'
import { FABDomain } from './domain'
import type { RawTextBlock } from '@/classes/BaseDomain/types'
import { PRESET_BLOCK } from './domain/preset'
import CCard from '@/components/CCard.vue'
import CButton from '@/components/CButton.vue'
import CTextBlock from '@/components/CTextBlock.vue'
import CStatController from './components/CStatController.vue'

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
    // 读取缓存
    const cached: RawTextBlock[] = JSON.parse(
      localStorage.getItem(TEXT_CACHED) || '[]'
    )
    const merged: Partial<RawTextBlock>[] = []

    // 合并缓存与预设
    PRESET_BLOCK.forEach(({ name, ...preset }) => {
      const cIndex = cached.findIndex((c) => c.id === preset.id)
      if (cIndex > -1) {
        merged.push(cached[cIndex])
        cached.splice(cIndex, 1)
      } else {
        merged.push({ ...preset })
      }
    })

    console.log(merged, cached)
    merged.concat(cached).forEach((raw) => domain.addRawTextBlock(raw))
    domain.triggerInitBuildText()

    domain.initExtraPart()
  }, 0)
})

onBeforeUnmount(() => {
  domain.destroy()
})

const DISPLAY_TYPE_OPTIONS = ['name', 'type', 'rule', 'number', 'collect']

function addRawTextBlock() {
  domain.addRawTextBlock({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    displayType: 'title',
  })
}

function clearCache() {
  window.localStorage.removeItem(TEXT_CACHED)
}

const currentId = ref(100)
const currentTitle = computed(() => {
  return PRESET_BLOCK.find((raw) => raw.id === currentId.value)!.name
})
const currentBlock = computed(() => {
  return domain.rawTextList.find((raw) => raw.id === currentId.value)
})
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
      <CStatController
        :pitch-value="domain.pitchValue"
        :left-value="domain.footerLeftIcon"
        :right-value="domain.footerRightIcon"
        @update-left="domain.updateFooterIcon('left', $event)"
        @update-right="domain.updateFooterIcon('right', $event)"
        @update-pitch="domain.updatePitchValue($event)"
      ></CStatController>
      <div class="grid-container">
        <CButton
          v-for="block in PRESET_BLOCK"
          :key="block.id"
          @click="currentId = block.id!"
        >
          {{ block.name }}
        </CButton>
      </div>
      <CCard>
        <strong>{{ currentTitle }}</strong>
      </CCard>
      <CTextBlock
        v-if="currentBlock"
        :block="currentBlock"
        :options="DISPLAY_TYPE_OPTIONS"
        @position="domain.updateTextBlockPosition(currentId, $event)"
        @content="domain.updateTextContent(currentId, $event)"
        @color="domain.updateRawTextInfo(currentId, { color: $event })"
        @scale="domain.updateRawTextInfo(currentId, { scale: $event })"
        @align="domain.updateRawTextInfo(currentId, { align: $event })"
        @display-type="
          domain.updateRawTextInfo(currentId, { displayType: $event })
        "
        @remove="domain.removeTextBlock(currentId)"
      />
      <hr />
      <CCard>
        <CButton @click="addRawTextBlock">增加新文本</CButton>
      </CCard>
      <CTextBlock
        v-for="block in domain.rawTextList.filter((i) => i.id < 100)"
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
      <CCard>
        <CButton @click="clearCache">清空缓存</CButton>
      </CCard>
      <div class="hint">
        <p>～</p>
        <p>©</p>
      </div>
    </div>
  </div>
</template>

<style>
@import '../conjurer/variables.css';
</style>

<style scoped>
.container {
  /* --conjurer-background: url(https://cardconjurer.com/img/lowpolyBackground.svg); */
  position: relative;
  width: 100%;
  min-height: 100%;
  /* background-image: var(--conjurer-background); */
  background-color: #505050;
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

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
}
</style>
