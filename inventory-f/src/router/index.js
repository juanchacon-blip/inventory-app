import { createRouter, createWebHistory } from "vue-router";
import ProductsView from "../views/ProductsView.vue";

const routes = [
  {
    path: "/",
    redirect: "/products",
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;