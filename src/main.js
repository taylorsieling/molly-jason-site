import { createApp } from "vue";
import './index.css'
import App from "./App.vue";
import router from "./router";
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();

createApp(App).use(router).mount("#app");
