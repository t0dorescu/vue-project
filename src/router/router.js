import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import UserView from "@/views/UserView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/users/:id", component: UserView }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});
