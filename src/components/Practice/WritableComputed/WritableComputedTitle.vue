<script setup>
const props = defineProps({
  fullName: {
    type: String,
    required: true
  }
});

const isActive = computed(() => {
  return props.fullName.length > 10;
});

const hasFullname = computed(() => {
  return props.fullName.trim().length > 0;
});

const classObject = computed(() => {
  return [
    "p-2 rounded",
    isActive.value && hasFullname.value ? "active" : "inactive",
    { error: !hasFullname.value }
  ];
});
</script>

<template>
  <h1 :class="classObject">
    {{ hasFullname ? props.fullName : "Enter full name..." }}
  </h1>
</template>

<style scoped>
.active {
  @apply font-bold text-blue-900;
}
.error {
  @apply border-2 border-red-400;
}
.inactive {
  @apply border-2 border-gray-300;
}
</style>
