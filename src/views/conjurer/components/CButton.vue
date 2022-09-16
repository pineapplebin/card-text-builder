<script lang="ts" setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['click'])
</script>

<template>
  <div class="button" @click="emit('click')">
    <slot></slot>
  </div>
</template>

<style scoped>
.button {
  position: relative;
  cursor: pointer;
  user-select: none;
  text-align: center;
  color: white;
  padding: 4px 0;
  background: var(--conjurer-input-color);
}

.button:hover {
  box-shadow: 0 0 10px 3px black;
}

.button:active::before {
  position: absolute;
  content: '';
  width: 100%;
  top: 0;
  left: 0;
  height: 4px;
  background-color: var(--conjurer-selected);
}
</style>
