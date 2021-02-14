<template>
  <div class="sidebar">
    <div class="sidebar__main-panel">
      <ul class="sidebar__menu">
        <router-link
          :to="{ name: 'AdminHome' }"
          tag="li"
          class="sidebar__menu--item"
        >
          <i class="material-icons">home</i>
          <span class="card__title">Домашняя страница</span>
        </router-link>
        <router-link
          :to="{ name: 'AdminRequests' }"
          tag="li"
          class="sidebar__menu--item"
        >
          <i class="material-icons">check_circle_outline</i>
          <span class="card__title">Заявки на одобрение</span>
        </router-link>
        <router-link
          :to="{ name: 'AdminPastEvents' }"
          tag="li"
          class="sidebar__menu--item"
        >
          <i class="material-icons">history</i>
          <span class="card__title">Прошедшие события</span>
        </router-link>
        <router-link
          :to="{ name: 'AdminClients' }"
          tag="li"
          class="sidebar__menu--item"
        >
          <i class="material-icons">insert_emoticon</i>
          <span class="card__title">Организаторы</span>
        </router-link>
        <router-link
          :to="{ name: 'AdminAnalytics' }"
          tag="li"
          class="sidebar__menu--item"
        >
          <i class="material-icons">insert_chart_outline</i>
          <span class="card__title">Аналитика</span>
        </router-link>
        <router-link
          :to="{ name: 'Account' }"
          tag="li"
          class="sidebar__menu--item"
        >
          <i class="material-icons">account_circle</i>
          <span class="card__title">Аккаунт</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
