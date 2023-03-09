<script lang="ts">
import { SERVER_URL } from '../../constants.js'
import {
  getHeadline,
  getImageUrl,
  getMultiSelectCategory,
} from '../../helpers.js'

import BaseCard from '../shared/BaseCard.vue'
import BaseCategory from '../shared/BaseCategory.vue'

export default {
  name: 'InventoryView',
  props: {
    onLoaded: {
      type: Function,
      required: false,
      default: () => null,
    },
  },
  components: {
    BaseCard,
    BaseCategory,
  },
  methods: {
    async fetchInventory() {
      const response = await fetch(SERVER_URL + '/inventory')
      this.inventory = await response.json()
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
    getCategories(inventory: Array<object>) {
      if (inventory.length > 0)
        return inventory.reduce((categories: object, item: object) => {
          const options = item.properties.category.multi_select
          const optionIds = [
            ...categories,
            ...options.map((o: object) => o.name)
          ]
          return optionIds.filter(
            (id, index) => optionIds.indexOf(id) === index
          )
        }, [])
      else return []
    },
  },
  data() {
    return {
      inventory: [],
    }
  },
  created() {
    this.fetchInventory()
  },
}
</script>

<template>
  <article>
    <menu v-if="inventory.length > 0">
      <BaseCategory
        v-for="(category, index) in getCategories(inventory)"
        :key="index"
        :headline="category"
      >
      </BaseCategory>
    </menu>
    <menu v-if="inventory.length > 0">
      <BaseCard
        v-for="(item, index) in inventory"
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
  display: flex;
  flex-direction: column;
  padding: var(--spacing-base);
}

menu {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-base);
}
</style>
