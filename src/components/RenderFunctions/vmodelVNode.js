export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    return () =>
      h(SomeComponent, {
        modelValue: props.modelValue,
        "onUpdate:modelValue": (value) => emit("update:modelValue", value)
      });
  }
};
