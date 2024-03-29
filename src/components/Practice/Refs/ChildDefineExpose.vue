<script setup>
import { ref } from "vue";

const a = 1;
const b = ref(2);

// Compiler macros, such as defineExpose, don't need to be imported
defineExpose({ a, b });
</script>
