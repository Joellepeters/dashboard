<script lang="ts">
import ReplenishableCard from './ReplenishableCard.vue'

export default {
  name: 'ReplenishablesGrid',
  props: {
    replenishables: {
      type: Array,
      default: () => [],
    },
    shoppingList: {
      type: Array,
      required: false,
      default: () => [],
    },
    onLongPress: Function,
  },
  components: {
    ReplenishableCard,
  },
  methods: {
    inShoppingList(replenishable: unknown) {
      return this.shoppingList.includes(replenishable)
    },
  }
}
</script>

<template>
  <menu class="grid">
    <ReplenishableCard
      v-for="(replenishable, index) in replenishables"
      :key="index"
      :onLongPress="() => onLongPress(replenishable)"
      :loading="replenishables.length === 0"
      :replenishable="replenishable"
      :index="index"
    />
  </menu>
</template>

<style scoped>
.grid {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-small);
  overflow-y: scroll;
}
</style>
