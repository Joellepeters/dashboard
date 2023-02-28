<script lang="ts">
import { SERVER_URL } from '../constants.js'
import RecipeCategoryTags from './RecipeCategoryTags.vue'
import RecipeIngredients from './RecipeIngredients.vue'
import RecipeInstructions from './RecipeInstructions.vue'

export default {
  name: 'RecipeModal',
  components: {
    RecipeCategoryTags,
    // RecipeInstructions,
    RecipeIngredients,
  },
  props: {
    recipes: Array,
    id: String,
  },
  data() {
    return {
      recipe: null,
    }
  },
  created() {
    this.getRecipe()
  },
  methods: {
    async getRecipe() {
      console.log(this.id)
      const response = await fetch(SERVER_URL + '/page/' + this.id)
      const page = await response.json()

      this.recipe = page

      // console.log(this.recipes.filter((recipe) => recipe.id === this.id))
      // if (this.recipes === undefined) return null
      // return this.recipes.filter((recipe) => recipe.id === this.id)
    },
    // async getInstructions() {
    //   const response = await fetch(SERVER_URL + '/instructions')
    //   const instructions = await response.json()

    //   this.instructions = instructions.filter((instruction) => {
    //     return this.recipe.properties.instructions.relation.map(i => i.id).includes(instruction.id)
    //   })
    // },
  },
}
</script>

<template>
  <article v-if="recipe">
    <section>
      <h1>{{ recipe.properties.name.title[0].text.content }}</h1>
      <!-- <RecipeCategoryTags :categories="recipe.properties.category.multi_select" /> -->
      <!-- <RecipeInstructions :instructions="instructions" /> -->
      <RecipeIngredients :recipe="recipe" />
    </section>
  </article>
</template>

<style scoped>
article {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(0, 0%, 100%, 0.8);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

section {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-base);
  width: 60vw;
  height: 60vh;
  background: white;
  padding: var(--spacing-xlarge);
  border-radius: 20px;
  box-shadow: 0 4px 32px hsla(0, 0%, 0%, 0.4);
  overflow-y: scroll;
}

ul {
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--spacing-small);
}
</style>
