<template>
  <div class="container">
    <div class="part preview-part">
      <div class="scale-preview">
        <canvas width="1500" height="2100"></canvas>
      </div>
    </div>
    <div class="part">
      <Input type="file" accept="image/jpeg,image/png" @change="handleFile" />
    </div>
  </div>
</template>

<style scoped>
.container {
  --conjurer-background: url(https://cardconjurer.com/img/lowpolyBackground.svg);

  width: 100%;
  min-height: 100%;
  background-image: var(--conjurer-background);
  background-size: cover;
  background-repeat: repeat;
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

@media screen and (max-width: 1500px) {
  .part {
    display: block;
    width: 100%;
  }
}

.scale-preview {
  position: absolute;
  width: 1500px;
  height: 2100px;
  transform-origin: top left;
  transform: scale(0.5);
  background-color: white;
}
</style>

<script lang="ts" setup>
type FileEventTarget = EventTarget & { files: FileList }

const handleFile = (ev: { target: FileEventTarget }) => {
  console.log(ev.target.files)
}
</script>
