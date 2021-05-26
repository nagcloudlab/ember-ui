import RESTAdapter from "@ember-data/adapter/rest";

// XHR
export default class ApplicationAdapter extends RESTAdapter {
  namespace = "api";
  // coalesceFindRequests = true;
  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
