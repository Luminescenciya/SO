<template>
  <div class="sidebar">
    <div class="sidebar__main-panel">
      <ul class="sidebar__menu">
        <router-link
          :to="{ name: 'Home' }"
          tag="li"
          class="sidebar__menu--item"
        >
          <i class="material-icons">home</i>
          <span class="card__title">Домашняя страница</span>
        </router-link>
        <router-link
          :to="{ name: 'NewEvent' }"
          tag="li"
          class="sidebar__menu--item"
        >
          <i class="material-icons">add_circle_outline</i>
          <span class="card__title">Добавить событие</span>
        </router-link>
        <router-link
          :to="{ name: 'Events' }"
          tag="li"
          class="sidebar__menu--item"
        >
          <i class="material-icons">folder_open</i>
          <span class="card__title">Созданные события</span>
        </router-link>
        <router-link
          :to="{ name: 'Help' }"
          tag="li"
          class="sidebar__menu--item"
        >
          <i class="material-icons">message</i>
          <span class="card__title">Связь с поддержкой</span>
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
