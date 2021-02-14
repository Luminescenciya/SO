<template>
  <div class="new-event content">
    <div class="card">
      <div class="card__menu">
        <div class="card__header">
          <h2>Добавление события</h2>
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
            <EventInfo :data="data" />
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
            <EventPoster :data="data" />
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
            @click="postPerformers"
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
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import style from "../../assets/mapbox/style.json";
import EventPerformers from "../../components/EventPerformers.vue";
import EventPoster from "../../components/EventPoster.vue";
import EventInfo from "../../components/EventInfo.vue";

import { DataFactory } from "./../../services/DataFactory.js";
const webResources = DataFactory.get("webResources");
const performerDrafts = DataFactory.get("performerDrafts");
const eventDrafts = DataFactory.get("eventDrafts");
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
      types: "place",
      webResources: null,
      performers: null,
      markerCoords: [30.31667, 59.95],
      bbox: [
        29.4246200001296,
        30.7593279999705,
        59.6338449999419,
        60.2429282131785,
      ],
      map: {},
      geocoder: {},
      accessToken:
        "pk.eyJ1IjoibHVtZW5pc2NlbmNpeWEiLCJhIjoiY2tpcHY3NTdzMXB1ajJxcWo2em01dzVqOCJ9.tqqWDqA63BR6mQZu-X9msA", // your access token. Needed if you using Mapbox maps
      mapStyle: null, // your map style
      dataDefault: {
        translations: [
          {
            name: "",
            description: "",
            image_id: "",
            lang: "ru",
          },
        ],
        links: [],
        genres: [],
        performers: [],
        place_draft: "",
        cost_min: "",
        cost_max: "",
        starts_at: "",
        ends_at: "",
        image: { id: null, data: null },
      },
      data: {
        translations: [
          {
            name: "",
            description: "",
            image_id: "",
            lang: "ru",
          },
        ],
        links: [],
        genres: [],
        performers: [],
        place_draft: "",
        cost_min: "",
        cost_max: "",
        starts_at: "",
        ends_at: "",
        city: "",
        image: { id: null, data: null },
      },
    };
  },
  methods: {
    checkMarker(event) {
      console.log(event);
      this.markerCoords = [
        event.mapboxEvent.lngLat.lat,
        event.mapboxEvent.lngLat.lng,
      ];
      this.$forceUpdate();
    },
    dragMarker(event) {
      console.log(event);
    },
    mapLoaded(event) {
      this.map = event.map;
      console.log(this.map);
      /* this.map.jumpTo({ center: ['30.31667', '59.95'], zoom: 10 }) */
    },
    handleSearch(event) {
      console.log(event);
      this.markerCoords = event.result.center;
    },
    checkCity() {
      if (this.citySelector === "new") {
        this.geocoder = new MapboxGeocoder({
          accessToken: this.accessToken,
          types: "place",
        });
        this.$nextTick(function () {
          this.geocoder.addTo("#geocoder-city");
        });
      }
    },
    checkPlace() {
      if (this.placeSelector === "new") {
        this.geocoder = new MapboxGeocoder({
          accessToken: this.accessToken,
          types: "address",
        });
        this.$nextTick(function () {
          this.geocoder.addTo("#geocoder-place");
        });
      }
    },
    createMap() {
      this.mapboxgl = mapboxgl;
      this.mapStyle = style;
      mapboxgl.accessToken = this.accessToken;
      this.map = new mapboxgl.Map({
        container: "MAP_DIV",
        style: style,
      });
    },
    async getWebRes() {
      try {
        const { data } = await webResources.get();
        this.webResources = data;
        const resource = this.webResources.filter(
          (x) => x.id.search("evnt") !== -1
        );
        for (let i = 0; i < resource.length; i++) {
          this.data.links.push({ link: "", web_resource: resource[i] });
        }
      } catch (e) {
        console.log(e);
      }
    },
    async postPerformers() {
      try {
        let performers = JSON.parse(JSON.stringify(this.data.performers));
        for (let performer of performers) {
          performer.links = performer.links.filter((y) => y.link !== "");
        }
        const { data } = await performerDrafts.createPerformer(performers);
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
        const { dataEvent } = await eventDrafts.createEvent(this.data);
        const eventId = dataEvent.id;
        await eventDrafts.addPerformersToEvent(eventId, this.data.performers);
        alert("Отправлено!");
        this.data = JSON.parse(JSON.stringify(this.dataDefault));
        this.dataType = 1;
        this.genreSelector = [];
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getWebRes();
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
