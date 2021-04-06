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
        <div v-if="loaded">
          <BasemapControl :use-basemap="useBasemap" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import useWebMap, { initWebMap } from '../hooks/use-map/use-ol-map'
import BasemapControl from '../components/map/BasemapControl.vue'
import useOlBasemap from '@xizher/ol/dist/hooks/basemap.hooks'

const loaded = initWebMap('ol-container')
const useBasemap = () => useOlBasemap(useWebMap()[0].basemap)

</script>

<style scoped>

</style>
