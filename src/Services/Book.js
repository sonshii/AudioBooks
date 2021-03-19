import API from './API'

const BookService = {
  getCardList: () =>{
    return API.get('/library/sections/5/all?type=9&includeCollections=1&X-Plex-Token=pRUra2qjZ7y39rgnyy1v', {
      type: 9,
      includeCollections: 1,
    });
  },
  getChaptersList: (path) =>{
    return API.get(path);
  },
}

export default BookService;