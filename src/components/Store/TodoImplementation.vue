<script setup>
// import { ref } from 'vue'
// import { storeToRefs } from 'pinia'
// import { useTodos } from './todos.js'

const todosStore = useTodosStore();
const { filter, filteredTodos } = storeToRefs(todosStore);

const newTodoText = ref("");

function addTodo() {
  if (!newTodoText.value) {
    return;
  }

  todosStore.addTodo(newTodoText.value);
  newTodoText.value = "";
}

function resetStore() {
  todosStore.$reset();
}
</script>

<template>
  <nav class="mb-3">
    <label :class="{ active: filter === 'all' }">
      <input
        v-model="filter"
        type="radio"
        value="all"
      />
      All
    </label>
    <label :class="{ active: filter === 'finished' }">
      <input
        v-model="filter"
        type="radio"
        value="finished"
      />
      Finished
    </label>
    <label :class="{ active: filter === 'unfinished' }">
      <input
        v-model="filter"
        type="radio"
        value="unfinished"
      />
      Unfinished
    </label>
  </nav>
  <hr />
  <div class="my-3">
    <p v-if="!filteredTodos.length">* No todos in this list</p>
    <ul v-else>
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
      >
        <input
          v-model="todo.isFinished"
          type="checkbox"
        />
        {{ todo.text }}
      </li>
    </ul>
  </div>
  <div>
    New Todo:
    <input
      v-model="newTodoText"
      type="text"
      class="text-black"
      @keypress.enter="addTodo"
    />
    <button
      :disabled="!newTodoText"
      @click="addTodo"
    >
      Add
    </button>
    <button
      @click="resetStore"
      class="bg-gray-100"
    >
      Reset store
    </button>
  </div>
</template>

<style scoped>
button,
input {
  @apply border p-2 rounded m-1 cursor-pointer;
}
label {
  @apply cursor-pointer border rounded p-2 m-1;
}
.active {
  @apply bg-gray-100;
}
</style>
