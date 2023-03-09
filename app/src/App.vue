<script lang="ts">
import {
  BUDGET,
  FITNESS,
  INVENTORY,
  RECIPES,
  REPLENISHABLES,
  LINKS,
} from './constants.js'

import BaseButton from './components/shared/BaseButton.vue'
import BaseLoader from './components/shared/BaseLoader.vue'
import BaseOverlay from './components/shared/BaseOverlay.vue'
import Inventory from './components/inventory/Inventory.vue'
import Links from './components/links/Links.vue'
import Navigation from './components/Navigation.vue'
import Recipes from './components/recipes/Recipes.vue'
import Replenishables from './components/replenishables/Replenishables.vue'

export default {
  name: 'App',
  components: {
    BaseButton,
    BaseLoader,
    BaseOverlay,
    Inventory,
    Links,
    Navigation,
    Recipes,
    Replenishables,
  },
  methods: {
    setView(id: string) {
      window.localStorage.setItem('viewId', id)
      this.viewId = id
    },
    expandNav() {
      this.showOverlay = true
      this.expandedNav = true
    },
    tapNavItem(viewId: string) {
      this.loading = true
      this.viewId = viewId
      this.expandedNav = false
      this.showOverlay = false
    },
    tapOverlay() {
      this.showOverlay = false
      this.expandedNav = false
    },
  },
  data() {
    return {
      viewId: window.localStorage.getItem('viewId') || '',
      showOverlay: false,
      expandedNav: false,
      loading: true,
      BUDGET,
      LINKS,
      FITNESS,
      INVENTORY,
      RECIPES,
      REPLENISHABLES,
    }
  },
}
</script>

<template>
  <main>
    <Navigation
      :viewId="viewId"
      :expanded="expandedNav"
      :onExpand="() => expandNav()"
    >
      <BaseButton
        @click="() => tapNavItem(LINKS)"
        :disabled="viewId === LINKS"
        type="button"
      >
        Links
      </BaseButton>
      <BaseButton
        @click="() => tapNavItem(REPLENISHABLES)"
        :disabled="viewId === REPLENISHABLES"
        type="button"
      >
        Replenishables
      </BaseButton>
      <BaseButton
        @click="() => tapNavItem(RECIPES)"
        :disabled="viewId === RECIPES"
        type="button"
      >
        Recipes
      </BaseButton>
      <BaseButton
        @click="() => tapNavItem(INVENTORY)"
        :disabled="viewId === INVENTORY"
        type="button"
      >
        Inventory
      </BaseButton>
    </Navigation>

    <BaseOverlay v-if="showOverlay === true" @click="tapOverlay" />
    <BaseLoader v-if="loading" />
    <Replenishables
      v-if="viewId === REPLENISHABLES"
      :onLoaded="() => (loading = false)"
    />
    <Recipes v-if="viewId === RECIPES" :onLoaded="() => (loading = false)" />
    <Links v-if="viewId === LINKS" :onLoaded="() => (loading = false)" />
    <Inventory
      v-if="viewId === INVENTORY"
      :onLoaded="() => (loading = false)"
    />
  </main>
</template>
