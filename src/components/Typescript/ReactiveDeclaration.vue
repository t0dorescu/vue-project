<script setup lang="ts">
import { reactive } from "vue";

interface Book {
  title: string;
  year?: number;
}

const book: Book = reactive({ title: "Vue 3 Guide" });
</script>

<template>ReactiveDeclaration</template>
