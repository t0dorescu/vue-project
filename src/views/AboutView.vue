<script setup>
const router = useRouter();
const goToHome = () => {
  router.push("/");
};

const route = useRoute();
onMounted(() => {
  // console.log("route", route);
});
</script>

<template>
  <p>AboutView</p>
  <p>{{ $route.path }}</p>
  <button @click="goToHome">Go to home</button>
</template>
