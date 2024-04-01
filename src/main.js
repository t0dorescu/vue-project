import "./assets/main.css";
import i18nPlugin from "./plugins/i18n.js";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App).mount("#app");

app.use(i18nPlugin, {
  greetings: {
    hello: "Bonjour!"
  }
});
