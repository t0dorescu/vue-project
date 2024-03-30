<script setup>
const { location, updateLocation } = inject("location");
const newLocation = ref("South Pole");
</script>

<template>
  InjectLocation
  <br />
  <input
    class="border"
    name="newLocation"
    v-model="newLocation"
  />
  <button @click="updateLocation(newLocation)">{{ location }}</button>
</template>
