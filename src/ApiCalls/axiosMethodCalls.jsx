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

export const URL = "https://4756-111-125-90-19.ap.ngrok.io/"