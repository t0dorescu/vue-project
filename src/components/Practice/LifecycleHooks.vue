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
  <div class="p-5 border my-10">
    <p class="text-xl">Lifecycle Hooks</p>
  </div>
</template>
