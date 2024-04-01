<script setup>
const router = useRouter();

const goPrev = () => {
  router.go(-1);
};

const goNext = () => {
  router.go(1);
};
</script>

<template>
  <h1 class="text-lg">
    {{ $translate("greetings.hello") }}
  </h1>
  <p class="my-4">
    <strong>Current route path:</strong>
    {{ $route.fullPath }}
  </p>
  <div class="my-3 flex gap-x-3">
    <button
      @click="goPrev"
      class="border rounded p-2"
    >
      Prev
    </button>
    <button
      @click="goNext"
      class="border rounded p-2"
    >
      Next
    </button>
  </div>
  <nav class="flex gap-x-5 my-5">
    <RouterLink :to="{ name: 'home' }">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/users/tudor">Go to Users Tudor</RouterLink>
    <RouterLink to="/users/cristina">Go to Users Cristina</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
a {
  @apply border rounded px-3 py-2 hover:bg-indigo-50 text-indigo-400 hover:text-indigo-600;
}
.router-link-active {
  @apply border-indigo-500 text-indigo-600 bg-indigo-100 hover:bg-indigo-100;
}
</style>
