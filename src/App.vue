<script setup>
const show = ref(true);
</script>

<template>
  <component :is="'vue:blog-page'"></component>

  <BlogPage />
  <AppPractice />
  <RefsInsideArray />
  <TemplateRefs />
  <WatchEffectCommits />
  <WatchReactivity />
  <LifecycleHooks v-if="show" />
  <FormInputBinding class="mb-5" />
  <EventHandling class="mb-5" />
  <ListRendering class="mb-5" />
  <WritableComputed
    title="Below is a writable component"
    class="p-5 border border-gray-400 rounded mb-10"
  />
  <BookPublished />
</template>
