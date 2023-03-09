<script lang="ts">
const LONG_PRESS_INTERVAL = 300

export default {
  name: 'BaseCard',
  props: {
    id: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    headline: {
      type: String,
      required: true,
    },
    subheadline: {
      type: String,
      required: false,
    },
    loading: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number,
      required: false,
    },
    onLongPress: Function,
    onSwipeLeft: Function,
  },
  methods: {
    onTap() {
      console.log('tap')
    },
    startDrag(event: TouchEvent) {
      console.log('start')
      this.setLongPressInterval()
      this.pageX = event.pageX
      this.pageY = event.pageY
    },
    endDrag(event: TouchEvent) {
      clearTimeout(this.longPressInterval)
      if (this.longPress) this.onLongPress()
      // if (event.pageX < this.pageX) {
      //   console.log('swipe left')
      // } else {
      //   console.log('swipe right')
      // }
    },
    setLongPressInterval() {
      this.longPressInterval = setTimeout(
        () => (this.longPress = true),
        LONG_PRESS_INTERVAL
      )
    },
  },
  data() {
    return {
      pageX: null,
      pageY: null,
      longPress: false,
      initial: { opacity: 0, scale: 0.7 },
      enter: this.index
        ? { opacity: 1, scale: 1, transition: { delay: 40 * this.index } }
        : { opacity: 1, scale: 1 },
    }
  },
}
</script>

<template>
  <button
    v-motion
    v-use-longpress="500"
    @longpress="onLongpress"
    @touchstart="startDrag"
    @touchend="endDrag"
    :initial="initial"
    :enter="enter"
    :disabled="disabled === true"
    type="button"
  >
    <figure
      :style="{ backgroundImage: imageUrl ? 'url(' + imageUrl + ')' : null }"
    >
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
  user-select: none;
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
  background-position: center;
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
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-small);
}

header strong {
  user-select: none;
  font-size: var(--font-large);
}

header small {
  user-select: none;
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
