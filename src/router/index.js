import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/homeView.vue";
import Account from "../views/loginView.vue";
import Purchase from "../views/purchaseView.vue";

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/account',
    component: Account
  },
  {
    path: '/purchase',
    component: Purchase
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;