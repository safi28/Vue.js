import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import login from "@/components/auth/Auth.vue";
import LoggedHome from "@/components/pages/LoggedPage.vue";
import Calories from '@/components/pages/Food/Calories.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/contact",
    name: "ContactInfo",
    component: () => import("../views/Contact.vue")
  },
  {
    path: "/dashboard",
    name: "LoggedHome",
    component: LoggedHome
  },
  {
    path: "/calories",
    name: "Calories",
    component: Calories
  }
];

const router = new VueRouter({
  routes
});
import * as firebase from "firebase/app";

export default router;