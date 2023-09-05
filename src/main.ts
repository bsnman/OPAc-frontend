import { createApp } from "vue";
import "./style.css";
import "./font.css";
import "./assets/css/index.scss";
import App from "./App.vue";
import router from "./router.ts";
import pinia from "./store";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(PrimeVue);

app.mount("#app");
