<template>
  <div class="client-profile content">
    <div class="card">
      <div class="card__header">
        <h2>Карточка организатора</h2>
      </div>
      <div class="card__body">
        <div class="card__body--thrid">
          <div v-if="verificated === false" class="card__line">
            <p class="text--wrong">Аккаунт не верефицирован</p>
            <p class="edit">Верифицировать</p>
          </div>
          <p v-else class="text--success">Ваш аккаунт верефицирован</p>
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
              <input
                class="cell__span"
                v-else
                type="text"
                v-model="data.mail"
              />
              <span v-on:click="edit.mail = !edit.mail" class="cell__span edit"
                >Редактировать</span
              >
            </div>
            <div class="table__line">
              <span class="cell__span">Пароль</span>
              <span v-if="edit.password === false" class="cell__span">{{
                data.pass
              }}</span>
              <input
                class="cell__span"
                v-else
                type="text"
                v-model="data.pass"
              />
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
            <div class="table__line">
              <span class="cell__span">Инфо</span>
              <p v-if="edit.info === false" class="cell__span">
                {{ data.info }}
              </p>
              <textarea v-else class="cell__span" v-model="data.info" />
              <span v-on:click="edit.info = !edit.info" class="cell__span edit"
                >Редактировать</span
              >
            </div>
          </div>
        </div>
        <div class="card__body--thrid">
          <div class="card__header">
            <h2>Предстоящие события</h2>
          </div>
          <sorted-table :values="events" class="table">
            <thead class="table__header">
              <tr class="table__row">
                <th><sort-link name="name">Название</sort-link></th>
                <th><sort-link name="city">Город</sort-link></th>
                <th><sort-link name="date">Дата</sort-link></th>
                <th>Редактировать</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody slot="body" slot-scope="sort" class="table__body">
              <tr :key="i" v-for="(event, i) in sort.values" class="table__row">
                <td>{{ event.name }}</td>
                <td>{{ event.city }}</td>
                <td>{{ event.date }}</td>
                <td><i class="material-icons">edit</i></td>
                <td v-if="event.status === 1">
                  <div class="tooltip">
                    <button class="button inwork tooltip cell__button">
                      Обрабатывается
                    </button>
                    <div class="tooltip__box">
                      <div class="inwork tooltip__header">
                        <p>Обрабатывается</p>
                      </div>
                      <div class="tooltip__body">
                        <p class="tooltip__text">
                          Без верификации можно опубликовать только одно событие
                          в день. <br />Если вы сотрудник клуба - верификация
                          появляется после проверки модератором ваших указанных
                          данных. <br />Если вы частный организатор -
                          верификация появляется спустя десять опубликованных
                          мероприятий.
                        </p>
                        <button class="button button__primary tooltip__button">
                          Запросить верификацию
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
                <td v-if="event.status === 2">
                  <div class="tooltip">
                    <button class="button wrong tooltip cell__button">
                      Отказ
                    </button>
                    <div class="tooltip__box">
                      <div class="wrong tooltip__header">
                        <p>Отказ</p>
                      </div>
                      <div class="tooltip__body">
                        <p class="tooltip__text">
                          Отказано в публикации <br />Ссылка на правила
                          сообщества
                        </p>
                        <button class="button button__primary tooltip__button">
                          Редактировать
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
                <td v-if="event.status === 3">
                  <div class="tooltip">
                    <button class="button edity tooltip cell__button">
                      Есть замечания
                    </button>
                    <div class="tooltip__box">
                      <div class="edity tooltip__header">
                        <p>Есть замечания</p>
                      </div>
                      <div class="tooltip__body">
                        <p class="tooltip__text">
                          Необходимо отредактировать описание <br />Описание
                          содержит нецензурную брань
                        </p>
                        <button class="button button__primary tooltip__button">
                          Редактировать
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
                <td v-if="event.status === 4">
                  <div class="tooltip">
                    <button class="button success tooltip cell__button">
                      Опубликовано
                    </button>
                    <div class="tooltip__box">
                      <div class="success tooltip__header">
                        <p>Опубликовано</p>
                      </div>
                      <div class="tooltip__body">
                        <p class="tooltip__text">
                          Вы можете увидеть событие в приложении <br />Спасибо
                          за использование нашей системы!
                        </p>
                        <button class="button button__primary tooltip__button">
                          Редактировать
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </sorted-table>
        </div>
        <div class="card__body--thrid">
          <div class="card__header">
            <h2>История событий</h2>
          </div>
          <sorted-table :values="events" class="table">
            <thead class="table__header">
              <tr class="table__row">
                <th><sort-link name="name">Название</sort-link></th>
                <th><sort-link name="city">Город</sort-link></th>
                <th><sort-link name="date">Дата</sort-link></th>
                <th>Просмотр</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody slot="body" slot-scope="sort" class="table__body">
              <tr :key="i" v-for="(event, i) in sort.values" class="table__row">
                <td>{{ event.name }}</td>
                <td>{{ event.city }}</td>
                <td>{{ event.date }}</td>
                <td><i class="material-icons">remove_red_eyes</i></td>
                <td>Опубликовано</td>
              </tr>
            </tbody>
          </sorted-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SortedTable, SortLink } from "vue-sorted-table";

export default {
  components: {
    SortedTable,
    SortLink,
  },
  data: function () {
    return {
      verificated: false,
      data: {
        name: "Username",
        login: "Username",
        mail: "Username",
        pass: "Username",
        number: "Username",
        info:
          "Username Username Username Username Username Username Username Username Username Username Username Username Username Username",
      },
      edit: {
        name: false,
        mail: false,
        password: false,
        number: false,
        info: false,
      },
      events: [
        {
          id: "1",
          name: "jdfgh",
          city: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "2",
          name: "jd",
          city: "dsfs",
          date: "28/04/2020 19:00",
          status: 2,
        },
        {
          id: "3",
          name: "jdgh",
          city: "dsfs",
          date: "28/04/2020 19:00",
          status: 3,
        },
        {
          id: "4",
          name: "jdhgf2",
          city: "dsfs",
          date: "28/04/2020 19:00",
          status: 4,
        },
        {
          id: "5",
          name: "jd4234",
          city: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "6",
          name: "gjhjd",
          city: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "7",
          name: "jdhgf2",
          city: "dsfs",
          date: "28/04/2020 19:00",
          status: 4,
        },
        {
          id: "8",
          name: "jd4234",
          city: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "9",
          name: "gjhjd",
          city: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
.text--wrong {
  color: #f67676;
}

.edit {
  cursor: pointer;
}

.text--success {
  color: #76f6a9;
}

.card__body {
  display: flex;
  flex-direction: column;
}
.card__body--thrid {
  flex-grow: 1;
}
th,
td {
  width: 20%;
}
.inwork {
  background: #769af6;
}

.table__body {
  height: 400px;
}

.wrong {
  background: #f67676;
}

.success {
  background: #5cbf84;
}

.edity {
  background: #bfa45c;
}

.material-icons {
  width: 25px;
}

textarea {
  height: 120px;
  width: 300px;
}
</style>
