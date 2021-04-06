<template>
  <div class="h-full">
    <a-row class="h-full">
      <a-col flex="auto">
        <div
          id="cesium-container"
          class="h-full"
        />
      </a-col>
      <a-col flex="350px">
        <div v-if="loaded">
          <BasemapControl :use-basemap="useBasemap" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import useWebMap, { initWebMap } from '@hooks/use-map/use-cesium-map'
import BasemapControl from '@cp/map/BasemapControl.vue'
import useCesiumBasemap from '@xizher/cesium/dist/hooks/basemap.hooks'

const loaded = initWebMap('cesium-container')
const useBasemap = () => useCesiumBasemap(useWebMap()[0].basemap)

</script>

<style scoped>

</style>
