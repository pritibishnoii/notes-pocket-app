import React, { useState } from "react";

import Home from "./Components/Home/Home.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import AppContext from "./Context/AppContext.js";

/* 

Math.floor(Math.random()*Math.pow(10, 10)).toString(16)

*/  


function App() {
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState(false);
  const [notesGroupData, setNotesGroupData] = useState([]);
  const [notesChatData, setNotesChatData] = useState({});
  const availableColors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ];

  const getTitleLetter = (word) => {
    let splitWord = word.trim().split(" ");
    if (splitWord.length === 1) {
      return splitWord[0].slice(0, 2).toUpperCase();
    } else {
      const firstIndex = 0;
      const secondIndex = splitWord.length - 1   // return 1
      const firstLetter = splitWord[firstIndex][0] || "";
      const secondLetter = splitWord[secondIndex][0] || "";
      return firstLetter.toUpperCase() + secondLetter.toUpperCase();
    }
  }

  const createNoteGroup = (title, color) => {
    if (color === '' || title.trim() === '') {
      setError(true)
      return;
    };
    setPopup(false)
    setNotesGroupData([...notesGroupData, {
      "id": "dskfh",   
      "title": title.trim(),
      "color": color,
      "titleLetter": getTitleLetter(title),
  }])
    // setGroups([...groups, { inputVal: inputVal, color: selectedColor }]);
  }

  return (
      <AppContext.Provider
        value={{
          notesGroupData,
          setNotesGroupData,
          notesChatData,
          setNotesChatData,
          availableColors,
          createNoteGroup,
          popup,
          setPopup,
          error,
          setError,
        }}
      >
        <div className="app">
          <Sidebar />
          <Home />
        </div>
      </AppContext.Provider>
  );
}

export default App;
