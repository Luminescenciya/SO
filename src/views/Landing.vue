<template>
  <div class="landing">
    <section class="cover-page">
      <header class="cover-page__header">
        <div class="header__left">
          <img
            class="logo"
            src="../assets/landing/Header_logo.svg"
            alt="header-logo"
          />
        </div>
        <div class="header__right">
          <!-- <ul class="header__menu">
            <li>Для кого</li>
            <li>Что внутри</li>
            <li>FAQ</li>
            <li>Контакты</li> -->
          <router-link
            :to="{ name: 'SignIn' }"
            tag="button"
            class="header__button"
            >Вход для организатора
          </router-link>
          <!-- </ul> -->
        </div>
      </header>
      <main class="cover-page__main">
        <img src="../assets/landing/Slide1_logo.svg" alt="cover-page-logo" />
        <h1 class="main__title">Мобильное приложение для поиска мероприятий</h1>
        <p class="main__mission landing__text">
          Мы связываем артистов со слушателями <br />
          и создаем мир музыки без границ
        </p>
        <div class="networks-logo">
          <a href="https://vk.com/soldoutapp" target="_blank"
            ><img src="../assets/landing/Vk.svg" alt="vk-logo"
          /></a>
          <a href="https://www.instagram.com/soldout.app/" target="_blank"
            ><img src="../assets/landing/Instagram.svg" alt="inst-logo"
          /></a>
        </div>
        <button class="button button__primary cover-page__button">
          Скоро в App Store и Google Play
        </button>
      </main>
      <footer class="section__footer">
        <a href="#what-inside"
          ><img src="../assets/landing/Arrow.svg" alt="arrow"
        /></a>
      </footer>
    </section>
    <section
      id="what-inside"
      class="section section__two-column section__two-column_mockup-right what-inside"
    >
      <main class="main what-inside__main">
        <div class="main__column text-column">
          <div class="column__header">
            <div
              class="mockup-column__rectangle_small what-inside-header__rectangle"
            ></div>
            <h2 class="header__title">Что внутри?</h2>
          </div>
          <ul class="column__list landing__text">
            <li>Афиша музыкальных мероприятий Петербурга и Москвы</li>
            <li>Большая подборка концертов, в том числе начинающих артистов</li>
            <li>
              Анонсы концертов зарубежных артистов, которые редко приезжают в
              Россию
            </li>
            <li>Удобный поиск по городам, жанрам, площадкам, исполнителям</li>
            <li>Карта, на которой легко найти ближайший концерт</li>
          </ul>
          <button class="button button__primary">Найти мероприятие</button>
        </div>
        <div class="main__column main__column_right mockup-column">
          <div class="mockup-column__layout">
            <div
              class="mockup-column__rectangle_big what-inside__rectangle"
            ></div>
            <img
              class="mockup-column__mockup"
              src="../assets/landing/Slide1_mockup.png"
              alt="mockup-what-inside"
            />
          </div>
        </div>
      </main>
      <footer class="section__footer">
        <a href="#for-manager"
          ><img src="../assets/landing/Arrow.svg" alt="arrow"
        /></a>
      </footer>
    </section>
    <section
      id="for-manager"
      class="section section__two-column section__two-column_mockup-left for-manager"
    >
      <main class="main for-manager__main">
        <div class="main__column mockup-column">
          <div class="mockup-column__layout">
            <div
              class="mockup-column__rectangle_big for-manager__rectangle"
            ></div>
            <img
              class="mockup-column__mockup"
              src="../assets/landing/Slide2_mockup.png"
              alt="mockup-for-manager"
            />
          </div>
        </div>
        <div class="main__column text-column">
          <div class="column__header">
            <div
              class="mockup-column__rectangle_small for-manager-header__rectangle"
            ></div>
            <h2 class="header__title">Для организатора</h2>
          </div>
          <ul class="column__list landing__text">
            <li>
              Ты сам предлагаешь мероприятие через наш сайт, после проверки
              модератором анонс появится в приложении
            </li>
            <li>
              Есть программа лояльности для артистов до запуска приложения
            </li>
            <li>Уже сейчас ты можешь бесплатно добавить свое мероприятие</li>
          </ul>
          <button class="button button__primary">Добавить мероприятие</button>
        </div>
      </main>
      <footer class="section__footer">
        <a href="#for-user"
          ><img src="../assets/landing/Arrow.svg" alt="arrow"
        /></a>
      </footer>
    </section>
    <section
      id="for-user"
      class="section section__two-column section__two-column_mockup-right for-user"
    >
      <main class="main for-user__main">
        <div class="main__column text-column">
          <div class="column__header">
            <div
              class="mockup-column__rectangle_small for-user-header__rectangle"
            ></div>
            <h2 class="header__title">Для пользователя</h2>
          </div>
          <p class="landing__text" style="margin-bottom: 0">
            Пользователь приложения:
          </p>
          <ul class="column__list landing__text">
            <li>Не пропустит концерт любимого исполнителя</li>
            <li>
              Cможет открыть для себя новые музыкальные мероприятия в Петербурге
              и Москве
            </li>
            <li>
              Откроет для себя новых, набирающих популярность артиста/группу
            </li>
            <li>Сможет запланировать поход на мероприятие заранее</li>
          </ul>
          <button class="button button__primary">Подписаться на соцсети</button>
        </div>
        <div class="main__column main__column_right mockup-column">
          <div class="mockup-column__layout">
            <div class="mockup-column__rectangle_big for-user__rectangle"></div>
            <img
              class="mockup-column__mockup"
              src="../assets/landing/Slide1_mockup.png"
              alt="mockup-for-user"
            />
          </div>
        </div>
      </main>
      <footer class="section__footer">
        <a href="#faq"><img src="../assets/landing/Arrow.svg" alt="arrow" /></a>
      </footer>
    </section>
    <section id="faq" class="section faq">
      <main class="main faq__main">
        <div class="main__column text-column">
          <div class="column__header">
            <div
              class="mockup-column__rectangle_small faq-header__rectangle"
            ></div>
            <h2 class="header__title">FAQ</h2>
          </div>
          <ul class="column__list faq__text">
            <li>
              <strong>Приложение платное?</strong><br />Приложение бесплатное,
              условия по размещению мероприятий можно узнать по почте:
              info@soldout.app
            </li>
            <li>
              <strong>Чем вы отличаетесь от любой другой афиши?</strong
              ><br />Sold Out - приложение для всех артистов. Мы не знаем слова
              “популярность”, никого не выделяем и не продвигаем, поэтому ты
              можешь узнать полную информацию обо всех музыкальных мероприятиях
              твоего города.
            </li>
            <li>
              <strong>Как добавляются мероприятия в приложение?</strong><br />Ты
              сам предлагаешь мероприятия через наш сайт. Модераторы проверяют
              информацию и публикуют.
            </li>
            <li>
              <strong
                >Я хочу опубликовать анонс о своем мероприятии, что
                делать?</strong
              >
            </li>
          </ul>
          <button class="button button__primary">Добавить мероприятие</button>
        </div>
      </main>
      <footer class="section__footer">
        <a href="#contact-us"
          ><img src="../assets/landing/Arrow.svg" alt="arrow"
        /></a>
      </footer>
    </section>
    <section id="contact-us" class="section section__two-column contact-us">
      <main class="main contact-us__main">
        <div class="main__column text-column">
          <div class="column__header">
            <div
              class="mockup-column__rectangle_small contact-us-header__rectangle"
            ></div>
            <h2 class="header__title">Свяжись с нами</h2>
          </div>
          <p class="landing__text">
            Оставьте свои контактные данные, и мы с тобой свяжемся
          </p>
          <input
            class="landing__input landing__text contact-us__name"
            placeholder="Ваше имя"
          />
          <input
            class="landing__input landing__text contact-us__email"
            placeholder="Ваше номер телефона или email"
          />
          <button class="button button__primary">Отправить</button>
        </div>
        <div class="main__column text-column contact-us__logo-column">
          <img
            class="contact-us__logo"
            src="../assets/landing/Svyaz_logo.svg"
            alt="contact-us-logo"
          />
          <p class="landing__text">Скоро в App Store и Google Play.</p>
          <div class="networks-logo">
            <a href="https://vk.com/soldoutapp" target="_blank"
              ><img src="../assets/landing/Vk.svg" alt="vk-logo"
            /></a>
            <a href="https://www.instagram.com/soldout.app/" target="_blank"
              ><img src="../assets/landing/Instagram.svg" alt="inst-logo"
            /></a>
          </div>
        </div>
      </main>
    </section>
    <footer class="landing__footer">
      <div class="footer__links">
        <a class="landing__text">Скачать</a>
        <a class="landing__text">Политика конфиденциальности</a>
        <a class="landing__text">Cookies</a>
      </div>
      <div class="footer__credits">
        <img
          class="logo"
          src="../assets/landing/Header_logo.svg"
          alt="footer-logo"
        />
        <p class="landing__text">2021</p>
      </div>
      <div class="footer__networks">
        <div class="networks-logo">
          <a href="https://vk.com/soldoutapp" target="_blank"
            ><img src="../assets/landing/Vk.svg" alt="vk-logo"
          /></a>
          <a href="https://www.instagram.com/soldout.app/" target="_blank"
            ><img src="../assets/landing/Instagram.svg" alt="inst-logo"
          /></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Footer */
