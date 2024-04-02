<script setup>
const shallowArray = shallowRef([
  /* big list of deep objects */
]);

// this won't trigger updates...
shallowArray.value.push(newObject);
// this does:
shallowArray.value = [...shallowArray.value, newObject];

// this won't trigger updates...
shallowArray.value[0].foo = 1;
// this does:
shallowArray.value = [
  {
    ...shallowArray.value[0],
    foo: 1
  },
  ...shallowArray.value.slice(1)
];
</script>
