export default {
  props: ["message"],
  setup(props, { slots }) {
    return () => [
      // default slot:
      // <div><slot /></div>
      h("div", slots.default()),

      // named slot:
      // <div><slot name="footer" :text="message" /></div>
      h(
        "div",
        slots.footer({
          text: props.message
        })
      )
    ];
  }
};
