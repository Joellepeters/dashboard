<script lang="ts">
import { SERVER_URL } from '../../constants.js'

export default {
  name: 'BaseView',
  props: {
    endPoint: {
      type: String,
      required: true,
    },
    onLoaded: {
      type: Function,
      required: false,
      default: () => null,
    },
  },
  methods: {
    async fetch() {
      const response = await fetch(SERVER_URL + this.endPoint)
      this.items = await response.json()
      this.onLoaded(this.items)
    },
  },
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.fetch()
  },
}
</script>

<template>
  <article>
    <slot></slot>
  </article>
</template>

<style scoped>
article {
  padding: var(--spacing-base);
}
</style>
