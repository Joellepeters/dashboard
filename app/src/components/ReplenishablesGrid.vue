<script lang="ts">
const SERVER_URL = 'http://localhost:3000'

import ReplenishableCard from './ReplenishableCard.vue'

export default {
  name: 'ReplenishablesGrid',
  components: {
    ReplenishableCard,
  },
  data() {
    return {
      items: [],
    }
  },
  methods: {
    async getReplenishables() {
      try {
        const response = await fetch(SERVER_URL + '/replenishables')
        this.items = await response.json()
      } catch (error) {
        console.log(error)
      }
    },
  },

  created() {
    this.getReplenishables()
  },
}
</script>

<template>
  <section>
    <ReplenishableCard
      :item="item"
      v-for="item in items"
      v-bind:key="item.id"
    />
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}
</style>
