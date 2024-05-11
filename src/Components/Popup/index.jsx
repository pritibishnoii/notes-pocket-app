import React, { useState, useContext } from "react";

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
    <div className="popup-container">
      <div className="popup-transparent-bg" onClick={() => setPopup(false)} />
      <div className="popup-modal">
        <h3 className="popup-modal-title">Create New group</h3>
        <div className="group-title">
          <label
            className="group-title-input-label"
            htmlFor="group-title-input"
          >
            Group Name
          </label>
          <input
            onChange={(e) => setTitleText(e.target.value)}
            type="text"
            id="group-title-input"
            className="group-title-input"
            value={titleText}
            placeholder="Enter group name"
          />
        </div>

        <div className="group-color">
          <label className="group-color-input-label" htmlFor="">
            Choose colour
          </label>
          <div className="group-color-opts">
            {colors.map((color, index) => {
              return (
                <input
                  className="group-color-choice"
                  type="radio"
                  name="group-color-choice"
                  value={color}
                  key={`${index}-${color}`}
                  style={{ backgroundColor: color }}
                  onClick={() => {
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
