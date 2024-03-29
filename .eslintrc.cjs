/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-prettier/skip-formatting"
    // "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest"
  },
  rules: {
    "vue/require-v-for-key": "off"
  }
};
