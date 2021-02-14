import ApiClient from "./ApiClient";

const resource = "/api/v1/languages";
export default {
  get() {
    return ApiClient.get(`${resource}`);
  },
  getLanguage(languageId) {
    return ApiClient.get(`${resource}/${languageId}`);
  },
};
