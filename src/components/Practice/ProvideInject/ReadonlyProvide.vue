<script setup>
const count = ref(0);
provide("read-only-count", readonly(count));
</script>

<template>
  <p>Readonly provide</p>
</template>
