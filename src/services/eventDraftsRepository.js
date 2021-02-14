import ApiClient from "./ApiClient";

const resource = "/api/v1/event_drafts";
export default {
  get() {
    return ApiClient.get(`${resource}`);
  },
  getEvent(eventId) {
    return ApiClient.get(`${resource}/${eventId}`);
  },
  getEventPerformers(eventId) {
    return ApiClient.get(`${resource}/${eventId}/performer_drafts`);
  },
  createEvent(loadash) {
    return ApiClient.post(`${resource}`, loadash);
  },
  addPerformersToEvent(eventId, loadash) {
    return ApiClient.patch(`${resource}/${eventId}/performer_drafts`, loadash);
  },
};
