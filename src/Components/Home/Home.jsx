import React, { useContext, useState } from 'react';
import './Home.module.css'

import BgImg from '../../assets/BgImg.png';
import lockImg from '../../assets/lockImg.png';
import backIcon from '../../assets/backIcon.png';
import sendIcon from '../../assets/send.png'


import { BiSolidLock } from "react-icons/bi";

function NoteContainer() {
  const [text, setText] = useState('');

  const setTextArea = (e) => {
    setText(e.target.value)
  }

  const addTextNotes = (e) => {
    if (text.trim() !== '') {
     
    }
  }
  return (
    <>
      <div className="container">
        <div className='main'>
          <div className="notes-section">
            <img className='Note-bg-img' src={BgImg} alt="background" />
            <h1 className='note-text'>Pocket Notes</h1>
            <p className='note-description'>Send and receive messages with
              out keeping your phone online. <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
          </div>
        </div>



        <div className='encrypted-box'>
          <BiSolidLock style={{ 'marginTop': '2px', 'marginRight': '9px' }} />
          <p className='encrypted-text'> end-to-end encrypted</p>
        </div>

      </div>




      <div className="chatSc">
        <div className="header">
          <img src={backIcon} alt="back" />
          <h1 >HM</h1>
          <h1>html ml</h1>
        </div>

        <div className="chat-input" style={{ marginTop: '420px' }}>
          <textarea
            value={text}
            onChange={setTextArea}
            placeholder="Enter your text here"
          ></textarea>
          <div
            onClick={addTextNotes}
            className="send-btn"
            style={{ backgroundColor: 'black', height: '90px' }}>
            <img src={sendIcon} alt="send" style={{ margin: '32px ' }} />
          </div>
        </div>
      </div>


    </>
  )
}

export default NoteContainer