<script setup>
defineOptions({
  inheritAttrs: false
});

const attrs = useAttrs();
const slots = useSlots();
</script>

<template>
  <div class="btn-wrapper">
    <button
      class="btn"
      v-bind="$attrs"
    >
      click me
    </button>
  </div>
</template>
