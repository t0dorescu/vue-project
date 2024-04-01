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
  <div class="mt-5">
    <!-- The current route is accessible as $route in the template -->
    User {{ $route.params.id }}
  </div>

  <nav class="my-3 flex gap-x-5 ml-5">
    <RouterLink :to="{ name: 'user-home' }">Go to user home</RouterLink>
    <RouterLink :to="{ name: 'user-profile' }">Go to profile</RouterLink>
    <RouterLink to="posts">Go to posts</RouterLink>
    <RouterLink to="random-something">Go to random</RouterLink>
  </nav>
  <div class="border p-5 rounded ml-5">
    <RouterView />
  </div>
</template>
