<script setup>
onActivated(() => {
  // called on initial mount
  // and every time it is re-inserted from the cache
});

onDeactivated(() => {
  // called when removed from the DOM into the cache
  // and also when unmounted
});
</script>

<template>KeepAliveChild</template>
