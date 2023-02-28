<script lang="ts">
import RecipesGrid from './components/RecipesGrid.vue'
import ReplenishablesGrid from './components/ReplenishablesGrid.vue'

export default {
  name: 'App',
  components: {
    ReplenishablesGrid,
    RecipesGrid,
  },
}
</script>

<template>
  <main>
    <h1>Recipes</h1>
    <RecipesGrid />
    <!-- <h1>Replenishables</h1>
    <ReplenishablesGrid /> -->
  </main>
</template>

<style>
:root {
  --spacing-small: 10px;
  --spacing-medium: 15px;
  --spacing-base: 20px;
  --spacing-large: 40px;
  --spacing-xlarge: 60px;

  --font-base: 16px;
  --font-large: 20px;
}

body {
  margin: 0;
  padding: 0;
  color: var(--sc-darkest);
  font-family: var(--sc-font-family);
  font-size: var(--sc-font-base);
  line-height: 1.2;
  overflow: hidden;
}

h1 {
  font-size: 40px;
  margin: 0;
}

body {
  font-family: sans-serif;
  margin: 0;
}

#app {
  background: #f7f7f7;
}
</style>
