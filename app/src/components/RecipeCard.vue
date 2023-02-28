<script lang="ts">
import { SERVER_URL } from '../constants.js'

export default {
  name: 'RecipeCard',
  props: {
    recipe: Object,
  },
  data() {
    return {
      ingredients: [],
    }
  },
  created() {
    this.getReplenishables()
  },
  methods: {
    async getReplenishables() {
      const response = await fetch(SERVER_URL + '/replenishables')
      const replenishables = await response.json()
      const ingredientsIds = this.recipe.properties.ingredients.relation.map(i => i.id)

      this.ingredients = replenishables.filter((replenishable) => {
        return ingredientsIds.includes(replenishable.id)
      })
    },
  },
}
</script>

<template>
  <div class="Card" v-if="recipe">
    <h2>{{ recipe.properties.name.title[0].text.content }}</h2>
    <div>{{ ingredients.length }} ingredients</div>
    <div>{{ recipe.id }}</div>
  </div>
</template>

<style scoped>
.Card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  box-shadow: 0 6px 12px hsla(0, 0%, 0%, 0.05);
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  height: 200px;
}

label {
  border-radius: 5px;
  padding: 2px;
  background-color: #eee;
}
</style>
