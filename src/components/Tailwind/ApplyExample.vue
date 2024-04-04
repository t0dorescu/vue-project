<template>
  <button class="btn btn--secondary">Decline</button>
  <button class="btn btn--primary">Accept</button>
</template>

<style scoped>
.btn {
  @apply mx-2 rounded-lg px-5 py-2 text-base font-medium;
}

.btn--primary {
  @apply bg-sky-500 text-white;
}

.btn--secondary {
  @apply bg-slate-100 text-slate-900;
}
</style>
