<template>
  <div class="help content">
    <div class="card">
      <div class="card__header">
        <h2>Аккаунт</h2>
      </div>
      <div class="card__body">
        <div v-if="verificated === false" class="card__line">
          <p class="wrong">Ваш аккаунт не верефицирован</p>
          <div class="tooltip">
            <p>Что дает верефикация?</p>
            <div class="tooltip__box">
              <div class="tooltip__body">
                <p class="tooltip__text">Что дает верефикация?</p>
                <p class="tooltip__text">
                  Без верификации можно опубликовать только одно событие в день.
                  <br />Если вы сотрудник клуба - верификация появляется после
                  проверки модератором ваших указанных данных. <br />Если вы
                  частный организатор - верификация появляется спустя десять
                  опубликованных мероприятий.
                </p>
                <button class="button button__primary tooltip__button">
                  Запросить верификацию
                </button>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="success">Ваш аккаунт верефицирован</p>
        <div class="card__header">
          <h2>Логин и пароль</h2>
        </div>
        <div class="body__table--full">
          <div class="table__line">
            <span class="cell__span">Ваш логин</span>
            <span class="cell__span">{{ data.login }}</span>
          </div>
          <div class="table__line">
            <span class="cell__span">E-mail</span>
            <span v-if="edit.mail === false" class="cell__span">{{
              data.mail
            }}</span>
            <input class="cell__span" v-else type="text" v-model="data.mail" />
            <span
              v-if="edit.mail === false"
              v-on:click="edit.mail = !edit.mail"
              class="cell__span edit"
              >Редактировать</span
            >
            <span
              v-else
              v-on:click="edit.mail = !edit.mail"
              class="cell__span edit"
              >Сохранить</span
            >
          </div>
          <div class="table__line">
            <span class="cell__span">Пароль</span>
            <span v-if="edit.password === false" class="cell__span">{{
              data.pass
            }}</span>
            <input class="cell__span" v-else type="text" v-model="data.pass" />
            <span
              v-on:click="edit.password = !edit.password"
              class="cell__span edit"
              >Редактировать</span
            >
          </div>
          <div class="table__line">
            <span class="cell__span">Номер телефона</span>
            <span v-if="edit.number === false" class="cell__span">{{
              data.number
            }}</span>
            <input
              class="cell__span"
              v-else
              type="text"
              v-model="data.number"
            />
            <span
              v-on:click="edit.number = !edit.number"
              class="cell__span edit"
              >Редактировать</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      verificated: false,
      data: {
        login: "Username",
        mail: "Username",
        pass: "Username",
        number: "Username",
      },
      edit: {
        mail: false,
        password: false,
        number: false,
      },
    };
  },
};
</script>

<style scoped>
.wrong {
  color: #f67676;
}

.edit {
  cursor: pointer;
}

.success {
  color: #76f6a9;
}

.tooltip__box {
  position: absolute;
  top: 0%;
  left: -50%;
}
</style>
