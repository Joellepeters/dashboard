<script lang="ts">
export default {
  name: 'BaseOverlay',
}
</script>

<template>
  <button type="button"></button>
</template>

<style scoped>
button {
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: var(--brand);
}
</style>
