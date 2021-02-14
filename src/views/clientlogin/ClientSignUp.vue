<template>
  <div class="login">
    <div class="client-signup card">
      <img class="login__logo" src="../../assets/logo-name.svg" alt="logo" />
      <span class="login__title">Регистрация организатора</span>
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
        placeholder="Введите вашу почту"
      />
      <input
        type="text"
        class="login__input"
        v-model="password"
        placeholder="Введите пароль"
      />
      <input
        type="text"
        class="login__input"
        v-model="password"
        placeholder="Введите пароль второй раз"
      />
      <input
        type="text"
        class="login__input"
        v-model="password"
        placeholder="Ваш номер телефона тоже понадобится"
      />
      <textarea
        type="text"
        class="login__textarea"
        v-model="password"
        placeholder="Пожалуйста, расскажите немного о себе и своем месте работы"
      />
      <router-link
        to="/signup-confirm"
        tag="button"
        class="login__button button button__primary"
        >Зарегистрироваться</router-link
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
};
</script>

<style scoped>
.card * {
  margin-bottom: 20px;
}
</style>
