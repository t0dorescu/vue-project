export function useMouseTracker() {
  const x = ref(0);
  const y = ref(0);

  useMountEventListener(window, "mousemove", (event) => {
    x.value = event.pageX;
    y.value = event.pageY;
  });

  return { x, y };
}
