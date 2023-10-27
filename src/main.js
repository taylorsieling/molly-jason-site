import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { Inkline, components } from "@inkline/inkline";
import "./assets/css/variables/index.scss";
import "@inkline/inkline/css/index.scss";
import "@inkline/inkline/css/utilities.scss";

createApp(App).use(router).use(Inkline, { components }).mount("#app");
