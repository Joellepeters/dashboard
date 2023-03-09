<script lang="ts">
import { getHeadline, getImageUrl } from '../../helpers.js'
import BaseLineItem from '../shared/BaseLineItem.vue'

export default {
  name: 'ReplenishableLineItem',
  props: {
    replenishable: {
      type: Object,
      default: null,
    }
  },
  components: {
    BaseLineItem,
  },
  methods: {
    imageUrl(replenishable: Record<string, unknown>) {
      return getImageUrl(replenishable)
    },
    headline(replenishable: Record<string, unknown>) {
      return getHeadline(replenishable)
    },
  },
}
</script>

<template>
  <BaseLineItem
    :headline="headline(replenishable)"
  >
  </BaseLineItem>
</template>
