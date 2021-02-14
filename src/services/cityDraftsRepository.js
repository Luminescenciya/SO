import ApiClient from "./ApiClient";

const resource = "/api/v1/city_drafts";
export default {
  get() {
    return ApiClient.get(`${resource}`);
  },
  getCity(cityId) {
    return ApiClient.get(`${resource}/${cityId}`);
  },
};
