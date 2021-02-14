import ApiClient from "./ApiClient";

const resource = "/api/v1/genre_categories?lаng=ru";
export default {
  get() {
    return ApiClient.get(`${resource}`);
  },
  getWithLang(langId) {
    return ApiClient.get(`${resource}/?lang=${langId}`);
  },
};
