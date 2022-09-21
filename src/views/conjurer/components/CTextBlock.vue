<script lang="ts" setup>
import type { Position, RawTextBlock } from '../domain/types'
import CCard from './CCard.vue'
import CButton from './CButton.vue'

const { block } = defineProps<{ block: RawTextBlock }>()
const emit = defineEmits<{
  (e: 'position', pos: Position): void
  (e: 'content', value: string): void
  (e: 'color', value: string): void
  (e: 'display-type', value: RawTextBlock['displayType']): void
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
    x: block.x,
    y: block.y,
    width: block.width,
    height: block.height,
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
        </select>
      </div>
      <div class="field">
        <span>color:</span>
        <input type="text" :value="block.color" @blur="handleUpdateColor" />
      </div>
    </div>
    <div class="content">
      <textarea
        rows="5"
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
