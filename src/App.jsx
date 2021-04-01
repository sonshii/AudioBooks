import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import { Row, Col } from 'antd'

import BookService from './Services/Book'

import BookCard from "./Components/BookCard/BookCard"
import BooksList from "./Components/BooksList/BooksList"
import Sidebar from "./Components/Sidebar/Sidebar"

import 'antd/dist/antd.css';
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
    setPath(pathToChapters)
  }

  const sidebarOpen = (pathToAudio) =>{
    setPathToAudio(pathToAudio);
    setIsOpen(true)
  }

  useEffect(() => {
    getCardInfo();
  },[]);
  
  return (
    <Row className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <React.Fragment>
              <Col span={20} offset = {2}>
                <Route path="/" exact>
                  <h1 className="headerFont">Books</h1>
                  <BookCard
                    data={data}
                    bookListOpen={bookListOpen}
                  />
                </Route>
              </Col>
              <Route path="/bookslist">
                <BooksList
                  sidebarOpen={sidebarOpen}
                  pathToChapters={path}
                />
                <Sidebar
                    isOpen={isOpen}
                    pathToAudio={pathToAudio}
                  />
              </Route>
            </React.Fragment>
          </Switch>
        </Router>
      </header>
    </Row>
  );
}
export default App;