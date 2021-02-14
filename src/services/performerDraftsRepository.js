import ApiClient from "./ApiClient";

const resource = "/api/v1/performer_drafts";
export default {
  get() {
    return ApiClient.get(`${resource}`);
  },
  getPerformer(performerId) {
    return ApiClient.get(`${resource}/${performerId}`);
  },
  createPerformer(payload) {
    return ApiClient.post(`${resource}`, payload);
  },
};
