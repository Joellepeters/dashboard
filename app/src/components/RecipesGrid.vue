<script lang="ts">
import { SERVER_URL } from '../constants.js'
import RecipeCard from './RecipeCard.vue'
import RecipeModal from './RecipeModal.vue'

export default {
  name: 'RecipesGrid',
  components: {
    RecipeCard,
    RecipeModal,
  },
  data() {
    return {
      recipes: [],
      recipeId: 'bcd15d03-c305-4882-9f36-772970a8e42f',
    }
  },
  methods: {
    async getRecipes() {
      const response = await fetch(SERVER_URL + '/recipes')
      this.recipes = await response.json()
    },
    setRecipe(id: string) {
      this.recipeId = id
    },
  },

  created() {
    this.getRecipes()
  },
}
</script>

<template>
  <section className="grid">
    <RecipeCard
      :recipe="recipe"
      v-for="(recipe, index) in recipes"
      v-bind:key="index"
    />
  </section>
  <RecipeModal :id="recipeId" v-if="recipeId" />
</template>

<style scoped>
.grid {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: var(--spacing-base);
}

.details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-base);
}
</style>
