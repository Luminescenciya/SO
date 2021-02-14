<template>
  <div class="card__body">
    <div class="card-body__column">
      <div class="column__block">
        <label class="cell__label">Название:</label>
        <input
          type="text"
          class="cell__input"
          v-model="data.translations.filter((x) => x.lang === 'ru')[0].name"
          placeholder="Введите название"
        />
      </div>
      <div v-if="genres !== null" class="column__block">
        <label class="cell__label">Жанры:</label>
        <multiselect
          v-model="data.genres"
          :options="genres"
          :multiple="true"
          group-values="genres"
          group-label="name"
          :group-select="false"
          :close-on-select="false"
          :clear-on-select="false"
          placeholder="Выберите жанры"
          track-by="id"
          label="name"
          ><span slot="noResult"
            >Oops! No elements found. Consider changing the search query.</span
          >
          <template slot="selection" slot-scope="{ values, search, isOpen }"
            ><span
              class="multiselect__single"
              v-if="values.length &amp;&amp; !isOpen"
              >{{ values.length }} options selected</span
            ></template
          ></multiselect
        >
      </div>
      <div v-if="cities !== null" class="column__block">
        <label class="cell__label">Город:</label>
        <multiselect
          v-model="data.city"
          deselect-label="Удалить"
          track-by="id"
          label="name"
          placeholder="Выберите город"
          :options="cities"
          :searchable="true"
          @input="getPlaces()"
        >
        </multiselect>
      </div>
      <div v-if="places !== null" class="column__block">
        <label class="cell__label">Место проведения:</label>
        <multiselect
          v-model="data.place_draft"
          deselect-label="Удалить"
          track-by="id"
          label="name"
          placeholder="Выберите место проведения"
          :options="places"
          :searchable="true"
        >
        </multiselect>
      </div>
      <div class="column__block column__block--double">
        <div class="column__block--part">
          <label class="cell__label">Стоимость:</label>
          <input
            type="number"
            class="cell__input"
            v-model="data.cost_min"
            placeholder="От"
          />
        </div>
        <div class="column__block--part">
          <label class="cell__label">ᅠ</label>
          <input
            type="number"
            class="cell__input"
            v-model="data.cost_max"
            placeholder="До"
          />
        </div>
      </div>
      <div class="column__block">
        <label class="cell__label">Начало:</label>
        <datetime
          type="datetime"
          v-model="data.starts_at"
          input-class="cell__input"
          :phrases="{ ok: 'Далее', cancel: 'Выйти' }"
          :minute-step="15"
          placeholder="Укажите начало"
          auto
        ></datetime>
      </div>
      <div class="column__block">
        <label class="cell__label">Конец:</label>
        <datetime
          type="datetime"
          v-model="data.ends_at"
          input-class="cell__input"
          :phrases="{ ok: 'Далее', cancel: 'Выйти' }"
          :minute-step="15"
          placeholder="Укажите конец"
          auto
        ></datetime>
      </div>
      <template>
        <div :key="j" v-for="(resource, j) in data.links" class="column__block">
          <label v-if="resource.web_resource" class="cell__label"
            >{{ resource.web_resource.name }}:</label
          >
          <input type="text" class="cell__input" v-model="resource.link" />
        </div>
      </template>
    </div>
    <div class="card-body__column">
      <div class="column__block">
        <label class="cell__label high-line">Описание:</label>
        <textarea
          class="cell__textarea"
          v-model="
            data.translations.filter((x) => x.lang === 'ru')[0].description
          "
          resize="vertical"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import { Datetime } from "vue-datetime";
import { DataFactory } from "./../services/DataFactory.js";
const genreCategories = DataFactory.get("genreCategories");
const cityDrafts = DataFactory.get("cityDrafts");
const placeDrafts = DataFactory.get("placeDrafts");

export default {
  name: "EventInfo",
  components: {
    Multiselect,
    datetime: Datetime,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      show: false,
      genres: null,
      genreSelector: "",
      cities: null,
      places: null,
      citySelector: "",
    };
  },
  methods: {
    getNamesForMultiselect(data) {
      for (let i = 0; i < data.length; i++) {
        data[i].name = data[i].translations[0].name;
      }
    },
    async getGenres() {
      try {
        const { data } = await genreCategories.get();
        this.genres = data;
        this.getNamesForMultiselect(this.genres);
        for (let i = 0; i < this.genres.length; i++) {
          this.getNamesForMultiselect(this.genres[i].genres);
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getCities() {
      try {
        const { data } = await cityDrafts.get();
        this.cities = data;
        this.getNamesForMultiselect(this.cities);
      } catch (e) {
        console.log(e);
      }
    },
    async getPlaces() {
      try {
        const { data } = await placeDrafts.getByCity(this.data.city.id);
        this.places = data;
        this.getNamesForMultiselect(this.places);
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getGenres();
    this.getCities();
    if (this.$route.params.id) this.getPlaces();
  },
};
</script>

<style src="vue-datetime/dist/vue-datetime.css"></style>
