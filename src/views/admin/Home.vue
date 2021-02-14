<template>
  <div class="home content">
    <div class="card">
      <h2>Добро пожаловать, {{ name }}</h2>
      <p>
        В этой версии сайта вы работать с заявками, смотреть прошедшие события,
        верифицировать пользователей и подглядывать за аналитикой
      </p>
      <div class="card__box-line">
        <router-link
          :to="{ name: 'AdminRequests' }"
          tag="div"
          class="box-line__box"
        >
          <i class="material-icons">check_circle_outline</i>
          <span class="card__title">Заявки на одобрение</span>
        </router-link>
        <router-link
          :to="{ name: 'AdminPastEvents' }"
          tag="div"
          class="box-line__box"
        >
          <i class="material-icons">history</i>
          <span class="card__title">Прошедшие события</span>
        </router-link>
        <router-link
          :to="{ name: 'AdminClients' }"
          tag="div"
          class="box-line__box"
        >
          <i class="material-icons">insert_emoticon</i>
          <span class="card__title">Организаторы</span>
        </router-link>
        <router-link
          :to="{ name: 'AdminAnalytics' }"
          tag="div"
          class="box-line__box"
        >
          <i class="material-icons">insert_chart_outline</i>
          <span class="card__title">Аналитика</span>
        </router-link>
        <router-link
          :to="{ name: 'AdminClients' }"
          tag="div"
          class="box-line__box"
        >
          <i class="material-icons">account_circle</i>
          <span class="card__title">Аккаунт</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      name: "lol",
    };
  },
};
</script>
