<script lang="ts">
export default {
  name: 'BaseCategory',
  props: {
    headline: {
      type: String,
      required: true,
    },
  }
}
</script>

<template>
  <button>
    <strong>{{ headline }}</strong>
  </button>
</template>

<style scoped>
button {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 0;
  color: currentColor;
  padding-top: 100%;
  background: var(--lighter);
  border-radius: var(--border-radius-2);
}

strong {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: var(--font-xlarge);
}
</style>
