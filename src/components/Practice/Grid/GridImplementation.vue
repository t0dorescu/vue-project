<!--
An example of creating a reusable grid component and using it with external data.
-->

<script setup>
const searchQuery = ref("");
const gridColumns = ["name", "power"];
const gridData = [
  { name: "Chuck Norris", power: Infinity },
  { name: "Bruce Lee", power: 9000 },
  { name: "Jackie Chan", power: 7000 },
  { name: "Jet Li", power: 8000 }
];
</script>

<template>
  <form id="search">
    Search
    <input
      name="query"
      v-model="searchQuery"
    />
  </form>
  <GridTable
    :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery"
  />
</template>
