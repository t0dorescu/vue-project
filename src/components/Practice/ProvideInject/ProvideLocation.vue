<script setup>
const location = ref("North Pole");

const updateLocation = (newValue) => {
  location.value = newValue;
};

provide("location", {
  location,
  updateLocation
});
</script>

<template>
  ProvideLocation
  <br />
  <InjectLocation />
</template>
