import React,{useState, useEffect} from 'react'
import BookService from '../../Services/Book'
import './BooksList.css'
const BooksList = ({sidebarOpen, pathToChapters}) =>{

  const [bookChapters,setBookChapters] = useState();

  const getChapterInfo = async (pathToChapters) =>{
    const books = await BookService.getChaptersList(pathToChapters);
    setBookChapters(books.data);
  }

  useEffect(()=>{
    getChapterInfo(pathToChapters);
  },[pathToChapters])

  return (
    <div>
    {bookChapters && (
        bookChapters.MediaContainer.Metadata.map((item) => {
          return(
              <li key={item.ratingKey} className="BooksList" onClick={()=> sidebarOpen(item.Media[0].Part[0].key+"?X-Plex-Token=pRUra2qjZ7y39rgnyy1v")}>
                {item.title}
              </li>
          )
        })
    )}
    </div>
  );
};

export default BooksList;