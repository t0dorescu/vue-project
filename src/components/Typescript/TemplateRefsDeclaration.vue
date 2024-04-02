<script setup lang="ts">
const el = ref<HTMLInputElement>();

onMounted(() => {
  el.value?.focus();
});
</script>

<template>
  <input ref="el" />
</template>
