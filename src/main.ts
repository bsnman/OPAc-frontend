import { createApp } from "vue";
import "./style.css";
import "./font.css";
import "./assets/css/index.scss";
import App from "./App.vue";
import router from "./router.ts";
import pinia from "./store";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
