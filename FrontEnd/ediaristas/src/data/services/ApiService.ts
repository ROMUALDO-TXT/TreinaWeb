import axios from "axios";

const Url = "https://e-diaristas-workshop.herokuapp.com";

export const ApiService = axios.create({
  baseURL: Url,
  headers: {
    "Content-Type": "application/json",
  },
});
