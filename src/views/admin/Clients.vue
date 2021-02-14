<template>
  <div class="clients content">
    <div class="card">
      <div class="card__header">
        <h2>Организаторы</h2>
      </div>
      <div class="card__body">
        <div class="card__search">
          <input
            type="text"
            v-model="searchInput"
            class="search__input"
            placeholder="Поиск..."
          />
        </div>
        <sorted-table :values="events" class="table">
          <thead class="table__header">
            <tr class="table__row">
              <th><sort-link name="client_name">Имя</sort-link></th>
              <th><sort-link name="verification">Верификация</sort-link></th>
              <th>
                <sort-link name="event_counter">Кол-во концертов</sort-link>
              </th>
              <th>
                <sort-link name="await_event_counter"
                  >Кол-во в ожидании</sort-link
                >
              </th>
              <th>Просмотр</th>
            </tr>
          </thead>
          <tbody slot="body" slot-scope="sort" class="table__body">
            <tr :key="i" v-for="(event, i) in sort.values" class="table__row">
              <td>{{ event.client_name }}</td>
              <td>{{ event.verification }}</td>
              <td>{{ event.event_counter }}</td>
              <td>{{ event.await_event_counter }}</td>
              <td>
                <router-link
                  :to="{ name: 'AdminClientProfile' }"
                  tag="i"
                  class="material-icons"
                  >remove_red_eyes</router-link
                >
              </td>
            </tr>
          </tbody>
        </sorted-table>
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
      searchInput: "",
      events: [
        {
          id: "1",
          client_name: "d3453sfs",
          verification: true,
          event_counter: 7,
          await_event_counter: 10,
        },
        {
          id: "2",
          client_name: "dsjkhjkhkfs",
          verification: false,
          event_counter: 7,
          await_event_counter: 10,
        },
        {
          id: "3",
          client_name: "dsffdgdhfghfgjhs",
          verification: true,
          event_counter: 7,
          await_event_counter: 10,
        },
      ],
    };
  },
};
</script>

<style scoped>
th,
td {
  width: 20%;
  min-width: fit-content;
}
</style>
