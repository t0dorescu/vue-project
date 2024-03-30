<!--
A nested tree component that recursively renders itself.
You can double click on an item to turn it into a folder.
-->

<script setup>
const treeData = ref({
  name: "My Tree",
  children: [
    { name: "hello" },
    { name: "world" },
    {
      name: "child folder",
      children: [
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "world" }]
        },
        { name: "hello" },
        { name: "world" },
        {
          name: "child folder",
          children: [{ name: "hello" }, { name: "world" }]
        }
      ]
    }
  ]
});
</script>

<template>
  <ul>
    <TreeItem
      class="item"
      :model="treeData"
    />
  </ul>
</template>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.bold {
  font-weight: bold;
}
</style>
