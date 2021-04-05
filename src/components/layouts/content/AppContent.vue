<template>
  <a-layout-content>
    <div class="h-full-64">
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <Component :is="Component" />
        </KeepAlive>
      </RouterView>
    </div>
  </a-layout-content>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>
