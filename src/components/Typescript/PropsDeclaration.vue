<script setup lang="ts">
import type { Book } from "@/types/book.d.ts";

interface Props {
  msg?: string;
  labels?: string[];
  book?: Book;
}

const props = withDefaults(defineProps<Props>(), {
  msg: "hello",
  labels: () => ["one", "two"],
  book: () => ({
    title: "book title",
    author: "john",
    year: 1923
  })
});
</script>

<template>
  <p>PropsDeclaration</p>
  <section>
    <pre>{{ book }}</pre>
  </section>
</template>
