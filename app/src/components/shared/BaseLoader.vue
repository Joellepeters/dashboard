<script lang="ts">
export default {
  name: 'BaseLoader',
}
</script>

<template>
  <div>
    <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor"></circle>
    </svg>
  </div>
</template>

<style scoped>
div {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsla(0, 0%, 96%, 0.1);
}

svg {
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50px;
  height: 50px;
  margin-top: -25px;
  margin-left: -25px;
}

svg circle {
  stroke: var(--light);
  stroke-linecap: round;
  stroke-width: 5;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
</style>
