import axios from "axios";

export default axios.create({
  baseURL: "https://plex.weslyg.ru/library/metadata/301/children?X-Plex-Token=pRUra2qjZ7y39rgnyy1v",
  responseType: "json"
});
