<script lang="ts">
export default {
  name: 'BaseMenu',
}
</script>

<template>
  <menu>
    <slot></slot>
  </menu>
</template>

<style scoped>
menu {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  left: 0;
  bottom: 0;
  overflow: hidden;
  padding: var(--spacing-large);
}
</style>
