import React, { useState, useEffect } from 'react'

import BookService from './Utils/Book'

import Card from "./Components/Card/Card"
import Sidebar from "./Components/Sidebar/Sidebar"

import './App.css';

const App = () => {
  const [data, setData] = useState({ MediaContainer: { Metadata:[] }});
  const [path, setPath] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const getCardInfo = async () =>{
    const books = await BookService.getCardList();
    setData(books.data);
  }

  const sidebarOpen = (pathToChapters) =>{
    setIsOpen({isOpen: true})
    setPath({path:pathToChapters})
  }
  useEffect(() => {
    getCardInfo();
  },[]);

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