import API from './API'

// eslint-disable-next-line import/no-anonymous-default-export
const BookService = {
  getCardList: () =>{
    return API.get('/library/sections/5/all?type=9&includeCollections=1&X-Plex-Token=pRUra2qjZ7y39rgnyy1v');
  }
}


export default BookService;