<script setup>
const { x, y } = useMouse();

const { data } = useFetch("https://json.schemastore.org/prettierrc");
const prettierData = computed(() => {
  return JSON.parse(data.value);
});
</script>

<template>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
  <pre>{{ prettierData }}</pre>
</template>
