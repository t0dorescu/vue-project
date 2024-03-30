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
  @apply border rounded p-5;
}
header {
  @apply text-xl mb-3;
}
main {
  @apply py-3;
}
footer {
  @apply mt-3 italic;
}
</style>
