import ApiClient from "./ApiClient";

const resource = "/api/v1/place_drafts";
export default {
  get() {
    return ApiClient.get(`${resource}`);
  },
  getByCity(cityId) {
    return ApiClient.get(`${resource}/?city_draft_id=${cityId}`);
  },
  getCity(cityId) {
    return ApiClient.get(`${resource}/${cityId}`);
  },
};
