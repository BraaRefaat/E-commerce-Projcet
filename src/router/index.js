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
    path: "/login-sign-in",
    name: "Login_Sign_in",
    component: () => import("@/views/Login&SigninForm"),
  },
  {
    path: "/dash-board",
    name: "dash_board",
    component: () => import("@/views/DashboardView"),
    children: [
      {
        path: "home",
        component: () => import("@/views/BoardHome.vue"),
      },
      {
        path: "new-banners",
        component: () => import("@/views/UpdateBanners.vue"),
      },
      {
        path: "new-offers",
        component: () => import("@/views/ChangeOffers.vue"),
      },
      {
        path: "products",
        component: () => import("@/views/BoardProducts.vue"),
      },
      {
        path: "categories",
        component: () => import("@/views/BoardCategories.vue"),
      },
      {
        path: "add-category",
        component: () => import("@/views/AddCategory.vue"),
      },
      {
        path: "add-product",
        component: () => import("@/views/AddProduct.vue"),
      },
    ],
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
