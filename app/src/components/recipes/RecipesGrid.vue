<script lang="ts">
import { SERVER_URL } from '../../constants.js'
import BaseLoader from '../shared/BaseLoader.vue'
import RecipeCard from './RecipeCard.vue'

export default {
  name: 'RecipesGrid',
  components: {
    BaseLoader,
    RecipeCard,
  },
  methods: {
    async fetchRecipes() {
      const response = await fetch(SERVER_URL + '/recipes')
      this.recipes = await response.json()
    },
    setRecipe(id: string) {
      this.recipeId = id
    },
  },

  created() {
    this.fetchRecipes()
  },
  data() {
    return {
      recipes: [],
      recipeId: 'bcd15d03-c305-4882-9f36-772970a8e42f',
    }
  },
}
</script>

<template>
  <menu className="grid">
    <RecipeCard
      :recipe="recipe"
      v-for="(recipe, index) in recipes"
      v-bind:key="index"
    />
    <BaseLoader v-if="recipes.length === 0" />
  </menu>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-small);
}

.details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-base);
}
</style>
