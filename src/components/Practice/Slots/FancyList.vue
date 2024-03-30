<script setup>
const props = defineProps(["apiUrl", "perPage"]);
const items = ref({});

watchEffect(async () => {
  items.value = await (await fetch(props.apiUrl)).json();
});
</script>

<template>
  <slot
    v-for="item in items"
    name="item"
    v-bind="item"
  />
</template>
