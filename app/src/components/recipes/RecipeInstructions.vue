<script lang="ts">
export default {
  name: 'RecipeInstructions',
  props: {
    instructions: Array,
  },
}
</script>

<template>
  <ul>
    <li v-for="instruction in instructions" :key="instruction.id">
      <div v-for="block in instruction.properties.text.rich_text">
        {{ block.plain_text }}
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  display: flex;
}
</style>
