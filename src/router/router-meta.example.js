const routes = [
  {
    path: "/posts",
    component: PostsLayout,
    children: [
      {
        path: "new",
        component: PostsNew,
        // only authenticated users can create posts
        meta: { requiresAuth: true }
      },
      {
        path: ":id",
        component: PostsDetail,
        // anybody can read a post
        meta: { requiresAuth: false }
      }
    ]
  }
];
