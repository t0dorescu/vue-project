import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import UserView from "@/views/UserView.vue";
import UserGeneric from "@/views/UserGeneric.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView },
  { path: "/users/:id", component: UserView },

  // will match everything and put it under `route.params.pathMatch`
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },

  // will match anything starting with `/user-` and put it under `route.params.afterUser`
  { path: "/user-:afterUser(.*)", component: UserGeneric }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes
});
