import { defineStore } from "pinia";
import { useCounterCompStore } from "@/store/counter.store-composition";

interface UserInfo {
  id: string;
  active: boolean;
  name: string;
  age: number;
}

export const useCounterOptStore = defineStore("counter", {
  state: () => ({
    count: 0 as number,
    users: [] as UserInfo[]
  }),

  getters: {
    doubleCount: (state) => state.count * 2,
    // the return type **must** be explicitly set
    doublePlusOne(): number {
      // autocompletion and typings for the whole store ✨
      return this.doubleCount + 1;
    },
    getUserById: (state) => {
      return (userId) => state.users.find((user) => user.id === userId);
    },
    getActiveUserById(state) {
      const activeUsers = state.users.filter((user) => user.active);
      return (userId) => activeUsers.find((user) => user.id === userId);
    },
    otherGetter(state): number {
      const counterCompStore = useCounterCompStore();
      return state.count + counterCompStore.count;
    }
  },

  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
    randomizeCounter(): void {
      this.count = Math.round(100 * Math.random());
    }
  }
});
