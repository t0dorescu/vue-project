<script setup>
// declare a ref to hold the element reference
// the name must match template ref value
const inputElement = ref(null);

const trigger = ref("");

const focusInput = () => {
  inputElement.value.focus();
};

watchEffect(() => {
  if (trigger.value === "x") {
    focusInput();
  }
});
</script>

<template>
  <input v-model="trigger" />
  <input
    ref="inputElement"
    placeholder="Enter your text here..."
  />
  <button
    @click="focusInput"
    class="bg-blue-500 text-white"
  >
    Focus
  </button>
</template>

<style scoped>
button,
input {
  @apply border mx-2 p-2 rounded;
}
</style>
