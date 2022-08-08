import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/index.vue";
import Preview from '../views/preview';
import Test from "../views/test.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview,
    },
    {
      path: "/test",
      name: "test",
      component: Test,
    },
  ],
});

export default router;
