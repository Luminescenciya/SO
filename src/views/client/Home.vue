<template>
  <div class="home content">
    <div class="card">
      <div class="card__content">
        <div class="card__header">
          <h2>Добро пожаловать, {{ name }}</h2>
        </div>
        <p>
          В этой версии сайта вы можете добавлять мероприятия, смотреть историю
          по созданным событиям, связаться с поддержкой, пополнить кошелек и
          изменить данные аккаунта.
        </p>
        <div class="card__box-line">
          <router-link to="/new_event" tag="div" class="box-line__box">
            <i class="material-icons">add_circle_outline</i>
            <span class="card__title">Добавить событие</span>
          </router-link>
          <router-link to="/events" tag="div" class="box-line__box">
            <i class="material-icons">folder_open</i>
            <span class="card__title">Созданные события</span>
          </router-link>
          <router-link to="/help" tag="div" class="box-line__box">
            <i class="material-icons">message</i>
            <span class="card__title">Связь с поддержкой</span>
          </router-link>
          <router-link to="/account" tag="div" class="box-line__box">
            <i class="material-icons">account_circle</i>
            <span class="card__title">Аккаунт</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DataFactory } from "./../../services/DataFactory.js";
const Languages = DataFactory.get("languages");

export default {
  data: function () {
    return {
      name: "lol",
      data: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const { data } = await Languages.get("ru");
      this.data = data;
    },
  },
};
</script>

<style scoped>
.box-line__box {
  width: calc(100% / 5);
}
</style>
