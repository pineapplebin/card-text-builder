<script lang="ts" setup>
import type { Position, RawTextBlock } from '../domain/types'
import CCard from './CCard.vue'
import CButton from './CButton.vue'
import { FONT_SCALE } from '../domain/text/font-size'

const { block } = defineProps<{ block: RawTextBlock }>()
const emit = defineEmits<{
  (e: 'position', pos: Partial<Position>): void
  (e: 'content', value: string): void
  (e: 'color', value: string): void
  (e: 'display-type', value: RawTextBlock['displayType']): void
  (e: 'scale', value: FONT_SCALE): void
  (e: 'align', value: RawTextBlock['align']): void
  (e: 'remove'): void
}>()

const getValue = <Ev extends Event>(ev: Ev) => {
  if (ev.target) {
    return (ev.target as any).value
  }
}

const handleUpdatePosition = (ev: FocusEvent, key: keyof Position) => {
  const value = +getValue(ev)
  emit('position', {
    [key]: value,
  })
}

const handleUpdateContent = (ev: FocusEvent) => {
  emit('content', getValue(ev) || '')
}

const handleUpdateDisplayType = (ev: Event) => {
  emit('display-type', (getValue(ev) || 'title') as RawTextBlock['displayType'])
}

const handleUpdateColor = (ev: Event) => {
  emit('color', getValue(ev) || 0x000)
}

const handleUpdateScale = (ev: Event) => {
  emit('scale', +getValue(ev) || FONT_SCALE.Normal)
}

const handleUpdateAlign = (ev: Event) => {
  emit('align', getValue(ev) || 'left')
}
</script>

<template>
  <CCard>
    <div class="position-info">
      <div
        v-for="key in (['x', 'y', 'width', 'height'] as const)"
        :key="key"
        class="field"
      >
        <span
          >{{ key === 'x' || key === 'y' ? key : key[0].toUpperCase() }}:
        </span>
        <input
          type="number"
          :name="key"
          :value="block[key]"
          @blur="handleUpdatePosition($event, key)"
        />
      </div>
    </div>
    <div class="position-info">
      <div class="field">
        <span>type:</span>
        <select :value="block.displayType" @change="handleUpdateDisplayType">
          <option value="title">title</option>
          <option value="type">type</option>
          <option value="rules">rules</option>
          <option value="flip-type">flip-type</option>
          <option value="8th-title">8th-title</option>
          <option value="adventure">adventure</option>
          <option value="7th-title">7th-title</option>
          <option value="7th-type">7th-type</option>
        </select>
      </div>
      <div class="field">
        <span>color:</span>
        <input type="text" :value="block.color" @blur="handleUpdateColor" />
      </div>
      <div class="field">
        <span>scale:</span>
        <select :value="block.scale" @change="handleUpdateScale">
          <option value="1">normal</option>
          <option value="2">small</option>
          <option value="3">middle</option>
        </select>
      </div>
      <div class="field">
        <span>align:</span>
        <select :value="block.align" @change="handleUpdateAlign">
          <option value="left">left</option>
          <option value="center">center</option>
          <option value="right">right</option>
        </select>
      </div>
    </div>
    <div class="content">
      <textarea
        rows="10"
        name="content"
        :value="block.content"
        @blur="handleUpdateContent"
      ></textarea>
    </div>
    <CButton @click="emit('remove')">移除</CButton>
  </CCard>
</template>

<style scoped>
.position-info {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 10px;
}

.field {
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
}

.content {
  margin-bottom: 10px;
}

.content > textarea {
  width: 100%;
}
</style>
