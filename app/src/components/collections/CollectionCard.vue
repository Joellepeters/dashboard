<script lang="ts">
import { SERVER_URL } from '../../constants.js'
import { getHeadline } from '../../helpers/notion/getHeadline.js'
import { getRelation } from '../../helpers/notion/getRelation.js'

import BaseCard from '../shared/BaseCard.vue'

export default {
  name: 'CollectionCard',
  props: {
    collection: {
      type: Object,
      required: true,
      default: null,
    },
  },
  components: {
    BaseCard,
  },
  methods: {
    async fetchInventory() {
      const response = await fetch(SERVER_URL + '/inventory')
      const inventory = await response.json()
      const ids = this.inventory().map((item: object) => item.id)

      this.items = inventory.filter((item: object) => {
        return ids.includes(item.id)
      })
    },
    headline(object: object) {
      return getHeadline(object)
    },
    inventory() {
      return getRelation('items', this.collection)
    },
  },
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.fetchInventory()
  }
}
</script>

<template>
  <button>
    <h1>{{ headline(collection) }}</h1>
    <menu>
      <BaseCard :headline="headline(item)" v-for="(item, index) in items" :key="index"/>
    </menu>
  </button>
</template>

<style scoped>
button {
  color: currentColor;
  display: flex;
  flex-direction: column;
  background: var(--lightest);
  gap: var(--spacing-large);
  padding: var(--spacing-large);
  border-radius: var(--border-radius-3);
}

menu {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-small);
}
</style>
