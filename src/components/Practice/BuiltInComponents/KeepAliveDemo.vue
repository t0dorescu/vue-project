<script setup>
const activeComponent = ref("KeepAliveChild");
</script>

<template>
  <!-- Inactive components will be cached! -->
  <KeepAlive>
    <component :is="activeComponent" />
  </KeepAlive>

  <!-- comma-delimited string -->
  <KeepAlive include="a,b">
    <component :is="view" />
  </KeepAlive>

  <!-- regex (use `v-bind`) -->
  <KeepAlive :include="/a|b/">
    <component :is="view" />
  </KeepAlive>

  <!-- Array (use `v-bind`) -->
  <KeepAlive :include="['a', 'b']">
    <component :is="view" />
  </KeepAlive>
</template>
