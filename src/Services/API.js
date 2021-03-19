import axios from "axios";

export default axios.create({
  baseURL: "https://plex.weslyg.ru",
  'Content-Type': 'application/json'
});
