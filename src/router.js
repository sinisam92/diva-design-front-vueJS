import Vue from "vue";
import VueRouter from "vue-router";
import jQuery from "jquery";
import Home from "./components/Home";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import About from "./components/About";
import Login from "./components/Auth/Login";
import SingleBlog from "./components/SingleBlog";
import CreateBlog from "./components/partials/CreateBlog";
import AddNewProduct from "./components/partials/AddNewProduct";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
// import CKEditor from '@ckeditor/ckeditor5-vue';
// import VueCkeditor from "vue-ckeditor2";

// Vue.use(CKEditor);
// Vue.use(VueCkeditor);

Vue.use({
  install(Vue) {
    Vue.jQuery = jQuery;
    Vue.prototype.$jQuery = jQuery;
  }
});

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    name: "home",
    path: "/home",
    component: Home
  },
  {
    name: "shop",
    path: "/shop",
    component: Shop
  },
  {
    name: "about",
    path: "/about",
    component: About
  },
  {
    name: "single-product",
    path: "/single-product/:id",
    component: SingleProduct
  },
  {
    name: "single-blog",
    path: "/blogs/:id",
    component: SingleBlog
  },
  {
    name: "login",
    path: "/home/login",
    component: Login
  },
  {
    name: "create-blog",
    path: "/create-blog",
    component: CreateBlog
  },
  {
    name: "add-new-product",
    path: "/add-new-product",
    component: AddNewProduct
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;
