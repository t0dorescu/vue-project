<script setup>
const posts = ref([
  { id: 1, title: "My journey with Vue" },
  { id: 2, title: "Blogging with Vue" },
  { id: 3, title: "Why Vue is so fun" }
]);

const postFontSize = ref(1);
</script>

<template>
  <div :style="{ fontSize: `${postFontSize}em` }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlargeText="postFontSize += 0.1"
    />
  </div>
</template>
