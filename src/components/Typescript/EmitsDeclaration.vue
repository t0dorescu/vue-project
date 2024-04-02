<script setup lang="ts">
/**
// runtime
const emit = defineEmits(["change", "update"]);

// options based
const emit = defineEmits({
  change: (id: number) => {
    // return `true` or `false` to indicate
    // validation pass / fail
  },
  update: (value: string) => {
    // return `true` or `false` to indicate
    // validation pass / fail
  }
});

// type-based
const emit = defineEmits<{
  (e: "change", id: number): void;
  (e: "update", value: string): void;
}>();

// 3.3+: alternative, more succinct syntax
const emit = defineEmits<{
  change: [id: number];
  update: [value: string];
}>();
*/
</script>
