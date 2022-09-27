import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/resume",
    name: "Resume",
    component: () => import("../views/Resume.vue")
  },
  {
    path: "/phasmophobia",
    name: "Phasmophobia",
    component: () => import("../views/Phasmophobia.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
