<script setup>
const msg = ref("You did it");

const imgAttr = {
  alt: "Vue logo",
  class: "logo",
  width: "125",
  height: "125"
};

const isButtonDisabled = ref(false);
const onButtonClick = () => (isButtonDisabled.value = true);
</script>

<template>
  <header>
    <img
      v-bind="imgAttr"
      src="./assets/logo.svg"
    />
    <div class="wrapper">
      <HelloWorld :msg />
    </div>
  </header>

  <main>
    <div class="text-center mt-10">
      <BaseButton
        :disabled="isButtonDisabled"
        @click="onButtonClick"
      >
        Click me!!!
      </BaseButton>
    </div>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
