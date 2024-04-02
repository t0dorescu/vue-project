<script setup>
const x = ref(0);

function onMousemove(e) {
  x.value = e.clientX;
}
</script>

<template>
  <div
    @mousemove="onMousemove"
    :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }"
    class="movearea p-3 rounded text-white"
  >
    <p>Move your mouse across this div...</p>
    <p>x: {{ x }}</p>
  </div>
</template>

<style scoped>
.movearea {
  transition: 0.3s background-color ease;
}
</style>
