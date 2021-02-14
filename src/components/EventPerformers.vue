<template>
  <div class="card__body">
    <div :key="i" v-for="(obj, i) in data.performers" class="card-body__column">
      <div class="column__block">
        <label class="cell__label">Название группы:</label>
        <input
          type="text"
          class="cell__input"
          v-model="obj.translations.filter((x) => x.lang === 'ru')[0].name"
        />
      </div>
      <div
        :key="i"
        v-for="(res, i) in obj.links.filter(
          (x) => x.web_resource.id.search('evnt') === -1
        )"
        class="column__block"
      >
        <label class="cell__label">{{ res.web_resource.name }}:</label>
        <input type="text" class="cell__input" v-model="res.link" />
      </div>
      <div v-if="i === data.performers.length - 1" class="column__block">
        <label class="cell__label"></label>
        <button @click="addPerformer" class="button button__primary">
          Добавить группу
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { DataFactory } from "./../services/DataFactory.js";
const eventDrafts = DataFactory.get("eventDrafts");

export default {
  name: "EventPerformers",
  props: {
    data: Object,
    webResources: Array,
  },
  data() {
    return {
      group: {
        translations: [
          {
            name: "",
            lang: "ru",
          },
        ],
        links: [],
      },
      groups: [],
    };
  },
  methods: {
    addPerformer() {
      const group = JSON.parse(JSON.stringify(this.group));
      const resource = this.webResources.filter(
        (x) => x.id.search("evnt") === -1
      );
      console.log(resource);
      for (let i = 0; i < resource.length; i++) {
        group.links.push({ link: "", web_resource: resource[i] });
      }
      this.data.performers.push(group);
      this.$forceUpdate();
    },
    async getPerformers() {
      try {
        const { data } = await eventDrafts.getEventPerformers(this.data.id);
        this.data.performers = data;
        this.$forceUpdate();
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    if (this.data.id) this.getPerformers();
    else this.addPerformer();
  },
};
</script>
