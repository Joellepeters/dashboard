<script lang="ts">
import { SERVER_URL } from '../../constants.js'
import RecipeCard from './RecipeCard.vue'

export default {
  name: 'RecipesGrid',
  props: {
    onLoaded: {
      type: Function,
      required: false,
      default: () => null,
    },
  },
  components: {
    RecipeCard,
  },
  methods: {
    async fetchRecipes() {
      const response = await fetch(SERVER_URL + '/recipes')
      this.recipes = await response.json()
      this.onLoaded()
    },
    setRecipe(id: string) {
      this.recipeId = id
    },
    startDrag(event: TouchEvent) {
      console.log('start drag')
      this.pageX = event.pageX
      this.pageY = event.pageY
    },
    endDrag(event: TouchEvent) {
      console.log('end drag')
      if (event.pageX < this.pageX) onBack()
    },
  },
  created() {
    this.fetchRecipes()
  },
  data() {
    return {
      recipes: [],
    }
  },
}
</script>

<template>
  <article>
    <menu @touchstart="startDrag" @touchend="endDrag">
      <RecipeCard
        v-for="(recipe, index) in recipes"
        v-bind:key="index"
        :recipe="recipe"
      />
    </menu>
  </article>
</template>

<style scoped>
article {
  padding: var(--spacing-base);
}

menu {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-small);
}
</style>
