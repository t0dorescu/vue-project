<!-- Child.vue -->
<script setup>
const model = defineModel();
</script>

<template>
  <div @click="model++">Click here to increment the count</div>
</template>

<style scoped>
div {
  @apply border p-3 rounded my-3 cursor-pointer select-none;
}
</style>
