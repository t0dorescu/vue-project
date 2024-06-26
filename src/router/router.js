import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import NotFound from "@/views/NotFoundView.vue";
import UserView from "@/views/UserView.vue";
import UserGeneric from "@/views/User/UserGeneric.vue";
import UserHome from "@/views/User/UserHome.vue";
import UserProfile from "@/views/User/UserProfile.vue";
import UserPosts from "@/views/User/UserPosts.vue";
import UserSettings from "@/views/UserSettings/UserSettings.vue";
import UserEmailsSubscriptions from "@/views/UserSettings/UserEmailsSubscriptions.vue";
import UserProfilePreview from "@/views/UserSettings/UserProfilePreview.vue";

const routes = [
  { path: "/", component: HomeView, name: "home" },
  { path: "/about", component: AboutView },
  {
    path: "/users/:id",
    component: UserView,
    children: [
      {
        path: "",
        name: "user-home",
        component: UserHome
      },
      {
        // UserProfile will be rendered inside User's <RouterView>
        // when /user/:id/profile is matched
        path: "profile",
        name: "user-profile",
        component: UserProfile
      },
      {
        // UserPosts will be rendered inside User's <RouterView>
        // when /user/:id/posts is matched
        path: "posts",
        component: UserPosts
      }
    ]
  },

  {
    path: "/settings",
    // You could also have named views at the top
    component: UserSettings,
    children: [
      {
        path: "emails",
        component: UserEmailsSubscriptions
      },
      {
        path: "profile",
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      }
    ]
  },

  // will match everything and put it under `route.params.pathMatch`
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },

  // will match anything starting with `/user-` and put it under `route.params.afterUser`
  { path: "/user-:afterUser(.*)", component: UserGeneric },

  // /:orderId -> matches only numbers
  { path: "/o/:orderId(\\d+)" },
  // /:productName -> matches anything else
  { path: "/p/:productName" },

  // /:chapters -> matches /one, /one/two, /one/two/three, etc
  { path: "/c/:chapters+" },
  // /:chapters -> matches /, /one, /one/two, /one/two/three, etc
  { path: "/c/:chapters*" }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return desired position
  }
});
