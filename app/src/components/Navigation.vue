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
    <menu v-if="viewId == null">
      <button @click="() => onSetView(BUDGET)" type="button">Budget</button>
      <button @click="() => onSetView(FITNESS)" type="button">Fitness</button>
      <button @click="() => onSetView(INVENTORY)" type="button">Inventory</button>
      <button @click="() => onSetView(RECIPES)" type="button">Recipes</button>
      <button @click="() => onSetView(REPLENISHABLES)" type="button">Replenishables</button>
    </menu>
    <menu v-if="viewId">
      <button @click="() => onSetView(null)" type="button">Back</button>
    </menu>
  </nav>
</template>

<style>
menu {
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background: white;
  border-radius: var(--border-radius-1);
  box-shadow: var(--shadow-1);
}

button {
  appearance: none;
  background: transparent;
  outline: none;
  border: none;
  text-align: left;
  font-size: var(--font-xlarge);
  padding: var(--spacing-large);
}
</style>
