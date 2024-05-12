import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";
import Popup from "./Components/Popup";
import AppContext from "./Context/AppContext.js";
import { saveGroupDataToLS, saveChatDataToLS, getGroupDataFromLS, getChatDataFromLS } from "./utils/storage";

import "./App.css";

function App() {
  const [popup, setPopup] = useState(false);
  const [error, setError] = useState(false);
  const [notesGroupData, setNotesGroupData] = useState([]);
  const [notesChatData, setNotesChatData] = useState({});
  const [selectedGroupId, setSelectedGroupId] = useState(null);
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
      return splitWord[0].slice(0, 1).toUpperCase();
    } else {
      const firstIndex = 0;
      const secondIndex = 1;
      const firstLetter = splitWord[firstIndex][0] || "";
      const secondLetter = splitWord[secondIndex][0] || "";
      return (firstLetter + secondLetter).toUpperCase();
    }
  };

  useEffect(()=>{
    setNotesGroupData(getGroupDataFromLS());
    setNotesChatData(getChatDataFromLS());
  }, []);

  const createNoteGroup = (title, color) => {
    if (color === "" || title.trim() === "") {
      setError(true);
      return;
    }
    setPopup(false);

    const grpId = nanoid()
    const updatedNotesGroupData = [
      ...notesGroupData,
      {
        id: grpId,
        title: title.trim(),
        color: color,
        titleLetter: getTitleLetter(title),
      },
    ];
    setNotesGroupData(updatedNotesGroupData);
    saveGroupDataToLS(updatedNotesGroupData);
    setSelectedGroupId(grpId);
    
  };

  const createNotesChat = (text) => {
    if (text.trim() === "") {
      return;
    }

    const updatedNotesChatData = { ...notesChatData };

    if (!notesChatData[selectedGroupId])
      notesChatData[selectedGroupId] = [];
    updatedNotesChatData[selectedGroupId] = [
      ...notesChatData[selectedGroupId],
      {
        id: nanoid(10),
        content: text.trim(),
        timestamp: Date.now(),
      },
    ];
    setNotesChatData(updatedNotesChatData);
    saveChatDataToLS(updatedNotesChatData);
  };

  const ctxValue = {
    notesGroupData,
    notesChatData,
    availableColors,
    createNoteGroup,
    selectedGroupId,
    setSelectedGroupId,
    createNotesChat,
    popup,
    setPopup,
    error,
    setError,
  };

  return (
    <AppContext.Provider value={ctxValue}>
      <div className="root-container">
        <Sidebar />
        <Home />
        {popup && <Popup />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
