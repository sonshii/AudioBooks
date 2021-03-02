import React, { useState, useEffect } from 'react'
import axios from 'axios';

import './App.css';

function App() {
  const [data, setData] = useState({ MediaContainer: {
    Metadata:[]
  } });
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async() => {
    try{
      const result = await axios(
        'https://plex.weslyg.ru/library/sections/5/all?type=9&includeCollections=1&X-Plex-Token=pRUra2qjZ7y39rgnyy1v',
      );
      setData(result.data);
    } catch (e){
      console.log(`Axios request failed: ${e}`);
    }
    
  },[]);
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
          <ul>
            {data.MediaContainer.Metadata.map((item) => {
              return (
                <li key={item.ratingKey}>
                  <img src={"https://plex.weslyg.ru"+item.thumb+"?X-Plex-Token=pRUra2qjZ7y39rgnyy1v"} alt=""/>
                  {item.title}
                </li>
              );
            })}
          </ul>
      </header>
    </div>
  );
}

export default App;
