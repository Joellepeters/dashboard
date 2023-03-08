<script lang="ts">
export default {
  name: 'BaseModal',
  props: {
    onBack: Function,
  },
}
</script>

<template>
  <article>
    <section>
      <slot></slot>
    </section>
    <button @click="onBack" type="button"></button>
  </article>
</template>

<style scoped>
article {
  position: fixed;
  z-index: var(--depth-floating);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  z-index: 0;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: hsla(0, 0%, 96%, 0.8);
}

section {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-base);
  overflow-y: scroll;
  z-index: 1;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 60vh;
  background: white;
  padding: var(--spacing-xlarge);
  border-radius: var(--border-radius-3);
  box-shadow: var(--shadow-1);
}
</style>
