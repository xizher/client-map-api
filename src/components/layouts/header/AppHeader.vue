<template>
  <a-layout-header class="header">
    <AppTitle />
    <AppMenu class="menu" />
  </a-layout-header>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import AppMenu from './menu/AppMenu.vue'
import AppTitle from './title/AppTitle.vue'
</script>

<style scoped>
.header {
  @apply flex
}
</style>
