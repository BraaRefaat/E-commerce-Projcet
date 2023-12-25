import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    flashDeals: [],
    newProducts: [],
    topProducts: [],
    categoryProducts: [],
    singleProduct: "",
    categories: [
      {
        title: "هواتف ذكية",
        route: "smartphones",
      },
      {
        title: "لاب توب",
        route: "laptops",
      },
      {
        title: "أثاثات",
        route: "furniture",
      },
      {
        title: "إضاءات",
        route: "lighting",
      },
      {
        title: "نظارات شمسية",
        route: "sunglasses",
      },
      {
        title: "دراجات نارية",
        route: "motorcycle",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => {
          this.newProducts = res.data.products.filter(
            (el) => el.category === "laptops"
          );
          this.topProducts = res.data.products.filter((el) => el.rating >= 4.5);
          this.flashDeals = res.data.products.slice(0, 8);
        })
        .catch((err) => console.log(err));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((res) => (this.categoryProducts = res.data));
    },
    async getSingleProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((res) => (this.singleProduct = res.data));
    },
  },
});
