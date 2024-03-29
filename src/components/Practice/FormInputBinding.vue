<script setup>
const text = ref("text");
const message = ref("message");
const checked = ref(true);
const checkedNames = ref([]);
const pick = ref("");
const picked = ref("");
const selected = ref("");
const selectedMultiple = ref();
const selectedDynamic = ref("C");
const optionsDynamic = ref([
  { text: "One", value: "A" },
  { text: "Two", value: "B" },
  { text: "Three", value: "C" }
]);

const toggle = ref("");
const toggleDynamic = ref("");

const first = ref("first");
const second = ref("second");
</script>

<template>
  <div class="vertical">
    <h1>True/False Dynamic Checkbox</h1>
    <p>Toggle dynamic value: {{ toggleDynamic }}</p>
    <div class="checkbox">
      <input
        type="checkbox"
        v-model="toggleDynamic"
        :true-value="message"
        :false-value="text"
      />
    </div>
  </div>
  <div class="vertical">
    <input
      :value="text"
      placeholder="Change text ..."
      @input="(event) => (text = event.target.value)"
    />
    <input
      placeholder="Change text ..."
      v-model="text"
    />
    <p>Message is: {{ message }}</p>
    <input
      v-model="message"
      placeholder="edit me"
    />
  </div>
  <div class="vertical">
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <textarea
      v-model="message"
      placeholder="add multiple lines"
    />
  </div>
  <div class="vertical">
    <div class="checkbox">
      <input
        type="checkbox"
        id="checkbox"
        v-model="checked"
      />
      <label
        for="checkbox"
        class="select-none"
      >
        {{ checked }}
      </label>
    </div>
  </div>
  <div class="vertical">
    <div>Checked names: {{ checkedNames }}</div>
    <div class="checkbox">
      <input
        type="checkbox"
        id="jack"
        value="Jack"
        v-model="checkedNames"
      />
      <label for="jack">Jack</label>
    </div>
    <div class="checkbox">
      <input
        type="checkbox"
        id="john"
        value="John"
        v-model="checkedNames"
      />
      <label for="john">John</label>
    </div>
    <div class="checkbox">
      <input
        type="checkbox"
        id="mike"
        value="Mike"
        v-model="checkedNames"
      />
      <label for="mike">Mike</label>
    </div>
  </div>
  <div class="vertical">
    <div>Picked: {{ picked }}</div>
    <div class="checkbox">
      <input
        type="radio"
        id="one"
        value="One"
        v-model="picked"
      />
      <label for="one">One</label>
    </div>
    <div class="checkbox">
      <input
        type="radio"
        id="two"
        value="Two"
        v-model="picked"
      />
      <label for="two">Two</label>
    </div>
  </div>
  <div class="vertical">
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option
        disabled
        value=""
      >
        Please select one
      </option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
  <div class="vertical">
    <div>Selected multiple: {{ selectedMultiple }}</div>
    <select
      v-model="selectedMultiple"
      multiple
    >
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
  <div class="vertical">
    <div>Selected dynamic: {{ selectedDynamic }}</div>
    <select v-model="selectedDynamic">
      <option
        v-for="option in optionsDynamic"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
  <div class="vertical">
    <h1>Value Binding:</h1>
    <!-- `picked` is a string "a" when checked -->
    <div class="checkbox">
      <input
        type="radio"
        v-model="picked"
        value="a"
      />
    </div>

    <!-- `toggle` is either true or false -->
    <div class="checkbox">
      <input
        type="checkbox"
        v-model="toggle"
      />
    </div>
    <div class="checkbox">
      <!-- `selected` is a string "abc" when the first option is selected -->
      <select v-model="selected">
        <option value="abc">ABC</option>
      </select>
    </div>
  </div>
  <div class="vertical">
    <p>Pick value: {{ pick }}</p>
    <div class="checkbox">
      <input
        type="radio"
        v-model="pick"
        :value="first"
      />
    </div>
    <div class="checkbox">
      <input
        type="radio"
        v-model="pick"
        :value="second"
      />
    </div>
  </div>
  <div class="vertical">
    <h1>True/False Value Checkbox</h1>
    <p>Toggle value: {{ toggle }}</p>
    <div class="checkbox">
      <input
        type="checkbox"
        v-model="toggle"
        true-value="yes"
        false-value="no"
      />
    </div>
  </div>
  <div class="vertical">
    Selected 123
    <select v-model="selected">
      <!-- inline object literal -->
      <option :value="{ number: 123 }">123</option>
    </select>
  </div>
</template>

<style scoped>
h1 {
  @apply text-xl;
}
input,
textarea,
select,
option {
  @apply p-3 border rounded w-full;
}
.vertical {
  @apply flex flex-col gap-5 m-5 items-start justify-start;
}
.checkbox {
  @apply flex gap-x-5;
}
.checkbox,
.checkbox > * {
  @apply cursor-pointer;
}
</style>
