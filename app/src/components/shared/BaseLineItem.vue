<script lang="ts">
import BaseImage from './BaseImage.vue';

export default {
  name: 'BaseLineItem',
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: '',
    },
    headline: String,
    subheadline: String,
    href: {
      type: String,
      required: false,
      default: '',
    },
    columns: {
      type: String,
      default: '40px 1fr',
    },
  },
  components: {
    BaseImage,
  },
}
</script>

<template>
  <a
    v-if="href.length > 0"
    :style="{ gridTemplateColumns: columns }"
    :href="href"
    target="blank"
  >
    <span>
      <BaseImage :imageUrl="imageUrl" />
    </span>
    <span class="header">
      <strong>{{ headline }}</strong>
      <div>
        <small>{{ subheadline }}</small>
      </div>
    </span>
    <slot></slot>
  </a>

  <button v-if="href.length === 0">
    <span>
      <BaseImage :imageUrl="imageUrl" />
    </span>
    <span class="header">
      <strong>{{ headline }}</strong>
      <div><small>{{ subheadline }}</small></div>
    </span>
    <slot></slot>
  </button>
</template>

<style scoped>
button,
a {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: var(--spacing-base);
  padding: var(--spacing-base);
  border-radius: var(--border-radius-2);
  color: currentColor;
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
