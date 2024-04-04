<script setup>
onMounted(() => {
  console.log(`the component is now mounted.`);
});

onUpdated(() => {
  console.log(`the component is updarted.`);
});

onUnmounted(() => {
  console.log(`the component is unmounted.`);
});
</script>

<template>
  <div class="my-10 border p-5">
    <p class="text-xl">Lifecycle Hooks</p>
  </div>
</template>
