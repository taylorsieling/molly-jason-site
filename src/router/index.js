import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Schedule from "../views/Schedule.vue";
import OurStory from "../views/OurStory.vue";
import Registry from "../views/Registry.vue";
import Rsvp from "../views/Rsvp.vue";
import TravelInfo from "../views/TravelInfo.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/our-story", name: "Our Story", component: OurStory },
  { path: "/schedule", name: "schedule", component: Schedule },
  { path: "/rsvp", name: "RSVP", component: Rsvp },
  { path: "/travel-info", name: "Travel Info", component: TravelInfo },
  { path: "/registry", name: "Registry", component: Registry },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
