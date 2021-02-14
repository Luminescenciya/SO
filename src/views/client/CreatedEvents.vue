<template>
  <div class="events content">
    <div class="card">
      <div class="card__content">
        <div class="card__header">
          <h2>Предстоящие события</h2>
        </div>
        <div class="card__body">
          <div class="card-body__column">
            <div class="column__block">
              <div class="column-block__data-row">
                <div
                  @click="sort('name')"
                  class="data-row__cell data-row__cell_name data-row__cell_sort"
                >
                  Название
                  <SortArrows
                    v-if="currentSort === 'name'"
                    :currentSortDir="currentSortDir"
                  />
                </div>
                <div
                  @click="sort('city')"
                  class="data-row__cell data-row__cell_sort"
                >
                  Город
                  <SortArrows
                    v-if="currentSort === 'city'"
                    :currentSortDir="currentSortDir"
                  />
                </div>
                <div
                  @click="sort('starts_at')"
                  class="data-row__cell data-row__cell_sort"
                >
                  Дата
                  <SortArrows
                    v-if="currentSort === 'starts_at'"
                    :currentSortDir="currentSortDir"
                  />
                </div>
                <div class="data-row__cell data-row__cell_edit">Edit</div>
                <div class="data-row__cell">Статус</div>
              </div>
            </div>
            <div :key="i" v-for="(event, i) in events" class="column__block">
              <div class="column-block__data-row">
                <div class="data-row__cell data-row__cell_name">
                  {{ event.name }}
                </div>
                <div class="data-row__cell">{{ event.city }}</div>
                <div class="data-row__cell">
                  {{ event.starts_at.substring(0, 10) }}
                </div>
                <router-link
                  :to="{ name: 'EditEvent', params: { id: event.id } }"
                  tag="div"
                  class="data-row__cell data-row__cell_edit"
                >
                  <i class="material-icons">edit</i>
                </router-link>
                <div class="data-row__cell">Статус</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DataFactory } from "./../../services/DataFactory.js";
const eventDrafts = DataFactory.get("eventDrafts");
import SortArrows from "../../components/SortArrows.vue";
export default {
  components: {
    SortArrows,
  },
  data() {
    return {
      events: null,
      currentSort: "",
      currentSortDir: "asc",
    };
  },
  methods: {
    sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
      this.events = this.events.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
        if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
        return 0;
      });
    },
    async getEvents() {
      try {
        const { data } = await eventDrafts.get();
        this.events = data;
        for (let event of this.events) {
          event.city = event.place_draft.city_draft.translations.filter(
            (x) => x.lang === "ru"
          )[0].name;
          event.name = event.translations.filter(
            (x) => x.lang === "ru"
          )[0].name;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getEvents();
  },
};
</script>

<style scoped>
.column-block__data-row {
  background: #282828;
  border: 1px solid #646262;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  padding: 20px;
  align-items: center;
}
.data-row__cell {
  flex: 2 0 0;
  text-align: center;
}
.data-row__cell_edit {
  flex: 1 0 0;
}
.data-row__cell_edit > .material-icons {
  cursor: pointer;
}
.data-row__cell_name {
  flex: 3 0 0;
}
.data-row__cell_sort {
  cursor: pointer;
}
th,
td {
  width: 20%;
}
.inwork {
  background: #769af6;
}

.table__body {
  height: 270px;
}

.wrong {
  background: #f67676;
}

.success {
  background: #5cbf84;
}

.edit {
  background: #bfa45c;
}
.tooltip__box {
  position: fixed;
  top: 25%;
  left: 50%;
}

.material-icons {
  width: 25px;
}
</style>
