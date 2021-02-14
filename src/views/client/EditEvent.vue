<template>
  <div class="new-event content">
    <div class="card">
      <div class="card__menu">
        <div class="card__header">
          <h2>Редактирование события</h2>
        </div>
        <ul>
          <li
            :class="{ 'card-menu__item--active': dataType === type.id }"
            class="card-menu__item"
            :key="i"
            v-for="(type, i) in dataTypes"
            @click="dataType = type.id"
          >
            {{ type.name }}
          </li>
        </ul>
      </div>
      <div class="card__content card__content_with-menu">
        <template v-if="dataType === 1">
          <div class="card__header">
            <h2>Основное</h2>
          </div>
          <keep-alive>
            <EventInfo :data="data" v-if="data !== null" />
          </keep-alive>
        </template>
        <template v-if="dataType === 2">
          <div class="card__header">
            <h2>Добавление групп</h2>
          </div>
          <keep-alive>
            <EventPerformers :webResources="this.webResources" :data="data" />
          </keep-alive>
        </template>
        <template v-if="dataType === 3">
          <div class="card__header">
            <h2>Афиша</h2>
          </div>
          <keep-alive>
            <EventPoster :data.sync="data" />
          </keep-alive>
        </template>
        <div class="card__footer">
          <button
            v-if="dataType !== 3"
            @click="dataType++"
            class="button button__primary card-footer__button"
          >
            Далее
          </button>
          <button
            v-else
            @click="postEvent"
            class="button button__primary card-footer__button"
          >
            Опубликовать
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import EventPerformers from "../../components/EventPerformers.vue";
import EventPoster from "../../components/EventPoster.vue";
import EventInfo from "../../components/EventInfo.vue";
import { DataFactory } from "./../../services/DataFactory.js";
const eventDrafts = DataFactory.get("eventDrafts");
const webResources = DataFactory.get("webResources");
const performerDrafts = DataFactory.get("performerDrafts");
const images = DataFactory.get("images");

export default {
  components: {
    EventInfo,
    EventPerformers,
    EventPoster,
  },
  data() {
    return {
      dataTypes: [
        { id: 1, name: "Основное" },
        { id: 2, name: "Добавление групп" },
        { id: 3, name: "Афиша" },
      ],
      dataType: 1,
      webResources: null,
      data: null,
    };
  },
  methods: {
    async getWebRes() {
      try {
        const { data } = await webResources.get();
        this.webResources = data;
        // добавляем список ресурсов к мероприятию
        const resource = this.webResources.filter(
          (x) => x.id.search("evnt") !== -1
        );
        console.log(resource);
        for (let i = 0; i < resource.length; i++) {
          this.data.links.push({ link: "", web_resource: resource[i] });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async getPerformers() {
      try {
        const { data } = await performerDrafts.get();
        this.performers = data;
      } catch (e) {
        console.log(e);
      }
    },
    getNamesForMultiselect(data) {
      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          data[i].name = data[i].translations[0].name;
        }
      } else data.name = data.translations[0].name;
    },
    async getEvent() {
      try {
        const { data } = await eventDrafts.getEvent(this.$route.params.id);
        console.log(data);
        this.data = data;
        this.data.city = JSON.parse(
          JSON.stringify(this.data.place_draft.city_draft)
        );
        this.getNamesForMultiselect([this.data.city, this.data.place_draft]);
        this.getNamesForMultiselect(this.data.genres);
      } catch (e) {
        console.log(e);
      }
    },
    async postPerformers() {
      try {
        const { data } = await performerDrafts.createPerformer(this.groups);
        console.log(data);
        this.data.performers.push(data);
      } catch (e) {
        console.log(e);
      }
    },
    async postEvent() {
      try {
        // сохраняем изображение
        const { dataImages } = await images.createImage(
          this.data.image.data.replace(/^data:image\/[a-z]+;base64,/, "")
        );
        this.data.translations[0].image_id = dataImages.data.id;
        await this.postPerformers();
        let response = await axios.post(
          this.$root.urlForRequest + "/event_draft",
          this.data
        );
        const eventId = response.data.id;
        response = await axios.patch(
          this.$root.urlForRequest +
            "/event_drafts/" +
            eventId +
            "/performer_drafts",
          this.data.performers[0]
        );
        console.log(response);
        alert("Отправлено!");
        this.data = JSON.parse(JSON.stringify(this.dataDefault));
        this.dataType = 1;
        this.genreSelector = [];
        this.groups = [];
        this.addPerformer();
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getEvent();
    this.getWebRes();
    this.getPerformers();
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
