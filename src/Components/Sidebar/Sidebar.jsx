import React,{useState, useEffect} from 'react'
import BookService from '../../Utils/Book'
import './Sidebar.css'
const Sidebar = ({isOpen, pathToChapters}) =>{
  const [bookChapters,setBookChapters] = useState({ MediaContainer: {
    Metadata:[]
  }});

  const getChapterInfo = async (pathToChapters) =>{
    const books = await BookService.getChaptersList(pathToChapters);
    setBookChapters(books.data);
  }

  let setClassName = isOpen ? 'sidebarOpen' : 'sidebarClose';

  useEffect(()=>{
    getChapterInfo(pathToChapters);
  },[pathToChapters])

  return (
    <div className={setClassName}>
      {bookChapters.MediaContainer.Metadata.map((item) => {
        return(
          <div>
            <div>
              {item.title}
            </div>
            {/* <div>
              <audio controls>
                <source src={"https://plex.weslyg.ru" + item.Media[0].Part[0].key + "?X-Plex-Token=pRUra2qjZ7y39rgnyy1v"} type="audio/mpeg"/>
              </audio>
            </div> */}
          </div>
        )
      })}
    </div>
  );
};

export default Sidebar;