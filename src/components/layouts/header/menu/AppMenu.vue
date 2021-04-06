<template>
  <a-menu
    theme="dark"
    mode="horizontal"
    class="leading-64 w-3/4"
    :selected-keys="selectedKeys"
    @click="changeSelectedKey"
  >
    <a-menu-item
      v-for="item in menuItems"
      :key="item.key"
    >
      {{ item.name }}
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unused-vars */
import { computed } from 'vue'
import useMenu from '../../../../hooks/use-menu'

const [selectedKey, menuItems] = useMenu()
const selectedKeys = computed(() => [selectedKey.value])
function changeSelectedKey (item) {
  selectedKey.value = item.key
}
</script>

<style lang="scss" scoped>

</style>
