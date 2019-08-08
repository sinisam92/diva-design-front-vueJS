import Vue from "vue";
import VueRouter from "vue-router";
import jQuery from "jquery";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Login from "./components/Auth/Login";
import SingleBlog from "./components/SingleBlog";
import Accessories from "./components/partials/subpages/Accessories";
import Bracelets from "./components/partials/subpages/Bracelets";
import Earrings from "./components/partials/subpages/Earrings";
import Necklaces from "./components/partials/subpages/Necklaces";
import CreateBlog from "./components/partials/CreateBlog";

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
    name: "accessories",
    path: "/shop/accessories",
    component: Accessories
  },
  {
    name: "bracelets",
    path: "/shop/bracelets",
    component: Bracelets
  },
  {
    name: "earrings",
    path: "/shop/earrings",
    component: Earrings
  },
  {
    name: "necklaces",
    path: "/shop/necklaces",
    component: Necklaces
  },
  {
    name: "about",
    path: "/about",
    component: About
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
