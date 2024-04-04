<script setup>
const text = ref("this is a text");
const count = ref(0);
</script>

<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot
        :text="text"
        :count="count"
      ></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.container {
  @apply rounded border p-5;
}
header {
  @apply mb-3 text-xl;
}
main {
  @apply py-3;
}
footer {
  @apply mt-3 italic;
}
</style>
