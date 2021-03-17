import React from 'react'
import './Card.css'

const Card = ({data,sidebarOpen}) =>{
  return(
    <div className="cards">
      {data.MediaContainer.Metadata.map((item) => {
        return (
          <div className="card" onClick={() => sidebarOpen(item.key+"?X-Plex-Token=pRUra2qjZ7y39rgnyy1v")}>
              <img className="cardImage" src={"https://plex.weslyg.ru"+item.thumb+"?X-Plex-Token=pRUra2qjZ7y39rgnyy1v"} alt=""/>
              {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Card;