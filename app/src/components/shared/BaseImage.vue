<script lang="ts">
export default {
  name: 'BaseImage',
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
    },
  }
}
</script>

<template>
  <figure :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
    <img :src="imageUrl" />
  </figure>
</template>

<style scoped>
figure {
  position: relative;
  background-size: cover;
  background-position: center;
  height: 80px;
  width: 80px;
  background-color: var(--lighter);
  border-radius: var(--border-radius-1);
  margin: 0;
}

img {
  display: none;
}
</style>
