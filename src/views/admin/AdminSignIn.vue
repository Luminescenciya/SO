<template>
  <div class="login">
    <div class="client-signin card">
      <img class="login__logo" src="../../assets/logo-name.svg" alt="logo" />
      <span class="login__title">Вход для модераторов</span>
      <input
        type="text"
        class="login__input"
        v-model="login"
        placeholder="Введите логин"
      />
      <input
        type="text"
        class="login__input"
        v-model="password"
        placeholder="Введите пароль"
      />
      <button
        v-on:click="confirm()"
        class="login__button button button__primary"
      >
        Войти
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      login: "",
      password: "",
    };
  },
  methods: {
    confirm: function () {
      this.$cookies.set("auth_token", "2");
      this.$cookies.set("is_admin", true);
      this.$root.auth = 2;
      this.$root.is_admin = "true";
      this.$router.push({ name: "AdminHome" });
    },
  },
};
</script>

<style scoped>
.login__input,
.login__logo,
.login__title {
  margin-bottom: 10px;
}
</style>
