import "./assets/main.css";
import i18nPlugin from "./plugins/i18n.js";
import { router } from "./router/router.js";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);

app.use(i18nPlugin, {
  greetings: {
    hello: "Bonjour!"
  }
});

app.mount("#app");
