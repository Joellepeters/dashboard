<script lang="ts">
export default {
  name: 'BaseButton',
}
</script>

<template>
  <button type="button">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  height: 100px;
  flex-shrink: 0;
  padding: 0 var(--spacing-large);
  background: var(--brand);
  color: white;
  font-weight: var(--font-bold);
  font-size: var(--font-xlarge);
}

button:disabled {
  opacity: 0.5;
}
</style>
