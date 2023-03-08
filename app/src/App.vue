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
import InventoryGrid from './components/inventory/InventoryGrid.vue'
import RecipesGrid from './components/recipes/RecipesGrid.vue'
import ReplenishablesScreen from './components/Replenishables.vue'

import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    BudgetScreen,
    FitnessScreen,
    InventoryGrid,
    RecipesGrid,
    ReplenishablesScreen,
    Navigation,
  },
  methods: {
    setView(id: string) {
      window.localStorage.setItem('viewId', id)
      this.viewId = id
    },
  },
  data() {
    return {
      viewId: window.localStorage.getItem('viewId') || '',
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
    <InventoryGrid v-if="viewId === INVENTORY" />
    <RecipesGrid v-if="viewId === RECIPES" />
    <ReplenishablesScreen v-if="viewId === REPLENISHABLES" />
  </main>
</template>

<style>
:root {
  --spacing-tiny: 4px;
  --spacing-small: 10px;
  --spacing-medium: 15px;
  --spacing-base: 20px;
  --spacing-large: 40px;
  --spacing-xlarge: 60px;

  --font-family: -system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  --font-small: 15px;
  --font-base: 16px;
  --font-large: 20px;
  --font-xlarge: 26px;
  --font-bold: 600;

  --brand: hsl(212, 90%, 50%);
  --lightest: hsl(0, 0%, 96%);
  --light: hsl(0, 0%, 80%);
  --neutral: hsl(0, 0%, 40%);
  --darkest: hsl(0, 0%, 10%);

  --border-radius-1: 8px;
  --border-radius-2: 20px;
  --border-radius-3: 30px;
  --shadow-1: 0 12px 32px hsla(0, 0%, 0%, 0.05), 0 1px 1px hsla(0, 0%, 0%, 0.1);

  --depth-floating: 3;
}

main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-base);
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

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 0;
  font-size: 14px;
}

menu {
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
  appearance: none;
  background: transparent;
  outline: none;
  border: none;
  text-align: left;
  font-size: var(--font-base);
}

h1 {
  font-family: var(--font-family);
  font-size: 40px;
  margin: 0;
}

strong {
  font-weight: var(--font-bold);
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#app {
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: var(--spacing-large);
  background: #f7f7f7;
}
</style>
