<script lang="ts">
import { SERVER_URL } from '../../constants.js'

import BaseButton from '../shared/BaseButton.vue'
import ReplenishablesGrid from '../replenishables/ReplenishablesGrid.vue'
import ReplenishablesList from './ReplenishablesList.vue'

export default {
  name: 'ReplenishablesView',
  props: {
    onLoaded: {
      type: Function,
      required: false,
      default: () => null,
    },
  },
  components: {
    BaseButton,
    ReplenishablesGrid,
    ReplenishablesList,
  },
  methods: {
    async fetchReplenishables() {
      const response = await fetch(SERVER_URL + '/replenishables')
      this.replenishables = await response.json()
      this.onLoaded()
    },
    toggleList() {
      this.showList = !this.showList
    },
    hideList() {
      this.showList = false
    },
    add(replenishable: Record<string, unknown>) {
      this.shoppingList.push(replenishable)
    },
    setOverlay(value: boolean) {
      this.showOverlay = value
    },
    startShopping() {
      this.isShopping = true
    },
  },
  data() {
    return {
      showOverlay: false,
      replenishables: [],
      shoppingList: [],
      showList: false,
      isShopping: false,
    }
  },
  created() {
    this.fetchReplenishables()
  },
}
</script>

<template>
  <article>
    <BaseButton
      v-if="shoppingList.length > 0"
      @click="(event) => (showList = !showList)"
      class="list"
    >
      {{ shoppingList.length }} items
    </BaseButton>
    <ReplenishablesGrid
      :onLongPress="add"
      :shoppingList="shoppingList"
      :replenishables="replenishables"
    />
    <ReplenishablesList v-if="showList" :replenishables="shoppingList" />
  </article>
</template>

<style scoped>
article {
  padding: var(--spacing-base);
}
</style>
