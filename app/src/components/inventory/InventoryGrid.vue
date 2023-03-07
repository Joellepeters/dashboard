<script lang="ts">
import { SERVER_URL } from '../../constants.js'
import { getHeadline, getImageUrl, getMultiSelectCategory } from '../../helpers.js'

export default {
  name: 'InventoryGrid',
  methods: {
    async fetchInventory() {
      const response = await fetch(SERVER_URL + '/inventory')
      this.inventory = await response.json()
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
    <div v-if="inventory.length === 0">Loading inventory</div>
    <menu class="Grid" v-if="inventory.length > 0">
      <button class="Card" v-for="(item, index) in inventory" v-bind:key="index">
        <figure>
          <img :src="imageUrl(item)" alt="" />
        </figure>
        <header>
          <strong>{{ headline(item) }}</strong>
          <small>{{ category(item).name }}</small>
        </header>
        <!-- <pre>
          {{ item.properties.category.multi_select }}
        </pre> -->
      </button>
    </menu>
    <nav>
      <menu>
        <button>Create packing list</button>
      </menu>
    </nav>
  </article>
</template>

<style scoped>
.Grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-base);
}

.Card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  color: currentColor;
  text-align: center;
  gap: var(--spacing-base);
  border-radius: var(--border-radius-1);
  font-size: var(--font-large);
  padding: var(--spacing-large);
  box-shadow: var(--shadow-1);
}

nav {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-large);
  font-weight: var(--font-bold);
}

nav menu {
  background-color: var(--brand);
  box-shadow: var(--shadow-1);
  border-radius: var(--border-radius-3);
}

nav menu button {
  font-weight: var(--font-bold);
  font-size: var(--font-xlarge);
  padding: var(--spacing-large) var(--spacing-xlarge);
  color: white;
}

figure {
  position: relative;
  width: 100%;
  max-width: 85%;
  padding-top: 85%;
  background-color: hsl(0, 0%, 95%);
  border-radius: var(--border-radius-1);
  margin: 0;
}

figure img {
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-small);
}

small {
  padding: 4px 8px;
  font-weight: var(--font-bold);
  font-size: var(--font-base);
  background: var(--lightest);
  color: var(--neutral);
  border-radius: var(--border-radius-1);
}
</style>
