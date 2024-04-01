<script setup>
const route = useRoute();

watch(
  () => route.params.id,
  (newId, oldId) => {
    console.log({ newId, oldId });
  }
);

onBeforeRouteUpdate(async (to, from) => {
  console.log({ to, from });
  // userData.value = await fetchUser(to.params.id)
});
</script>

<template>
  <div>
    <!-- The current route is accessible as $route in the template -->
    User {{ $route.params.id }}
  </div>
</template>
