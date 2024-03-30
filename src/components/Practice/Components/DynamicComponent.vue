<script setup>
import AppPractice from "@/components/Practice/AppPractice.vue";
</script>

<template>
  {{ componentsList[componentIndex] }}
  <component v-bind:is="AppPractice"></component>
</template>
