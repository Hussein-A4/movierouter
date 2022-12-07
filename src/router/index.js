import { createRouter, createWebHistory } from "vue-router";
import homeView from "../views/homeView.vue";
import loginView from "../views/loginView.vue";
import purchaseView from "../views/purchaseView.vue";

const routes = [
  {
    path: '/',
    component: homeView
  },
  {
    path: '/login',
    component: loginView
  },
  {
    path: '/purchase',
    component: purchaseView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;