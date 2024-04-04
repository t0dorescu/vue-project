<script setup>
const message = ref("Hello!");
provide("message", message);
</script>

<template>
  <input
    class="mb-5 border p-3"
    v-model="message"
  />
  <ChildComponent />
</template>
