<template>
  <div class="h-full">
    <a-row class="h-full">
      <a-col flex="auto">
        <div
          id="esri3d-container"
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
import useWebMap, { initWebMap } from '@hooks/use-map/use-esri-map'
import BasemapControl from '@cp/map/BasemapControl.vue'
import useEsriBasemap from '@xizher/esri/dist/hooks/basemap.hooks'

const loaded = initWebMap('esri3d-container', '3d')
const useBasemap = () => useEsriBasemap(useWebMap()[0].basemap)

</script>

<style scoped>

</style>
