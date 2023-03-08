<script lang="ts">
// import BaseLoader from './BaseLoader.vue';

export default {
  name: 'BaseCard',
  props: {
    id: String,
    imageUrl: String,
    headline: String,
    subheadline: String,
    onClick: Function,
    loading: Boolean,
  },
  components: {
    // BaseLoader,
  }
}
</script>

<template>
  <button
    @click="() => onClick(id)"
    :disabled="loading"
    type="button">
    <figure :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <img :src="imageUrl" />
    </figure>
    <header>
      <strong>{{ headline }}</strong>
      <small :class="loading ? 'loading' : null">
        {{ subheadline }}
      </small>
    </header>
    <!-- <BaseLoader v-if="loading" /> -->
  </button>
</template>

<style scoped>
button {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: currentColor;
  background-color: white;
  transition: 200ms background-color ease, 200ms box-shadow ease;
  padding: var(--spacing-large);
  border-radius: var(--border-radius-2);
  box-shadow: var(--shadow-1);
  gap: var(--spacing-base);
}

button:disabled {
  background-color: hsla(0, 0%, 100%, 0.6);
  color: var(--light);
  box-shadow: none;
}

figure {
  position: relative;
  background-size: cover;
  width: 100%;
  max-width: 85%;
  padding-top: 85%;
  background-color: hsl(0, 0%, 0%, 0.03);
  border-radius: var(--border-radius-2);
  margin: 0;
}

img {
  display: none;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-small);
}

footer {
  font-size: 12px;
  text-align: left;
  color: var(--neutral);
}

strong {
  font-size: var(--font-large);
}

small {
  font-weight: var(--font-bold);
  font-size: var(--font-base);
  color: var(--neutral);
}

.loading {
  background: var(--lightest);
  border-radius: var(--border-radius-1);
  color: transparent;
}
</style>
