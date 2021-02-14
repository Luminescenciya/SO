<template>
  <div class="card__body">
    <div class="card-body__column">
      <div :key="imageUpdate" v-if="data.image" class="column__block">
        <div
          v-if="data.image.data === null || data.image.data === ''"
          @dragover.prevent="dragover"
          @dragleave.prevent="dragleave"
          @drop.prevent="uploadImage($event)"
          class="cell__upload"
        >
          <input
            id="file-upload"
            v-on:change="uploadImage($event)"
            type="file"
          />
          <label class="upload__center-icon" for="file-upload">
            <i class="material-icons material-icons-xxl">cloud_download</i>
          </label>
        </div>
        <template v-else>
          <div class="cell__image">
            <i @click="deleteImage" class="material-icons button__image--delete"
              >clear</i
            >
            <img class="cell__image--show" :src="data.image.data" />
          </div>
          <div class="cell__image">
            <cropper
              class="cropper"
              :src="data.image.data"
              :stencil-props="{
                aspectRatio: 1 / 1,
              }"
              :auto-zoom="true"
              @change="change"
            ></cropper>
          </div>
          <div class="cell__image">
            <img
              v-if="croppedImage !== ''"
              class="cell__image--show"
              :src="croppedImage"
            />
          </div>
        </template>
      </div>
    </div>
    <div class="card-body__column">
      <div class="column__block">
        <p class="column-block__info">Здесь инфо о формате и размере файла</p>
      </div>
    </div>
  </div>
</template>

<script>
import { DataFactory } from "./../services/DataFactory.js";
const images = DataFactory.get("images");

import { Cropper } from "vue-advanced-cropper";
import "vue-advanced-cropper/dist/style.css";
export default {
  name: "EventPoster",
  props: {
    data: Object,
  },
  components: {
    Cropper,
  },
  data() {
    return {
      imageUpdate: 0,
      croppedImage: "",
    };
  },
  methods: {
    change({ coordinates, canvas }) {
      console.log(coordinates, canvas);
      this.croppedImage = canvas.toDataURL();
    },
    dragover(event) {
      if (!event.currentTarget.classList.contains("drag-active"))
        event.currentTarget.classList.add("drag-active");
    },
    dragleave(event) {
      event.currentTarget.classList.remove("bg-green-300");
    },
    uploadImage(event) {
      let image;
      if (event.type === "drop") image = event.dataTransfer.files[0];
      else image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = (event) => {
        this.data.image.data = event.target.result;
        this.$forceUpdate();
      };
    },
    deleteImage() {
      this.data.image = {
        data: null,
        id: "",
      };
      this.$forceUpdate();
    },
    async getImage() {
      try {
        const { data } = await images.getImage(
          this.data.translations[0].image_id
        );
        this.data.image = data;
        this.data.image.data = "data:image/jpeg;base64," + this.data.image.data;
        this.$forceUpdate();
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    if (this.data.translations[0].image_id !== "") this.getImage();
  },
};
</script>

<style scoped>
.upload__center-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  user-select: none;
}
.drag-active {
  border: 2px solid #8476f6;
}
</style>
