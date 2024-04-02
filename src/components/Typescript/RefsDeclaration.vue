<script setup lang="ts">
// import { ref } from "vue";
// import type { Ref } from "vue";

const year: Ref<string | number> = ref("2020");
year.value = 2020; // ok!

// resulting type: Ref<string | number>
const year2 = ref<string | number>("2020");
year2.value = 2020; // ok!

const n = ref<number | string>("a");
</script>
