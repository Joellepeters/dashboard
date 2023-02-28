<script lang="ts">
export default {
  name: "ReplenishableCard",
  props: {
    item: Object,
  },
};
</script>

<template>
  <div class="Card">
    <h2>{{ item.properties.name.title[0].text.content }}</h2>
    <label
      v-if="item.properties.category.select"
      :class="item.properties.category.select.name">
      {{ item.properties.category.select.name }}
    </label>
    <label v-if="item.properties.category.select === null">
      Uncategorised
    </label>
    </div>
</template>

<style scoped>
.Card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  box-shadow: 0 6px 12px hsla(0, 0%, 0%, 0.05);
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  height: 200px;
}

label {
  border-radius: 5px;
  padding: 2px;
  background-color: #eee;
}
</style>