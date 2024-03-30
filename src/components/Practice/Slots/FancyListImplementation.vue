<template>
  <FancyList
    api-url="https://jsonplaceholder.typicode.com/todos"
    :per-page="10"
  >
    <template #item="{ title, userId, completed }">
      <div class="item">
        <p>{{ title }}</p>
        <p>by {{ userId }} | {{ completed ? "Completed" : "Not Completed" }}</p>
      </div>
    </template>
  </FancyList>
</template>

<style scoped>
.item {
  @apply my-5 border p-5 rounded;
}
</style>
