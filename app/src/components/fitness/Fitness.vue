<script lang="ts">
import { SERVER_URL } from '../../constants.js'
import {
  getHeadline,
  getImageUrl,
  getMultiSelectCategory,
} from '../../helpers.js'

import BaseCard from '../shared/BaseCard.vue'

export default {
  name: 'FitnessScreen',
  props: {
    onLoaded: {
      type: Function,
      required: false,
      default: () => null,
    },
  },
  components: {
    BaseCard,
  },
  methods: {
    async fetchFitness() {
      const response = await fetch(SERVER_URL + '/fitness')
      this.fitness = await response.json()
      this.onLoaded()
    },
    headline(item: object) {
      return getHeadline(item)
    },
    category(item: object) {
      return getMultiSelectCategory(item)
    },
    imageUrl(item: object) {
      return getImageUrl(item)
    },
  },
  data() {
    return {
      fitness: [],
    }
  },
  created() {
    this.fetchFitness()
  },
}
</script>

<template>
  <article>
    <menu v-if="fitness.length > 0">
      <BaseCard
        v-for="(item, index) in fitness"
        v-bind:key="index"
        :imageUrl="imageUrl(item)"
        :headline="headline(item)"
        :category="category(item).name"
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
  gap: var(--spacing-base);
}
</style>
