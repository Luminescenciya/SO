import ApiClient from "./ApiClient";

const resource = "/api/v1/web_resources";
export default {
  get() {
    return ApiClient.get(`${resource}`);
  },
  getWebResource(WebResId) {
    return ApiClient.get(`${resource}/${WebResId}`);
  },
};
