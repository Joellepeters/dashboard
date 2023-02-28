<script lang="ts">
export default {
  name: 'ReplenishableLineItem',
  props: {
    replenishable: Object,
  },
}
</script>

<template>
  <div v-if="replenishable">
    <span v-if="replenishable.properties.image.files.length > 0">
      <img
        v-for="image in replenishable.properties.image.files"
        :key="image.id"
        :src="image.file.url"
      />
    </span>
    <span v-for="title in replenishable.properties.name.title" :key="title.id">
      {{ title.text.content }}
    </span>
    <label v-if="replenishable.properties.category.select === null">
      Uncategorised
    </label>
  </div>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: 80px 1fr auto auto;
  align-items: center;
  gap: var(--spacing-base);
  padding: var(--spacing-medium) var(--spacing-base);
  border-radius: var(--spacing-small);
  font-size: var(--font-large);
  background-color: white;
}

img {
  width: 100%;
}

label {
  color: #999;
}
</style>
