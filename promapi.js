const API_ROOT = "/api/v1/";

class PromAPI {

  constructor(url) {
    this.url = url;
  }

  async get(path, params, options) {
    const query = Object.keys(params).filter((k) => params[k] !== null && params[k] !== undefined)
      .map((k) => k + "=" + encodeURIComponent(params[k])).join("&");
    if (options === undefined) {
      options = {
        //credentials: 'include'
        // XXX: option? or just try both and remember...
      };
    }
    let res;
    try {
      res = await fetch(this.url + (this.url.endsWith("/") ? API_ROOT.substr(1) : API_ROOT) + path + (query ? "?" + query : ""), options)
    } catch (e) {
      console.log(e);
      alert(e);
      return;
    }
    return res.json();
  }

  async query_range(query, start, end, step) {
    return this.get("query_range", {
      query: query,
      start: start,
      end: end,
      step: step,
    });
  }

  async query(query, time) {
    return this.get("query", {
      query: query,
      time: time,
    });
  }
}
