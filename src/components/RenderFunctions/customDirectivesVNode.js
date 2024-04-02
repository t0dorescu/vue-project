import { h, withDirectives } from "vue";

// a custom directive
const pin = {
  mounted() {
    /* ... */
  },
  updated() {
    /* ... */
  }
};

// <div v-pin:top.animate="200"></div>
const vnode = withDirectives(h("div"), [[pin, 200, "top", { animate: true }]]);
