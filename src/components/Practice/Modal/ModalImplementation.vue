<script setup>
const showModal = ref(false);
</script>

<template>
  <button
    id="show-modal"
    @click="showModal = true"
  >
    Show Modal
  </button>

  <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <ModalWrapper
      :show="showModal"
      @close="showModal = false"
    >
      <template #header>
        <h3>custom header</h3>
      </template>
    </ModalWrapper>
  </Teleport>
</template>
