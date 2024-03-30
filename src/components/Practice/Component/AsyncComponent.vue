<script setup>
import { defineAsyncComponent } from "vue";

const AdminPage = defineAsyncComponent(() => import("./components/AdminPageComponent.vue"));
</script>

<template>
  <Suspense>
    <AdminPage />
  </Suspense>
</template>
