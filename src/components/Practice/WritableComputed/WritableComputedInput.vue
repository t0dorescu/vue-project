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
  @apply flex w-full flex-col;
}
.form-control {
  @apply rounded border border-gray-400 p-2;
}
</style>
