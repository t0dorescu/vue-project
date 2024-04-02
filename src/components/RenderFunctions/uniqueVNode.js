function renderInvalid() {
  const p = h("p", "hi");
  return h("div", [
    // Yikes - duplicate vnodes!
    p,
    p
  ]);
}

function renderCorrect() {
  return h(
    "div",
    Array.from({ length: 20 }).map(() => {
      return h("p", "hi");
    })
  );
}
