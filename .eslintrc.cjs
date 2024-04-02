/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier/skip-formatting"
  ],
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: "latest"
    }
  },
  rules: {
    "vue/require-v-for-key": "off",
    "vue/no-mutating-props": "off",
    "vue/valid-v-for": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",
    "no-undef": "off"
  }
};
