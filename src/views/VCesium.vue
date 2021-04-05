<template>
  <div
    id="cesium-container"
    class="h-full"
  />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import {
  WebMap,
  MapCursor,
  Basemap,
} from '@xizher/cesium'

const webMap = new WebMap('cesium-container', {
  baseUrl: '/cesium/v1.79.1/Build/Cesium/'
})
  .use(new Basemap())
  .use(new MapCursor())

onMounted(() => {
  webMap.mount()
})
</script>

<style scoped>

</style>
