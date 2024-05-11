import React, { useContext, useState } from "react";

import AppContext from "../../Context/AppContext";
import BgImg from "../../assets/BgImg.png";
import lockImg from "../../assets/lockImg.png";
import backIcon from "../../assets/backIcon.png";
import sendIcon from "../../assets/send.png";
import { BiSolidLock } from "react-icons/bi";

import "./index.css";

function Home() {
  const {
    selectedGroupId,
    setSelectedGroupId,
    notesChatData,
    notesGroupData,
    createNotesChat,
  } = useContext(AppContext);
  const [text, setText] = useState("");

  const groupData = selectedGroupId
    ? notesGroupData.find((item) => item.id === selectedGroupId)
    : null;
  const chatData = selectedGroupId ? notesChatData[selectedGroupId] : null;

  return (
    <div className="main-container" style={{ zIndex: selectedGroupId ? 9 : 8 }}>
      {groupData ? (
        <div className="chat-container">
          <div key={groupData.id} className="group-title-container">
            <div
              onClick={() => {
                setSelectedGroupId(null);
              }}
            >
              <img src={backIcon} alt="Back" className="back-btn" />
            </div>
            <div
              className="group-title-circle"
              style={{ backgroundColor: groupData.color }}
            >
              {groupData.titleLetter}
            </div>
            <h1 className="group-title-content">{groupData.title}</h1>
          </div>

          <div className="chat-list">
            {chatData &&
              chatData.map((item) => (
                <div className="note-box" key={item.id}>
                  <p className="text-note">{item.content}</p>
                  <div className="date-time">
                    <span>
                      {new Date(item.timestamp).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    &nbsp;&nbsp;•&nbsp;&nbsp;
                    <span>
                      {new Date(item.timestamp).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div className="chat-input">
            <textarea
              placeholder="Enter your text here"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  createNotesChat(text);
                  setText("");
                }
              }}
            />
            <div
              className="send-btn"
              onClick={() => {
                createNotesChat(text);
                setText("");
              }}
            >
              <img src={sendIcon} alt="send" />
            </div>
          </div>
        </div>
      ) : (
        <div className="main-container-bg">
          <div className="notes-section">
            <img className="note-bg-img" src={BgImg} alt="background" />
            <h1 className="note-text">Pocket Notes</h1>
            <p className="note-description">
              Send and receive messages with out keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
          <div className="encrypted-box">
            <BiSolidLock style={{ marginTop: "2px", marginRight: "9px" }} />
            <p className="encrypted-text"> end-to-end encrypted</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
