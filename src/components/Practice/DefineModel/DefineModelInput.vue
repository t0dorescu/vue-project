<script setup>
const model = defineModel({
  required: true,
  default: "ww"
});
</script>

<template>
  <div class="form-group">
    <input
      type="text"
      :id="$attrs.id"
      class="form-control"
      v-model="model"
    />
  </div>
</template>

<style scoped>
.form-group {
  @apply flex w-full flex-col;
}
.form-control {
  @apply rounded border border-gray-400 p-2;
}
</style>
