<script setup>
const firstName = ref("John");
const lastName = ref("Doe");

const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },
  set(newValue) {
    // Note: we are using destructuring assignment syntax here.
    [firstName.value, lastName.value] = newValue.split(" ");
  }
});
</script>

<template>
  <div :class="$attrs.class">
    <p
      class="text-2xl my-3"
      v-if="$attrs.title"
    >
      {{ $attrs.title }}
    </p>
    <div class="flex flex-col space-y-5 pb-5">
      <WritableComputedTitle :fullName="fullName" />
      <div class="flex gap-x-5">
        <WritableComputedInput
          id="firstName"
          label="First Name"
          v-model="firstName"
        />
        <WritableComputedInput
          id="lastName"
          label="Last Name"
          v-model="lastName"
        />
      </div>
    </div>
  </div>
</template>
