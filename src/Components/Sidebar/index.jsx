import React, { useState, useContext } from "react";

import addNotesButton from "../../assets/add-btn.png";
import AppContext from "../../Context/AppContext";

import "./index.css";

/* 

[{
  "id": "dskfhe",
  "chatId": "dskfhe",
  "title": "Note 1",
  "color": "#B38BFA",
  "titleLetter": "JS", 100x100
}]

{
  "dskfhe": [{
    "id": "dskfhe",
    "content": "dfilsjvvsldkjero",
    "timestamp":  1715339854548
  }] 
}

*/

function Sidebar() {
  const { setPopup, notesGroupData } = useContext(AppContext);

  return (
    <div className="sidebar-container">
        <h1 className="heading-section">Pocket Notes</h1>
        <div class="geoup-section">
          {notesGroupData.map((item) => (
            <div key={item.id} className="notes-title-section">
              <h1 className="circle" style={{ backgroundColor: item.color }}>
                {item.titleLetter}
              </h1>
              <h1 className="notes-title">{item.title}</h1>
            </div>
          ))}
        </div>
        <img
          onClick={() => setPopup(true)}
          className="add-btn-img"
          src={addNotesButton}
          alt="add-btn"
        />
    </div>
  );
}

export default Sidebar;
