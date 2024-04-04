<template>
  <button class="btn btn--secondary">Decline</button>
  <button class="btn btn--primary">Accept</button>
</template>

<style scoped>
.btn {
  @apply text-base font-medium rounded-lg py-2 px-5 mx-2;
}

.btn--primary {
  @apply bg-sky-500 text-white;
}

.btn--secondary {
  @apply bg-slate-100 text-slate-900;
}
</style>
