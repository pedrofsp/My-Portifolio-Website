export default class Api {
  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com';
  }

  async fetchUrl(url, method, body) {
    const request = {
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      method,
    };

    if (body) request.body = body;

    const response = await fetch(this.baseUrl + url, request);

    return response;
  }

  async get(uri) {
    return this.fetchUrl(uri, 'GET');
  }
}
