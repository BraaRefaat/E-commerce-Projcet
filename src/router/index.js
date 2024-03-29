import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView"),
  },
  {
    path: "/products",
    name: "products_category",
    component: () => import("@/views/ProductsCategory"),
  },
  {
    path: "/products/product-details/:productId",
    name: "products_details",
    component: () => import("@/views/ProductDetails"),
  },
  {
    path: "/cart-page",
    name: "cart_page",
    component: () => import("@/views/CartPage"),
  },
  {
    path: "/check-out",
    name: "check_out",
    component: () => import("@/views/CheckOut"),
  },
  {
    path: "/Login-Sign-in",
    name: "Login_Sign_in",
    component: () => import("@/views/Login&SigninForm"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
