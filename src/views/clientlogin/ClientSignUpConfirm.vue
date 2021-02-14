<template>
  <div class="login">
    <div class="client-signup-confirm card">
      <img class="login__logo" src="../../assets/logo-name.svg" alt="logo" />
      <span class="login__title">Регистрация организатора</span>
      <p>
        Мы отправили вам на почту проверочный код. Пожалуйста, введите его в
        поле ниже:
      </p>
      <input
        type="text"
        class="login__input"
        v-model="login"
        placeholder="Введите проверочный код"
      />
      <button
        tag="button"
        v-on:click="confirm()"
        class="login__button button button__primary"
      >
        Начать!
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
      this.$cookies.set("auth_token", "1");
      this.$root.auth = 1;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.card * {
  margin-bottom: 20px;
}
</style>
