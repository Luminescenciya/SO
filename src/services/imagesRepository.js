import ApiClient from "./ApiClient";

const resource = "/api/v1/images";
export default {
  getImage(imageId) {
    return ApiClient.get(`${resource}/${imageId}`);
  },
  createImage(payload) {
    return ApiClient.post(`${resource}`, payload);
  },
};
