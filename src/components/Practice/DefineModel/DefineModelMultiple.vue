<script setup>
const [title, modifiers] = defineModel("title", {
  set(value) {
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
});

const content = defineModel("content", { required: true });
console.log(modifiers);
</script>

<template>
  <div class="text-md mt-2">
    <h1 @click="title += '.'">{{ title }}</h1>
    <p @click="content += '.'">{{ content }}</p>
  </div>
</template>
