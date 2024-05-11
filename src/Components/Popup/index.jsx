import React, {useState, useContext} from "react";

import AppContext from "../../Context/AppContext";

import "./index.css";

const Popup = () => {
  const {
    setPopup,
    error,
    availableColors: colors,
    createNoteGroup,
  } = useContext(AppContext);
  const [titleText, setTitleText] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  
  return (
      <div className="pop-up">
        <div className="transparent-bg" onClick={() => setPopup(false)}></div>
        <div className="addnote-card">
          <p className="create-group-tittle">Create New group</p>
          <label
            className=" choose-grp-name create-group-tittle"
            htmlFor="note"
          >
            Group Name
            <input
              onChange={(e) => setTitleText(e.target.value)}
              type="text"
              id="note"
              value={titleText}
              placeholder="Enter  group name"
            />
          </label>
          <div className="choose-color-box">
            <label className=" choose-color  create-group-tittle">
              Choose colour
            </label>
            <div className="color-box">
              {colors.map((color, index) => {
                return (
                  <div
                    className={"colorDiv"}
                    key={`${index}-${color}`}
                    style={{ backgroundColor: color }}
                    onClick={(e) => {
                      e.target.classList.add("selected");
                      setSelectedColor(color);
                    }}
                  />
                );
              })}
            </div>
          </div>
          <button
            onClick={() => {
              createNoteGroup(titleText, selectedColor);
            }}
            className="create-btn"
          >
            Create
          </button>
          {error && <label className="error-text">fill both fields</label>}
        </div>
      </div>
    );
};

export default Popup;
