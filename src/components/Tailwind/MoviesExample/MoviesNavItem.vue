<script setup>
defineProps({
  href: {
    type: String,
    required: true
  },
  isActive: Boolean
});
</script>

<template>
  <li>
    <a
      :href="href"
      :class="['block rounded-md px-3 py-2', isActive ? 'bg-sky-500 text-white' : 'bg-slate-50']"
    >
      <slot></slot>
    </a>
  </li>
</template>