.footer__networks {
  display: flex;
  justify-content: flex-end;
}
.footer__links > *:not(:last-child) {
  margin-bottom: 20px;
}
.footer__links {
  display: flex;
  flex-direction: column;
}
.footer__credits {
  text-align: center;
}
.landing__footer > * {
  flex: 1 0 0;
}
.landing__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  padding: 0 40px;
  background: #000000;
}

/* Header */
.cover-page > .cover-page__header {
  height: 100px;
  width: calc(100% - 80px);
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
}
.header__right {
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.header__menu {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  cursor: pointer;
}
.logo {
  height: 64px;
}
.header__button {
  border: 1px solid #473f87;
  box-sizing: border-box;
  border-radius: 10px;
  background: none;
  height: 64px;
  width: 290px;
  cursor: pointer;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
  padding: 0;
}

/* Sections */
.section__footer {
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 70px;
}
.cover-page {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(../assets/landing/cover-page.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
}
.cover-page:after {
  background: rgba(0, 0, 0, 0.8);
}
.section {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
}
.for-manager:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    43.49% 43.18% at -8.44% 44.49%,
    rgba(132, 118, 246, 0.6) 0%,
    rgba(15, 14, 14, 0.6) 100%
  );
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.what-inside {
  background: radial-gradient(
    43.49% 39.8% at -8.44% 44.49%,
    rgba(247, 199, 116, 0.6) 0%,
    rgba(15, 14, 14, 0.6) 100%
  );
}
.for-user {
  background: radial-gradient(
    43.49% 39.8% at -8.44% 44.49%,
    rgba(120, 216, 246, 0.6) 0%,
    rgba(15, 14, 14, 0.6) 100%
  );
}
.contact-us {
  background: radial-gradient(
    24.79% 46.99% at -2.47% 50%,
    rgba(232, 225, 115, 0.6) 0%,
    rgba(15, 14, 14, 0.6) 79.27%
  );
}
.faq:before {
  background: radial-gradient(
    43.49% 39.8% at -8.44% 44.49%,
    rgba(176, 118, 233, 0.6) 0%,
    rgba(15, 14, 14, 0.6) 100%
  );
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

/* Main and Columns */
.main__title {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
}
.main__mission {
  text-align: center;
}
.cover-page__main {
  display: flex;
  flex-direction: column;
  width: 900px;
  align-items: center;
  justify-content: center;
  height: calc(100% - 170px);
  margin: 0 auto;
}
.cover-page__main > * {
  margin-bottom: 40px;
}
.main {
  display: flex;
  width: 1360px;
  align-items: center;
  justify-content: space-between;
  height: calc(100% - 140px);
  margin-top: 70px;
}
.main__column {
  display: flex;
}
.main__column:first-child {
  margin-left: 60px;
}
.main__column:last-child {
  margin-right: 100px;
}
.section__two-column .main__column {
  width: calc(50% - 100px);
}
.text-column {
  flex-direction: column;
  z-index: 30;
}
.column__list {
  list-style-type: disc;
}
.column__list > *::marker {
  font-size: 30px;
  line-height: 16px;
}
.column__list > *:not(:last-child) {
  margin-bottom: 20px;
}

/* Column headers */
.column__header {
  position: relative;
  height: 160px;
  width: 100%;
}
.header__title {
  position: absolute;
  z-index: 20;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 73px;
}
.what-inside-header__rectangle {
  background: linear-gradient(180deg, #f6d076 0%, #fc6563 100%);
  left: -30px;
}
.for-user-header__rectangle {
  background: linear-gradient(180deg, #79cef6 0%, #837ef6 100%);
  left: -30px;
}
.contact-us-header__rectangle {
  background: linear-gradient(180deg, #fc6363 0%, #f7bf73 100%);
  left: -30px;
}
.faq-header__rectangle {
  background: linear-gradient(180deg, #f676b3 0%, #9f76f6 100%);
  left: -30px;
}
.for-manager-header__rectangle {
  background: linear-gradient(180deg, #f46371 0%, #a963f7 100%);
  right: 0;
}

/* Mockups */
.what-inside__rectangle {
  background: linear-gradient(180deg, #8479f3 0%, #8fed7f 100%);
}
.for-user__rectangle {
  background: linear-gradient(180deg, #fc6363 0%, #f6d276 100%);
}
.mockup-column__layout > .for-manager__rectangle {
  background: linear-gradient(180deg, #f5d278 0%, #6cccd7 100%);
  width: 400px;
  height: 400px;
}
.mockup-column__rectangle_small {
  width: 150px;
  height: 150px;
  border-radius: 37px;
  transform: rotate(-45.64deg);
  position: absolute;
  z-index: 10;
}
.mockup-column__layout {
  display: flex;
  position: relative;
  width: -webkit-fill-available;
  align-items: center;
}
.section__two-column_mockup-left .mockup-column__mockup {
  left: -60px;
}
.main__column_right > .mockup-column__layout {
  justify-content: flex-end;
}
.mockup-column__rectangle_big {
  border-radius: 64px;
  transform: rotate(-37.5deg);
  width: 500px;
  height: 500px;
  z-index: 10;
}
.mockup-column__mockup {
  z-index: 20;
  position: absolute;
  right: 60px;
}

/* Reusable things */
.landing__input {
  background: #282828;
  border-radius: 10px;
  height: 75px;
  border: 0;
  color: #ffffff;
  padding: 0 30px;
  margin-bottom: 30px;
}
.landing__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 31px;
}
.faq__text {
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 31px;
}
.contact-us__logo-column {
  align-items: center;
}
.contact-us__logo {
  width: 320px;
}
.networks-logo > *:not(:last-child) {
  margin-right: 20px;
}
.button {
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 0px;
  text-align: center;
  border-radius: 10px;
  height: 75px;
  width: 460px;
}
.cover-page__button {
  font-size: 22px;
}
</style>
