<script lang="ts" setup>
import CCard from '@/components/CCard.vue'

defineProps<{
  leftValue: string
  rightValue: string
}>()

const emit = defineEmits<{
  (e: 'update-left', value: string): void
  (e: 'update-right', value: string): void
}>()

const getValue = <Ev extends Event>(ev: Ev) => {
  if (ev.target) {
    return (ev.target as any).value
  }
}

const handleUpdateLeft = (ev: Event) => {
  emit('update-left', getValue(ev) || 'none')
}

const handleUpdateRight = (ev: Event) => {
  emit('update-right', getValue(ev) || 'none')
}

const ICON_OPTIONS = [
  'none',
  'attack',
  'defense',
  'life',
  'resource',
  'intellect',
]
</script>

<template>
  <CCard>
    <div class="footer-block">
      <div class="field">
        <span>left icon:</span>
        <select :value="leftValue" @change="handleUpdateLeft">
          <option v-for="icon in ICON_OPTIONS" :key="icon" :value="icon">
            {{ icon }}
          </option>
        </select>
      </div>
      <div class="field">
        <span>right icon:</span>
        <select :value="rightValue" @change="handleUpdateRight">
          <option v-for="icon in ICON_OPTIONS" :key="icon" :value="icon">
            {{ icon }}
          </option>
        </select>
      </div>
    </div>
  </CCard>
</template>

<style scoped>
.footer-block {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}

.footer-block:last-child {
  margin-bottom: 0;
}

.field {
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
