<script setup>
const msg = ref("You did it");

const imgAttr = {
  alt: "Vue logo",
  class: "logo",
  width: "125",
  height: "125"
};

const imgEvents = {
  click() {
    msg.value = "You clicked the image";
  },
  mouseover() {
    console.log("mouse over!!");
  },
  mouseleave() {
    console.log("mouse leave!!");
  }
};

const showDates = ref(false);

const onButtonClick = () => {
  showDates.value = !showDates.value;
};

const nowComputed = computed(() => Date.now());
const nowMethod = () => Date.now();
</script>

<template>
  <header>
    <img
      v-bind="imgAttr"
      v-on="imgEvents"
      src="@/assets/logo.svg"
    />
    <div class="wrapper">
      <HelloWorld :msg />
    </div>
  </header>
  <main class="mb-10">
    <div class="text-center mt-10">
      <BaseButton
        @click="onButtonClick"
        class="green"
      >
        {{ !showDates ? "Show dates" : "Hide dates" }}
      </BaseButton>
      <h1
        v-if="showDates"
        class="my-5"
      >
        Now computed - {{ nowComputed }}
        <br />
        Now method - {{ nowMethod() }}
      </h1>
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
