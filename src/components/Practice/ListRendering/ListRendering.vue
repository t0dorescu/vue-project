<script setup>
const personObj = reactive({
  title: "How to do lists in Vue",
  author: "Jane Doe",
  publishedAt: "2016-04-10"
});

const items = reactive([
  {
    msg: "message 1"
  },
  {
    msg: "message 2"
  },
  {
    msg: "message 3"
  }
]);

const todos = reactive([
  {
    name: "todo 1",
    isComplete: true
  },
  {
    name: "todo 2",
    isComplete: false
  },
  {
    name: "todo 3",
    isComplete: true
  },
  {
    name: "todo 4",
    isComplete: false
  }
]);

const todosReversed = computed(() => {
  return [...todos].reverse();
});

const rearangeTodos = () => {
  // `todos` is a ref with array value
  todos.value = todos.value.filter((item) => item.name.match(/Foo/));
};

const numbers = ref([1, 2, 3, 4, 5]);

const evenNumbers = computed(() => {
  return numbers.value.filter((n) => n % 2 === 0);
});

const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
]);

const even = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};
</script>

<template>
  <div class="mb-5 flex flex-col space-y-5">
    <ul>
      <li v-for="(value, key, index) in personObj">
        <span>{{ `${index}.${key}: ${value}` }}</span>
      </li>
    </ul>
    <div>
      <span
        v-for="n in 10"
        class="pr-2"
      >
        {{ n }}
      </span>
    </div>
    <div>
      <ul>
        <template v-for="item in items">
          <li>{{ item.msg }}</li>
          <li role="presentation"></li>
        </template>
      </ul>
    </div>
    <div>
      <template
        v-for="todo in todos"
        :key="todo.name"
      >
        <li v-if="!todo.isComplete">
          {{ todo.name }}
        </li>
      </template>
    </div>
    <div>
      <ul>
        <li
          v-for="n in evenNumbers"
          class="inline px-1"
        >
          <span>{{ n }}</span>
        </li>
      </ul>
    </div>
    <div class="flex">
      <ul v-for="numbers in sets">
        <li
          v-for="n in even(numbers)"
          class="inline px-1"
        >
          <span>{{ n }}</span>
        </li>
      </ul>
    </div>
    <div>
      <pre>{{ todosReversed }}</pre>
    </div>
  </div>
</template>
