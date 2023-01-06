<script lang="ts" setup>
import CCard from '@/components/CCard.vue'
import CButton from '@/components/CButton.vue'
import type { Position } from '@/classes/BaseDomain'

defineProps<{
  masks: Position[]
}>()

const emit = defineEmits<{
  (e: 'update', data: { index: number; pos: Partial<Position> }): void
  (e: 'clear'): void
}>()

function handleClickNonCreature() {
  emit('update', {
    index: 1,
    pos: { x: 1153, y: 2005, width: 252, height: 31 },
  })
}
</script>

<style scoped>
.mask-block {
  color: black;
}

.line {
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
</style>

<template>
  <div class="mask-block">
    <div class="line">
      <CButton @click="handleClickNonCreature">非生物</CButton>
      <CButton @click="emit('clear')">清空</CButton>
    </div>
    <CCard v-for="(mask, idx) in masks" :key="idx" style="margin-bottom: 10px">
      <div class="line">
        <div
          v-for="key in (['x', 'y', 'width', 'height'] as const)"
          :key="key"
          class="field"
        >
          <span
            >{{ key === 'x' || key === 'y' ? key : key[0].toUpperCase() }}:
          </span>
          <input type="number" :name="key" :value="mask[key]" />
        </div>
      </div>
    </CCard>
  </div>
</template>
