<script lang="ts">
import { SERVER_URL } from '../constants.js'
import ReplenishableLineItem from './ReplenishableLineItem.vue'

export default {
  name: 'RecipeIngredients',
  props: {
    recipe: Object,
  },
  components: {
    ReplenishableLineItem,
  },
  methods: {
    async getIngredients() {
      const response = await fetch(SERVER_URL + '/replenishables')
      const replenishables = await response.json()
      const ingredientsIds = this.recipe.properties.ingredients.relation.map(i => i.id)

      this.ingredients = replenishables.filter((replenishable) => {
        return ingredientsIds.includes(replenishable.id)
      })
    },
  },
  data() {
    return {
      ingredients: [],
    }
  },
}
</script>

<template>
  <ul v-if="ingredients.length > 0">
    <li v-for="ingredient in ingredients" v-bind:key="ingredient.id">
      <ReplenishableLineItem :replenishable="ingredient" />
    </li>
  </ul>
</template>
