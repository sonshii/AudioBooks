import React,{useState, useEffect} from 'react'
import BookService from '../../Services/Book'

import './BooksList.css'
const BooksList = ({sidebarOpen, pathToChapters}) =>{

  const [bookChapters,setBookChapters] = useState({ MediaContainer: { Metadata:[] }});

  const getChapterInfo = async (pathToChapters) =>{
    const books = await BookService.getChaptersList(pathToChapters);
    setBookChapters(books.data);
  }

  useEffect(()=>{
    getChapterInfo(pathToChapters);
  },[pathToChapters])
  
  return (
    <div className="BooksList">
      <div className="Wrap-row border">
        <img className="bookListImage" src={"https://plex.weslyg.ru"+bookChapters.MediaContainer.thumb+"?X-Plex-Token=pRUra2qjZ7y39rgnyy1v"} alt=""/>
        <div className="Wrap-column">
          <p className="title">{bookChapters.MediaContainer.parentTitle}</p>
          <p className="author">{bookChapters.MediaContainer.grandparentTitle}</p>
          <p>{bookChapters.MediaContainer.parentYear}</p>
        </div>
      </div>

        {bookChapters && (
          bookChapters.MediaContainer.Metadata.map((item) => {
            return(
                <li key={item.ratingKey} className="list" onClick={()=> sidebarOpen(item.Media[0].Part[0].key+"?X-Plex-Token=pRUra2qjZ7y39rgnyy1v")}>
                  {item.title}
                </li>
            )
          })
        )}
    </div>
  );
};

export default BooksList;