// replace
// import UserDetails from './views/UserDetails'
// with
const UserDetails = () => import("./views/UserDetails.vue");

const router = createRouter({
  // ...
  routes: [
    { path: "/users/:id", component: UserDetails },
    // or use it directly in the route definition
    { path: "/users/:id", component: () => import("./views/UserDetails.vue") }
  ]
});
