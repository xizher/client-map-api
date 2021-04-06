<template>
  <BasePanel title="底图控制">
    <a-select
      v-model:value="key"
      class="w-2/3"
    >
      <a-select-option
        v-for="item in list"
        :key="item"
        :value="item"
      >
        {{ item }}
      </a-select-option>
    </a-select>
    <a-checkbox
      v-model:checked="visible"
      class="w-1/3 text-center"
    >
      可见性
    </a-checkbox>
  </BasePanel>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { defineProps } from 'vue'
import BasePanel from '../base/BasePanel.vue'
const props = defineProps({
  useBasemap: Function
})
const [
  key, visible, list
] = props.useBasemap()
</script>

<style scoped>

</style>
