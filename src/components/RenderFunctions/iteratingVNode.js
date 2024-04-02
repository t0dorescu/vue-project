h("div", [ok.value ? h("div", "yes") : h("span", "no")]);

h(
  "ul",
  // assuming `items` is a ref with array value
  items.value.map(({ id, text }) => {
    return h("li", { key: id }, text);
  })
);
