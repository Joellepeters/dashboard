<script lang="ts">
import { getHeadline } from '../../helpers'

import BaseView from '../shared/BaseView.vue'
import CollectionCard from './CollectionCard.vue'

export default {
  name: 'CollectionsView',
  props: {
    onLoaded: {
      type: Function,
      required: false,
      default: () => null,
    },
  },
  components: {
    BaseView,
    CollectionCard,
  },
  methods: {
    loaded(items: Array<object>) {
      this.collections = items
      this.onLoaded()
    },
    items(collection: object) {
      return this.inventory.filter((item: object) => {
        const items = item.properties.collections.relation

        if (items.length === 0) return false
        console.log(collection)
        console.log(item.properties.collections.relation)
        return item.properties.collections.relation.includes(collection)
      })
    },
  },
  data() {
    return {
      collections: [],
      getHeadline,
    }
  }
}
</script>

<template>
  <article>
    <BaseView :onLoaded="loaded" endPoint="/collections">
      <menu>
        <CollectionCard
          v-for="(collection, index) in collections"
          :key="index"
          :collection="collection"
        />
      </menu>
    </BaseView>
  </article>
</template>

<style scoped>
menu {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-base);
}
</style>
