<template>
  <div
    id="esri-container"
    class="h-full"
  />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import {
  WebMap,
  MapCursor,
  Basemap,
} from '@xizher/esri'

const webMap = new WebMap('esri-container')
  .use(new Basemap())
  .use(new MapCursor())

onMounted(() => {
  webMap.mount()
})

</script>

<style scoped>

</style>
