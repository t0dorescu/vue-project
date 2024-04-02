import { h, ref } from "vue";

export default {
  setup() {
    const divEl = ref();

    // <div ref="divEl">
    return () => h("div", { ref: divEl });
  }
};
