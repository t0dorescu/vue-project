<script setup>
import gsap from "gsap";

const inputElement = ref(null);

const number = ref(0);
const tweened = reactive({
  number: 0
});

watch(number, (n) => {
  gsap.to(tweened, { duration: 0.75, number: Number(n) || 0 });
});

onMounted(() => {
  inputElement.value.focus();
});
</script>

<template>
  <p class="mb-3">Type a number:</p>
  <input
    ref="inputElement"
    v-model.number="number"
    class="text-black p-2 border rounded"
  />
  <p class="mt-3">{{ tweened.number.toFixed(0) }}</p>
</template>
