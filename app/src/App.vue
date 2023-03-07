<script lang="ts">
import {
  BUDGET,
  FITNESS,
  INVENTORY,
  RECIPES,
  REPLENISHABLES,
} from './constants.js'
import BudgetScreen from './components/Budget.vue'
import FitnessScreen from './components/Fitness.vue'
import InventoryScreen from './components/Inventory.vue'
import RecipesScreen from './components/Recipes.vue'
import ReplenishablesScreen from './components/Replenishables.vue'

import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    BudgetScreen,
    FitnessScreen,
    InventoryScreen,
    RecipesScreen,
    ReplenishablesScreen,
    Navigation,
  },
  methods: {
    setView(id) {
      this.viewId = id
    },
  },
  data() {
    return {
      viewId: null,
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
  <main>
    <Navigation :onSetView="setView" :viewId="viewId" />
    <BudgetScreen v-if="viewId === BUDGET" />
    <FitnessScreen v-if="viewId === FITNESS" />
    <InventoryScreen v-if="viewId === INVENTORY" />
    <RecipesScreen v-if="viewId === RECIPES" />
    <ReplenishablesScreen v-if="viewId === REPLENISHABLES" />
  </main>
</template>

<style>
:root {
  --spacing-small: 10px;
  --spacing-medium: 15px;
  --spacing-base: 20px;
  --spacing-large: 40px;
  --spacing-xlarge: 60px;
  --font-family: sans-serif;
  --font-base: 16px;
  --font-large: 20px;
  --font-xlarge: 26px;
  --darkest: hsl(0, 0%, 10%);
  --border-radius-1: 20px;
  --shadow-1: 0 12px 32px hsla(0, 0%, 0%, 0.05), 0 1px 1px hsla(0, 0%, 0%, 0.1);
}

body {
  margin: 0;
  padding: 0;
  color: var(--darkest);
  font-family: var(--font-family);
  font-size: var(--font-base);
  line-height: 1.2;
  overflow: hidden;
}

h1 {
  font-family: var(--font-family);
  font-size: 40px;
  margin: 0;
}

#app {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--spacing-large);
  background: #f7f7f7;
}
</style>
