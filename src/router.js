import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Hello",
    component: () => import("@/components/HelloWorld.vue"),
    props: {
      msg: "My Message"
    }
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/components/Contact/Contact.vue")
  }
];

export default new Router({
  routes,
  mode: "history"
});
