import axios from "axios";

export default function CovidApi() {
  return axios.create({
    baseURL: "https://api.covid19api.com",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
