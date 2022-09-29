import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Resume from "../views/Resume.vue"
import Phasmo from "../views/Phasmo.vue"
import Fallback from "../views/404.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume
  },
  {
    path: "/phasmophobia",
    name: "Phasmophobia",
    component: Phasmo
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Fallback
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
