<script setup>
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

/////

function patchOptions() {
  todosStore.$patch({
    count: store.count + 1,
    age: 120,
    name: "DIO"
  });
}

function patchComposition() {
  todosStore.$patch((state) => {
    state.items.push({ name: "shoes", quantity: 1 });
    state.hasChanged = true;
  });
}

function patchState() {
  // this doesn't actually replace `$state`
  todosStore.$state = { count: 24 };
  // it internally calls `$patch()`:
  todosStore.$patch({ count: 24 });
}

todosStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type; // 'direct' | 'patch object' | 'patch function'
  // same as cartStore.$id
  mutation.storeId; // 'cart'
  // only available with mutation.type === 'patch object'
  mutation.payload; // patch object passed to cartStore.$patch()

  // persist the whole state to the local storage whenever it changes
  localStorage.setItem("cart", JSON.stringify(state));
});
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
  @apply m-1 cursor-pointer rounded border p-2;
}
label {
  @apply m-1 cursor-pointer rounded border p-2;
}
.active {
  @apply bg-gray-100;
}
</style>
