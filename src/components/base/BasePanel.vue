<template>
  <a-card
    class="m-2"
    size="small"
    :title="title"
  >
    <slot />
  </a-card>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { defineProps } from 'vue'
defineProps({
  title: { type: String, default: '' }
})
</script>

<style scoped>

</style>
