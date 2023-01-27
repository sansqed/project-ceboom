import axios from "axios";

var config = {
  "Access-Control-Request-Headers":"*",
};

export const postAPICall = (url, data) => {
  return axios.post(url, data, { headers: config });
};

export const getAPICall = (url) => {
  return axios.get(url);
};

export const URL = "https://ceboomapi-production.up.railway.app/"