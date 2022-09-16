<script lang="ts" setup></script>

<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  color: white;
  background: var(--conjurer-card-color);
  padding: 10px;
}
</style>
