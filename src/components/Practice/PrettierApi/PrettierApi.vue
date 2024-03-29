<script setup>
const { x, y } = useMouse();

const { data } = await useFetch("https://json.schemastore.org/prettierrc");
const prettierData = computed(() => {
  return JSON.parse(prettierData.value);
});
</script>

<template>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
  <pre>{{ prettierData }}</pre>
</template>
