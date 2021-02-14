<template>
  <header id="header" class="header">
    <div class="header__block">
      <img class="header__block--logo" src="../../assets/logo.svg" alt="logo" />
      <h1>SO Supervisor</h1>
    </div>
    <a v-on:click="logout()" class="header__button--exit">Выйти</a>
  </header>
</template>

<script>
export default {
  methods: {
    logout: function () {
      this.$cookies.remove("auth_token");
      this.$cookies.remove("is_admin");
      this.$root.auth = null;
      this.$root.is_admin = false;
      this.$router.push({ name: "Landing" });
    },
  },
};
</script>
