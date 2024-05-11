import React, { useContext, useState } from "react";

import AppContext from "../../Context/AppContext";
import BgImg from "../../assets/BgImg.png";
import lockImg from "../../assets/lockImg.png";
import backIcon from "../../assets/backIcon.png";
import sendIcon from "../../assets/send.png";
import { BiSolidLock } from "react-icons/bi";

import "./index.css";

function Home() {
  const { selectedGroupId, notesChatData, notesGroupData } = useContext(AppContext);
  const [text, setText] = useState("");

  const groupData = selectedGroupId ? notesGroupData.find(item => item.id === selectedGroupId) : null;
  const chatData = selectedGroupId ? notesChatData[selectedGroupId] : null;

  return (
    <div className="main-container">
      <div className="main-container-bg">
        <div className="notes-section">
          <img className="Note-bg-img" src={BgImg} alt="background" />
          <h1 className="note-text">Pocket Notes</h1>
          <p className="note-description">
            Send and receive messages with out keeping your phone online. <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
      </div>

      <div className="encrypted-box">
        <BiSolidLock style={{ marginTop: "2px",marginLeft:'8%' }} />
        <p className="encrypted-text"> end-to-end encrypted</p>
      </div>


<div className="chat-container">
      <div className="chat-header">
      <img src={backIcon} alt="back" style={{color:'#fff',}} />
        <h1 className="chat-title-circle circle">MN</h1>
        <h1 className="chat-title">My Name</h1>
      </div>
        <div className="chatSc">
          {chatData && chatData.map(item => (
            <div className="note-box">
              <p className="text-note">{item.content}</p>
              <p className="date">{new Date(item.timestamp).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</p>
              •
              <p className="time">{new Date(item.timestamp).toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit", hour12: true })}</p>
            </div>

          ))}
         
        </div>
      </div>

      <div className="chat-input">
        <textarea
          placeholder="Enter your text here"
          // value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className="send-btn">
          <img src={sendIcon} alt="send" />
        </div>
      </div>
    </div>
  );
}

export default Home;
