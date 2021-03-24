import React from 'react'
import {Link} from "react-router-dom"; 
import './Card.css'


const Card = ({data,bookListOpen}) =>{
  return(
    <div className="cards">
      {data.MediaContainer.Metadata.map((item) => {
        return (
          <Link to="/bookslist" key={item.ratingKey} className="card" onClick={() => bookListOpen(item.key+"?X-Plex-Token=pRUra2qjZ7y39rgnyy1v")}>
                <img className="cardImage" src={"https://plex.weslyg.ru"+item.thumb+"?X-Plex-Token=pRUra2qjZ7y39rgnyy1v"} alt=""/>
                  <p className="title">{item.title}</p>
                  <p className="author">{item.parentTitle}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;