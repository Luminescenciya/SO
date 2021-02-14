import Vue from "vue";
import VueRouter from "vue-router";
import Viewer from "../components/Viewer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: () => import("../views/Landing.vue"),
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/clientlogin/ClientSignIn.vue"),
    beforeEnter: (to, from, next) => {
      if (Vue.$cookies.get("auth_token") === null) next();
      else if (Vue.$cookies.get("is_admin") === "true")
        next({ name: "AdminHome" });
      else next({ name: "Home" });
    },
    children: [
      {
        path: "/signup",
        name: "SignUp",
        component: () => import("../views/clientlogin/ClientSignUp.vue"),
      },
      {
        path: "/signup-confirm",
        name: "SignUpConfirm",
        component: () => import("../views/clientlogin/ClientSignUpConfirm.vue"),
      },
    ],
  },
  {
    path: "/client",
    name: "client",
    component: Viewer,
    redirect: { name: "Home" },
    beforeEnter: (to, from, next) => {
      if (Vue.$cookies.get("auth_token") === null) next({ name: "SignIn" });
      else if (Vue.$cookies.get("is_admin") === "true")
        next({ name: "AdminHome" });
      else next();
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/client/Home.vue"),
      },
      {
        path: "/new_event",
        name: "NewEvent",
        component: () => import("../views/client/NewEvent.vue"),
      },
      {
        path: "/event/:id",
        name: "EditEvent",
        component: () => import("../views/client/EditEvent.vue"),
      },
      {
        path: "/events",
        name: "Events",
        component: () => import("../views/client/CreatedEvents.vue"),
      },
      {
        path: "/help",
        name: "Help",
        component: () => import("../views/client/Help.vue"),
      },
      {
        path: "/account",
        name: "Account",
        component: () => import("../views/client/Account.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "Admin",
    component: Viewer,
    redirect: { name: "AdminSignIn" },
    beforeEnter: (to, from, next) => {
      if (Vue.$cookies.get("auth_token") === null) next();
      else if (Vue.$cookies.get("is_admin") === "false") next({ name: "Home" });
      else next();
    },
    children: [
      {
        path: "/signin",
        name: "AdminSignIn",
        component: () => import("../views/admin/AdminSignIn.vue"),
      },
      {
        path: "/home",
        name: "AdminHome",
        component: () => import("../views/admin/Home.vue"),
      },
      {
        path: "/requests",
        name: "AdminRequests",
        component: () => import("../views/admin/Requests.vue"),
      },
      {
        path: "/past_events",
        name: "AdminPastEvents",
        component: () => import("../views/admin/PastEvents.vue"),
      },
      {
        path: "/clients",
        name: "AdminClients",
        component: () => import("../views/admin/Clients.vue"),
      },
      {
        path: "/client-profile",
        name: "AdminClientProfile",
        component: () => import("../views/admin/ClientProfile.vue"),
      },
      {
        path: "/analytics",
        name: "AdminAnalytics",
        component: () => import("../views/admin/Analytics.vue"),
      },
    ],
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
