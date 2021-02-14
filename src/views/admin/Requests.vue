<template>
  <div class="request content">
    <div class="card">
      <div class="card__header">
        <h2>Заявки на одобрение</h2>
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
              <th><sort-link name="name">Название</sort-link></th>
              <th><sort-link name="client">Организатор</sort-link></th>
              <th><sort-link name="date">Дата</sort-link></th>
              <th>Редактировать</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody slot="body" slot-scope="sort" class="table__body">
            <tr :key="i" v-for="(event, i) in sort.values" class="table__row">
              <td>{{ event.name }}</td>
              <td>{{ event.client }}</td>
              <td>{{ event.date }}</td>
              <td><i class="material-icons">edit</i></td>
              <td>{{ event.status }}</td>
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
          name: "jdfgh",
          client: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "2",
          name: "jd",
          client: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "3",
          name: "jdgh",
          client: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "4",
          name: "jdhgf2",
          client: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "5",
          name: "jd4234",
          client: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "6",
          name: "gjhjd",
          client: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "7",
          name: "jdgh",
          client: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "8",
          name: "jdhgf2",
          client: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "9",
          name: "jd4234",
          client: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
        },
        {
          id: "10",
          name: "gjhjd",
          client: "dsfs",
          date: "28/04/2020 19:00",
          status: 1,
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
