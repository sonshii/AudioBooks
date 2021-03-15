import React,{useState, useEffect} from 'react'
import axios from 'axios';
import './Sidebar.css'
const Sidebar = ({isOpen, pathToChapters}) =>{
  const [bookChapters,setBookChapters] = useState({ MediaContainer: {
    Metadata:[]
  }});

  const getData = async () => {

  }

  useEffect(()=>{
    let one = pathToChapters;
    const requestOne = axios.get(one);
    axios
    .all([requestOne])
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        setBookChapters(responseOne.data)
      })
    )
    .catch(errors => {
      console.error(errors);
    })
  },[pathToChapters])
  let setClassName = isOpen ? 'sidebarOpen' : 'sidebarClose'
  return (
    <div className={setClassName}>
      {bookChapters.MediaContainer.Metadata.map((item) => {
        return(
          <div>
            <div>
              {item.title}
            </div>
            <div>
              <audio controls>
                <source src={"https://plex.weslyg.ru" + item.Media[0].Part[0].key + "?X-Plex-Token=pRUra2qjZ7y39rgnyy1v"} type="audio/mpeg"/>
              </audio>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Sidebar;