<template>
  <div class="login">
    <div class="client-signin card">
      <img class="login__logo" src="../../assets/logo-name.svg" alt="logo" />
      <span class="login__title">Вход для организаторов</span>
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
      <a class="login__forgot-pass">Забыли пароль?</a>
      <button
        v-on:click="confirm()"
        class="login__button button button__primary"
      >
        Войти
      </button>
      <router-link :to="{ name: 'SignUp' }" class="login__signup"
        >Нет аккаунта? <strong>Пройти регистрацию</strong></router-link
      >
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
      this.$cookies.set("auth_token", "1");
      this.$cookies.set("is_admin", false);
      this.$root.auth = 1;
      this.$router.push({ name: "client" });
    },
  },
};
</script>

<style scoped>
.login__input:first-of-type,
.login__logo,
.login__title {
  margin-bottom: 10px;
}
</style>
