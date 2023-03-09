<script lang="ts">
import { SERVER_URL } from '../../constants.js'
import { getHeadline, getImageUrl, getSummary } from '../../helpers.js'

import BaseCard from '../shared/BaseCard.vue'
import BaseLineItem from '../shared/BaseLineItem.vue'
import BaseModal from '../shared/BaseModal.vue'

export default {
  name: 'RecipeCard',
  props: {
    recipe: Object,
  },
  components: {
    BaseCard,
    BaseLineItem,
    BaseModal,
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
    available(replenishables) {
      return replenishables.filter((replenishable) => {
        return (
          replenishable.properties.stock.select &&
          replenishable.properties.stock.select.name !== 'none'
        )
      })
    },
    click(id) {
      this.expanded = id
    },
    headline(recipe: object) {
      return getHeadline(recipe)
    },
    subheadline(replenishable: object) {
      if (replenishable.properties.category.select)
        return replenishable.properties.category.select.name
      else return null
    },
    summary(recipe: object) {
      return getSummary(recipe)
    },
    imageUrl(recipe: object) {
      return getImageUrl(recipe)
    }
  },
  data() {
    return {
      expanded: false,
      ingredients: [],
    }
  },
  created() {
    this.getReplenishables()
  },
}
</script>

<template>
  <BaseCard
    v-if="recipe && expanded === false"
    :onClick="click"
    :id="recipe.id"
    :loading="ingredients.length === 0"
    :headline="headline(recipe)"
    :subheadline="available(ingredients).length + '/' + ingredients.length + ' ingredients'"
    :imageUrl="imageUrl(recipe)"
  />
  <BaseModal v-if="expanded" :onBack="() => (this.expanded = false)">
    <h1>{{ headline(recipe) }}</h1>
    <div>
      {{ available(ingredients).length }}/{{ ingredients.length }} ingredients
    </div>
    <div>{{ summary(recipe) }}</div>
    <ul>
      <BaseLineItem
        v-for="(replenishable, index) in ingredients"
        v-bind:key="index"
        :imageUrl="imageUrl(replenishable)"
        :headline="headline(replenishable)"
        :subheadline="subheadline(replenishable)"
        columns="70px 1fr auto"
      >
        <span v-if="replenishable.properties.stock.select">
          {{ replenishable.properties.stock.select.name }}
        </span>
        <span v-if="replenishable.properties.stock.select === null">
          Unknown
        </span>
      </BaseLineItem>
    </ul>
  </BaseModal>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
}
</style>
