import React from 'react'
import './Sidebar.css'
const Sidebar = ({isOpen, pathToAudio}) =>{
  
  let setClassName = isOpen ? 'sidebarOpen' : 'sidebarClose';

  return (
    <div className={setClassName}>
      <div>
       {pathToAudio && (
        <audio controls>
          <source src={"https://plex.weslyg.ru"+ pathToAudio} type="audio/mpeg"/>
          </audio>
       )}
      </div>
    </div>
  );
};

export default Sidebar;