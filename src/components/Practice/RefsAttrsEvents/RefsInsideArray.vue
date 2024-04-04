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
      class="mr-2 inline"
      ref="itemRefs"
    >
      {{ item }}
    </li>
  </ul>
</template>
