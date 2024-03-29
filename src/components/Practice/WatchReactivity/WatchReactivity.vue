<script setup>
const question = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");
const image = ref("");
const isLoading = ref(false);

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes("?")) {
    isLoading.value = true;
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      const data = await res.json();
      answer.value = data.answer;
      image.value = data.image;
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
    } finally {
      isLoading.value = false;
    }
  }
});

///////

const todoList = ref([
  {
    id: 1,
    title: "Buy groceries",
    completed: false
  },
  {
    id: 2,
    title: "Call mom",
    completed: false
  },
  {
    id: 3,
    title: "Call dad",
    completed: false
  }
]);

const todoId = ref(1);
const data = ref({});
const isLoadingTodo = ref(false);
const qwe = ref(false);

// watch(todoId, async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
//   data.value = await response.json();
// }, { immediate: true });

watchEffect(async () => {
  console.log(qwe.value);
  isLoadingTodo.value = true;
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`);
  data.value = await response.json();
  isLoadingTodo.value = false;
});
</script>

<template>
  <div class="flex items-center gap-x-2 mb-5">
    <label for="todoId">Todo ID</label>
    <input
      id="todoId"
      type="number"
      class="border rounded p-2"
      v-model.number="todoId"
    />
    <button @click="todoId--">Prev</button>
    <button @click="todoId++">Next</button>
    <button @click="qwe = !qwe">Refetch</button>
  </div>
  <div class="mb-5">
    <p v-if="isLoadingTodo">Loading todo data...</p>
    <pre v-else>{{ data }}</pre>
  </div>
  <p>
    Ask a yes/no question:
    <input
      v-model="question"
      :disabled="isLoading"
      class="border rounded p-2"
    />
  </p>
  <p>{{ answer }}</p>
  <img :src="image" />
</template>

<style scoped>
button {
  @apply bg-blue-500 text-white rounded p-2;
}
</style>
