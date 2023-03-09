<script lang="ts">
export default {
  name: 'BaseLineItem',
  props: {
    imageUrl: String,
    headline: String,
    subheadline: String,
    columns: {
      type: String,
      default: '40px 1fr',
    },
  },
}
</script>

<template>
  <li :style="{ gridTemplateColumns: columns }">
    <span>
      <figure :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <img :src="imageUrl" />
      </figure>
    </span>
    <span class="header">
      <strong>{{ headline }}</strong>
      <div><small>{{ subheadline }}</small></div>
    </span>
    <slot></slot>
  </li>
</template>

<style scoped>
li {
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  gap: var(--spacing-small);
  border-radius: var(--border-radius-2);
}

figure {
  position: relative;
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 85%;
  padding-top: 85%;
  background-color: var(--lightest);
  border-radius: var(--border-radius-1);
  margin: 0;
}

figure img {
  display: none;
}

.header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-tiny);
}
strong {
  font-size: var(--font-large);
}

small {
  font-size: var(--font-base);
  color: var(--neutral);
}
</style>
