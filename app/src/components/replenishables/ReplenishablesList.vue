<script lang="ts">
import ReplenishableLineItem from './ReplenishableLineItem.vue'

export default {
  name: 'ReplenishablesList',
  props: {
    replenishables: Array,
  },
  components: {
    ReplenishableLineItem,
  }
}
</script>

<template>
  <menu class="list">
    <ReplenishableLineItem
      v-for="(replenishable, index) in replenishables"
      v-bind:key="index"
      :replenishable="replenishable"
    />
  </menu>
</template>

<style scoped>
.list {
  position: absolute;
  bottom: var(--spacing-large);
  left: var(--spacing-large);
  background: white;
  border-radius: 20px;
  z-index: 3;
  box-shadow: var(--shadow-1);
  width: 300px;
  max-height: 300px;
  padding: var(--spacing-large);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  gap: var(--spacing-base);
}
</style>
