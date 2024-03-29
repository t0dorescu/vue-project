<script setup>
defineProps(["title"]);
defineEmits(["enlarge-text"]);
</script>

<template>
  <div class="blog-post">
    <h1>{{ title }}</h1>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>

<style scoped>
.blog-post {
  @apply my-3 p-3 border rounded;
}
.blog-post h1 {
  @apply text-xl;
}
</style>
