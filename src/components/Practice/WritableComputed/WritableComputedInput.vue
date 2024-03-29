<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="form-group">
    <label
      v-if="$attrs.label"
      :for="$attrs.id"
    >
      {{ $attrs.label }}
    </label>
    <input
      type="text"
      :id="$attrs.id"
      class="form-control"
      :value="$props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
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
