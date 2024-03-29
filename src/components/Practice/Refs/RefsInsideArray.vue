<script setup>
const list = ref(["a", "b", "c"]);
const itemRefs = ref([]);

onMounted(() => {
  console.log(itemRefs.value);
});
</script>

<template>
  <ul class="mb-5">
    <li
      v-for="item in list"
      class="inline mr-2"
      ref="itemRefs"
    >
      {{ item }}
    </li>
  </ul>
</template>
