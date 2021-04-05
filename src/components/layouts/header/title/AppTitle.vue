<template>
  <div class="text-white text-xl leading-64 truncate overflow-ellipsis w-1/4">
    {{ config.appName }}
  </div>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import useConfig from '../../../../hooks/use-config'
const [config] = useConfig()
</script>

<style scoped>

</style>
