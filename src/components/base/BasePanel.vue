<template>
  <a-card
    class="m-2"
    size="small"
    :title="title"
  >
    <slot />
  </a-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  title: string
}>()
</script>

<style scoped>

</style>
