import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../views/SignIn.vue";
import UserPage from "../views/UserPage.vue";
import Messages from "../components/User/Messages.vue";
import Users from "../components/User/Users.vue";
import Friends from "../components/User/Friends.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/signup",
    name: "SignUp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue")
  },
  {
    path: "/user",
    name: "UserPage",
    component: UserPage
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages
  },
  {
    path: "/users",
    name: "Users",
    component: Users
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
