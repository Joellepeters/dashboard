<script lang="ts">
import { getHeadline, getImageUrl } from '../../helpers.js'

import BaseCard from '../shared/BaseCard.vue'

export default {
  name: 'ReplenishableCard',
  props: {
    replenishable: Object,
    loading: Boolean,
    disabled: Boolean,
    index: Number,
    onLongPress: Function,
  },
  components: {
    BaseCard,
  },
  methods: {
    // click(id) {
    //   this.onClick()
    //   this.expanded = id
    // },
    increment() {
      this.stockCount = this.stockCount + 1
    },
    headline(replenishable: object) {
      return getHeadline(replenishable)
    },
    imageUrl(replenishable: object) {
      return getImageUrl(replenishable)
    },
    stock(replenishable: object) {
      return replenishable.properties.stock.select.name
    },
  },
  data() {
    return {
      expanded: false,
      stockCount: (() => {
        switch (this.stock(this.replenishable)) {
          case 'plenty':
            return 3
          default:
            return 0
        }
      })(),
    }
  },
}
</script>

<template>
  <BaseCard
    v-if="replenishable"
    :onSwipeLeft="increment"
    :onLongPress="onLongPress"
    :disabled="disabled"
    :loading="loading"
    :index="index"
    :headline="headline(replenishable)"
  />
</template>
