<script lang="ts" setup>
import { defineProps } from 'vue'
import type { Position, RawTextBlock } from '../domain/types'
import CCard from './CCard.vue'
import CButton from './CButton.vue'

const { block } = defineProps<{ block: RawTextBlock }>()
const emit = defineEmits<{
  (e: 'position', pos: Position): void
  (e: 'content', value: string): void
  (e: 'remove'): void
}>()

const handleUpdatePosition = (ev: FocusEvent, key: keyof Position) => {
  if (!ev.target) {
    return
  }
  const value = +(ev.target as HTMLInputElement).value
  emit('position', {
    x: block.x,
    y: block.y,
    width: block.width,
    height: block.height,
    [key]: value,
  })
}

const handleUpdateContent = (ev: FocusEvent) => {
  if (!ev.target) {
    return
  }
  const value = (ev.target as HTMLTextAreaElement).value
  emit('content', value || '')
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
