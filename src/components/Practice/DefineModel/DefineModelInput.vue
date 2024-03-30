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
  @apply w-full flex flex-col;
}
.form-control {
  @apply border p-2 border-gray-400 rounded;
}
</style>
