<script setup>
const message = inject("message");
</script>

<template>
  <h1>This is the SubchildComponent with the message: {{ message }}</h1>
</template>
