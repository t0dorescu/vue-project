<script setup>
const { x, y } = useMouse();
</script>

<template>
  <slot
    :x="x"
    :y="y"
  />
</template>
