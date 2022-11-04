<script setup lang="ts">
import { reactive, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { ConjurerDomain } from './domain'
import CCard from './components/CCard.vue'
import CButton from './components/CButton.vue'
import CTextBlock from './components/CTextBlock.vue'
import type { RawTextBlock } from './domain/types'

const TEXT_CACHED = 'TEXT_CACHED '

const canvasRef = ref<HTMLCanvasElement>()
const domain = reactive(new ConjurerDomain({ debug: false }))

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
      <!-- <MaskBlock
        :masks="domain.maskList"
        @update="domain.updateMask($event.index, $event.pos)"
        @clear="domain.clearMask()"
      />
      <hr /> -->
      <div class="hint">
        <p>
          双面牌注意背面是否含有 holo stamps
          要跟随美版（中文一般有美版一般没有）
        </p>
        <p>鹏洛客 x: 130, title y: 84, type y: 1190</p>
        <p>衍生物 title color: #fde368</p>
        <p>旧版 无效果 衍生物 type y: 1724</p>
        <p>旧版 效果 衍生物 type y: 1368</p>
        <p>扩画 短效果 type y: 1284</p>
        <p>历险 title y: 1328, type y: 1420</p>
        <p>历险 storybook big-type y: 1196 居中</p>
        <p>传记 type y: 1784</p>
        <p>DOM 传记 水印透明度: 15</p>
        <p>OGW 虚色牌框 加多一层 type 和 text, text透明度: 50</p>
        <p>KHM showcase title y: 130, type y: 1231</p>
        <p>8th title y: 130, type y: 1188</p>
        <p>7th title y: 93, type y: 1157</p>
      </div>
      <div class="hint">
        <p>水印 foretell x:427, y: 1360, scale: 2016.7</p>
        <p>水印 8th ravnica opacity: 60</p>
      </div>
    </div>
  </div>
</template>

<style>
@import './variables.css';
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
