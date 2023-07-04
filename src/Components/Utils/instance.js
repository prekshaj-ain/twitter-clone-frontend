const { default: axios } = require("axios");

export const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  timeout: 5000,
});
