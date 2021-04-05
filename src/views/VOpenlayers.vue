<template>
  <div class="h-full">
    <a-row class="h-full">
      <a-col flex="auto">
        <div
          id="ol-container"
          class="h-full"
        />
      </a-col>
      <a-col flex="350px">
        col-12
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import {
  WebMap,
  MapCursor,
  Basemap,
} from '@xizher/ol'

const webMap = new WebMap('ol-container')
  .use(new Basemap())
  .use(new MapCursor())

onMounted(() => {
  webMap.mount()
})

</script>

<style scoped>

</style>
