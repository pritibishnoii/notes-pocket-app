import React, { useContext } from "react";

import addNotesButton from "../../assets/add-btn.png";
import AppContext from "../../Context/AppContext";

import "./index.css";

function Sidebar() {
  const { setPopup, selectedGroupId, setSelectedGroupId, notesGroupData } =
    useContext(AppContext);
  return (
    <div
      className="sidebar-container"
      style={{ zIndex: selectedGroupId ? 8 : 9 }}
    >
      <h1 className="sidebar-heading">Pocket Notes</h1>
      <div className="sidebar-note-groups">
        {notesGroupData.map((item) => (
          <div
            key={item.id}
            className={`group-title-container${
              selectedGroupId === item.id ? " selected" : ""
            }`}
            onClick={() => {
              setSelectedGroupId(item.id);
            }}
          >
            <div
              className="group-title-circle"
              style={{ backgroundColor: item.color }}
            >
              {item.titleLetter}
            </div>
            <h1 className="group-title-content">{item.title}</h1>
          </div>
        ))}
      </div>
      <div className="add-note-btn" onClick={() => setPopup(true)}>
        <img src={addNotesButton} alt="Create Note" width={60} height={60} />
      </div>
    </div>
  );
}

export default Sidebar;
