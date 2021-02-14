import Vue from "vue";
import VueCookies from "vue-cookies";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueCookies);
Vue.$cookies.config("1d");

new Vue({
  router,
  data: function () {
    return {
      auth: null,
      is_admin: false,
    };
  },
  created() {
    this.auth = this.$cookies.get("auth_token");
    if (this.$cookies.get("is_admin") !== null)
      this.is_admin = this.$cookies.get("is_admin");
  },
  render: (h) => h(App),
}).$mount("#app");
