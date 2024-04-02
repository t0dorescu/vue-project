<script setup lang="ts">
const count = ref<number>(0);
const isEven = computed(() => count.value % 2 === 0);

watchEffect(() => console.log(isEven.value)); // true

// will not trigger new logs because the computed value stays `true`
count.value = 2;
count.value = 4;
count.value = 8;
count.value = 20;

const computedObj = computed((oldValue: any) => {
  const newValue = {
    isEven: count.value % 2 === 0
  };
  if (oldValue && oldValue.isEven === newValue.isEven) {
    return oldValue;
  }
  return newValue;
});
</script>

<template>IsEvenExample</template>
