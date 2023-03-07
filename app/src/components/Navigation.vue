<script lang="ts">
import {
  BUDGET,
  FITNESS,
  INVENTORY,
  RECIPES,
  REPLENISHABLES,
} from '../constants.js'

export default {
  name: 'NavigationMenu',
  props: {
    onSetView: Function,
    viewId: String,
  },
  data() {
    return {
      BUDGET,
      FITNESS,
      INVENTORY,
      RECIPES,
      REPLENISHABLES,
    }
  },
}
</script>

<template>
  <nav>
    <menu v-if="viewId.length === 0">
      <button @click="() => onSetView(BUDGET)" type="button">Budget</button>
      <button @click="() => onSetView(FITNESS)" type="button">Fitness</button>
      <button @click="() => onSetView(INVENTORY)" type="button">Inventory</button>
      <button @click="() => onSetView(RECIPES)" type="button">Recipes</button>
      <button @click="() => onSetView(REPLENISHABLES)" type="button">Replenishables</button>
    </menu>
    <button @click="() => onSetView('')" v-if="viewId" class="back" type="button">Back</button>
  </nav>
</template>

<style scoped>
menu {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: var(--border-radius-1);
  box-shadow: var(--shadow-1);
}

menu button {
  font-size: var(--font-xlarge);
  padding: var(--spacing-large);
}
.back {
  font-weight: var(--font-bold);
  padding: var(--spacing-base) var(--spacing-large);
  border-radius: var(--border-radius-3);
  color: var(--brand);
  background: hsla(0, 0%, 96%, 0.5);
  z-index: var(--depth-floating);
  font-size: var(--font-xlarge);
}
</style>
