import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Output = () =>{
  const [data, setData] = useState({ hits: [] });
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const result = await axios(
      'https://plex.weslyg.ru/library/metadata/301/children?X-Plex-Token=pRUra2qjZ7y39rgnyy1v',
    );
    setData(result.data);
  });
  return(
    <ul>
      {data.MediaContainer.Metadata.map(item => (
        <li key={item.key}>
          <a href={item.grandparentGuid}>{item.parentTitle}</a>
          <h1>{item.originalTitle}</h1>
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default Output