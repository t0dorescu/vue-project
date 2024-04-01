import "./assets/main.css";
import i18nPlugin from "./plugins/i18n.js";
import { router } from "./router/router.js";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.use(router);

app.use(i18nPlugin, {
  greetings: {
    hello: "Bonjour!"
  }
});

app.mount("#app");
