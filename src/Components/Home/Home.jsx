import React, { useContext, useState } from 'react';
import '../../App.css'

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
      {/* <div className="container">
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

      </div> */}


<div className="chat-container" style={{backgroundColor:'#dae5f5',position:'absolute',left:'29%',width:'71%'}}>
<div className="chatSc">
        <div className="header" style={{width:'100%',height:'90px',backgroundColor:'blue',display:'flex',gap:'22px'}}>
          <img src={backIcon} alt="back"  style={{width:'22px',height:'22px',marginTop:'22px',marginLeft:'22px'}}/>
          <h1 >HM</h1>
          <h1>html ml</h1>
        </div>

        <div className="chat-input" style={{ marginTop: '388px',width:'100%',height:'25vh',backgroundColor:'blue' }}>
          <textarea
          style={{resize:'none',width:'93%',height:'18vh',backgroundColor:'#fff',margin:'22px'}}
            value={text}
            onChange={setTextArea}
            placeholder="Enter your text here"
          ></textarea>
          <div
            onClick={addTextNotes}
            className="send-btn"
            style={{  height: '70px',width:'70px',position:'absolute' ,bottom:'32px' ,right:'8%'}}>
            <img src={sendIcon} alt="send" style={{ margin: '32px '}} />
          </div>
        </div>
      </div>
</div>






      


    </>
  )
}

export default NoteContainer