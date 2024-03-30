<script setup>
const message = ref("Hello!");
provide("message", message);
</script>

<template>
  <input
    class="border p-3 mb-5"
    v-model="message"
  />
  <ChildComponent />
</template>
