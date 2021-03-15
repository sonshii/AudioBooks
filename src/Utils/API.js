import axios from "axios";

export default axios.create({
  baseURL: "https://plex.weslyg.ru/library/sections/5/all?type=9&includeCollections=1&X-Plex-Token=pRUra2qjZ7y39rgnyy1v",
  responseType: "json"
});
