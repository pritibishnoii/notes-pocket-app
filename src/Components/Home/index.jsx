import React, { useContext, useState } from "react";

import BgImg from "../../assets/BgImg.png";
import lockImg from "../../assets/lockImg.png";
import backIcon from "../../assets/backIcon.png";
import sendIcon from "../../assets/send.png";
import { BiSolidLock } from "react-icons/bi";

import "./index.css";

function Home() {
  const [text, setText] = useState("");

  const setTextArea = (e) => {
    setText(e.target.value);
  };

  const addText = () => {
    if (text.trim() !== "") {
      setText(text);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="main-container-bg">
          <div className="notes-section">
            <img className="Note-bg-img" src={BgImg} alt="background" />
            <h1 className="note-text">Pocket Notes</h1>
            <p className="note-description">
              Send and receive messages with out keeping your phone online.{" "}
              <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
        </div>

        <div className="encrypted-box">
          <BiSolidLock style={{ marginTop: "2px", marginRight: "9px" }} />
          <p className="encrypted-text"> end-to-end encrypted</p>
        </div>
      </div>

      <div className="chat-container">
        <div className="chatSc">
          <div className="header">
            {/* <img src={backIcon} alt="back" className='back-img' /> */}
            <h1>HM</h1>
            <h1>html ml</h1>
          </div>

          <div className="note-box">
            <p className="text-note">{text}</p>
            <p className="date">9 Mar 2023</p>
            <p className="time">10:00 AM</p>
          </div>

          <div className="chat-input">
            <textarea
              placeholder="Enter your text here"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <div onClick={addText} className="send-btn">
              <img src={sendIcon} alt="send" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
