// single default slot
h(MyComponent, () => "hello");

// named slots
// notice the `null` is required to avoid
// the slots object being treated as props
h(MyComponent, null, {
  default: () => "default slot",
  foo: () => h("div", "foo"),
  bar: () => [h("span", "one"), h("span", "two")]
});
