<template>
  <login v-if="$root.auth === null" />
  <div v-else id="app" class="page">
    <template v-if="$root.is_admin == 'true'">
      <app-header-admin />
      <div class="page__layout">
        <sidebar-admin v-if="$route.path !== '/home'" />
        <router-view />
      </div>
    </template>
    <template v-else>
      <app-header />
      <div class="page__layout">
        <sidebar />
        <router-view />
      </div>
    </template>
  </div>
</template>

<script>
import ClientHeader from "./components/client/Header.vue";
import ClientSidebar from "./components/client/Sidebar.vue";
import login from "./components/Viewer.vue";

export default {
  components: {
    sidebar: ClientSidebar,
    "app-header": ClientHeader,
    login: login,
    "app-header-admin": () => import("./components/admin/Header.vue"),
    "sidebar-admin": () => import("./components/admin/Sidebar.vue"),
  },
  data: function () {
    return {
      home: false,
    };
  },
};
</script>

<style>
@import "./assets/style.css";
@import "./assets/mapbox/mapbox.css";
</style>
