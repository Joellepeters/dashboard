<script lang="ts">
export default {
  name: 'RecipeCategoryTags',
  props: {
    categories: Array,
  },
}
</script>

<template>
  <ul>
    <li v-for="category in this.categories">
      {{ category.name }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  align-items: start;
  gap: var(--spacing-small);
}

li {
  display: inline-block;
  border-radius: 5px;
  background-color: #ccc;
  padding: 2px;
}
</style>
