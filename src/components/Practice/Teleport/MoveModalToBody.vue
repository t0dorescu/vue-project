<script setup>
const open = ref(false);
const isMobile = ref(false);
</script>

<template>
  <button @click="open = true">Open Modal</button>

  <Teleport
    to="body"
    :disabled="isMobile"
  >
    <div
      v-if="open"
      class="modal"
    >
      <p>Hello from the modal!</p>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>
