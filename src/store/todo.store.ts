import { defineStore } from "pinia";

interface State {
  todos: Todo[];
  filter: Filter;
  nextId: number;
}

interface Todo {
  id: number;
  text: string;
  isFinished: boolean;
}

type Filter = "all" | "finished" | "unfinished";

export const useTodosStore = defineStore("todos", {
  state: () =>
    <State>{
      todos: [] as Todo[],
      filter: "all" as Filter,
      nextId: 0 as number
    },
  getters: {
    finishedTodos(state): Todo[] {
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state): Todo[] {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    filteredTodos(): Todo[] {
      if (this.filter === "finished") {
        return this.finishedTodos;
      } else if (this.filter === "unfinished") {
        return this.unfinishedTodos;
      }
      return this.todos;
    }
  },
  actions: {
    addTodo(text): void {
      this.todos.push(<Todo>{
        text,
        id: this.nextId++,
        isFinished: false
      });
    }
  }
});
