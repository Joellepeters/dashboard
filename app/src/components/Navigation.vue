<script lang="ts">
import {
  BUDGET,
  FITNESS,
  INVENTORY,
  RECIPES,
  REPLENISHABLES,
} from '../constants.js'

export default {
  name: 'NavigationMenu',
  props: {
    expanded: {
      type: Boolean,
      default: false,
    },
    viewId: {
      type: String,
      required: true,
    },
    onExpand: {
      type: Function,
      required: false,
      default: () => null,
    },
  },
  methods: {
    tapInit() {
      this.onExpand()
    },
  },
  data() {
    return {
      hasViewId: this.viewId.length > 0,
      BUDGET,
      FITNESS,
      INVENTORY,
      RECIPES,
      REPLENISHABLES,
    }
  },
}
</script>

<template>
  <nav role="navigation">
    <menu
      v-if="expanded === true"
      v-motion
      :initial="{ opacity: 0, scale: 0.3, y: 100 }"
      :enter="{ opacity: 1, scale: 1, y: 0 }"
    >
      <slot></slot>
    </menu>
    <button
      v-if="expanded === false"
      v-motion
      :tapped="{ opacity: 0, scale: 1.2 }"
      :initial="{ opacity: 0, scale: 2 }"
      :enter="{ opacity: 1, scale: 1 }"
      @click="tapInit"
      class="Menu"
    ></button>
  </nav>
</template>

<style scoped>
nav {
  --foreground: 2;
  --background: 1;
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

menu {
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 50vh;
  bottom: var(--spacing-large);
  z-index: var(--foreground);
  background: var(--brand);
  border-radius: var(--border-radius-3);
  box-shadow: var(--shadow-brand-2);
}

menu button {
  font-size: var(--font-xlarge);
  padding: var(--spacing-large) var(--spacing-xlarge);
  font-weight: var(--font-bold);
  color: white;
}

menu button:hover {
  background-color: var(--brand-2);
}

nav > button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  color: white;
  width: 90px;
  height: 90px;
  border-radius: var(--border-radius-4);
  z-index: var(--foreground);
  bottom: var(--spacing-large);
  font-size: var(--font-xlarge);
  font-weight: var(--font-bold);
  box-shadow: var(--shadow-2);
  background: var(--brand);
}
</style>
