<script setup>
import { cells } from "@/store/cells.store.ts";

const cols = cells.map((_, i) => String.fromCharCode(65 + i));
</script>

<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th v-for="c in cols">{{ c }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="i in cells[0].length">
        <th>{{ i - 1 }}</th>
        <td v-for="(c, j) in cols">
          <CellItem
            :r="i - 1"
            :c="j"
          ></CellItem>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
body {
  margin: 0;
}

table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

th {
  background-color: #eee;
}

tr:first-of-type th {
  width: 100px;
}

tr:first-of-type th:first-of-type {
  width: 25px;
}

td {
  border: 1px solid #ccc;
  height: 1.5em;
  overflow: hidden;
}
</style>
