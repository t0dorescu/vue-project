<script setup>
const show = ref(true);
</script>

<template>
  <AppPractice />
  <LifecycleHooks
    v-if="show"
    class="mb-5"
  />
  <FormInputBinding class="mb-5" />
  <EventHandling class="mb-5" />
  <ListRendering class="mb-5" />
  <WritableComputed
    title="Below is a writable component"
    class="p-5 border border-gray-400 rounded mb-10"
  />
  <BookPublished />
</template>
