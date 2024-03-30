<template>
  <BaseLayout>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <template #default="{ text, count }">
      <p>{{ text }} -- {{ count }} -- A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </BaseLayout>
</template>
