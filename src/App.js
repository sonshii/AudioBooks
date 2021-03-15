import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Card from "./Components/Card/Card"
import Sidebar from "./Components/Sidebar/Sidebar"

import './App.css';

const App = () => {
  const [data, setData] = useState({ MediaContainer: {
    Metadata:[]
  }});
  const [path, setPath] = useState('');

  // const getData = async () => {
  //   const books = await BooksService.getBooks();

  // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    let one = 'https://plex.weslyg.ru/library/sections/5/all?type=9&includeCollections=1&X-Plex-Token=pRUra2qjZ7y39rgnyy1v';
    
    const requestOne = axios.get(one);

    axios
      .all([requestOne])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          setData(responseOne.data)
        })
      )
      .catch(errors => {
        console.error(errors);
      })
  },[]);
  const [isOpen, setIsOpen] = useState(false);

  const sidebarOpen = (pathToChapters) =>{
    setIsOpen({isOpen: true})
    setPath({path:pathToChapters})
  }
  return (
    <div className="App">
      <header className="App-header">
        <Card
          data={data}
          sidebarOpen={sidebarOpen}
        />
        <Sidebar
          isOpen={isOpen}
          pathToChapters={path.path}
        />
      </header>
    </div>
  );
}
export default App;