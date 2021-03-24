import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import BookService from './Services/Book'

import Card from "./Components/Card/Card"
import BooksList from "./Components/BooksList/BooksList"
import Sidebar from "./Components/Sidebar/Sidebar"

import './App.css';

const App = () => {
  const [data, setData] = useState({ MediaContainer: { Metadata:[] }});
  const [path, setPath] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [pathToAudio, setPathToAudio] = useState('');

  const getCardInfo = async () =>{
    const books = await BookService.getCardList();
    setData(books.data);
  }

  const bookListOpen = (pathToChapters) =>{
    setPath({path:pathToChapters})
  }

  const sidebarOpen = (pathToAudio) =>{
    setPathToAudio({pathToAudio:pathToAudio});
    setIsOpen({isOpen: true})
  }

  useEffect(() => {
    getCardInfo();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact>
              <h1 className="headerFont">Books</h1>
              <Card
                data={data}
                bookListOpen={bookListOpen}
              />
            </Route>
            <Route path="/bookslist">
              <BooksList
                sidebarOpen={sidebarOpen}
                pathToChapters={path.path}
              />
              <Sidebar
                  isOpen={isOpen}
                  pathToAudio={pathToAudio.pathToAudio}
                />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}
export default App;