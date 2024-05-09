import React,{useContext,useState} from 'react';
import '../../App.css';

import BgImg from '../../assets/BgImg.png';
import lockImg from '../../assets/lockImg.png';
import backIcon from '../../assets/backIcon.png';



import { BiSolidLock } from "react-icons/bi";

function NoteContainer() {

  return (
    <>
<div className="container">
        {/* <div className='main'>
          <div className="notes-section">
            <img className='Note-bg-img' src={BgImg} alt="background" />
            <h1 className='note-text'>Pocket Notes</h1>
            <p className='note-description'>Send and receive messages with
              out keeping your phone online. <br />
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
          </div>
        </div> */}


        <div className='encrypted-box'>
            <BiSolidLock style={{ 'marginTop': '2px', 'marginRight': '9px' }} />
            <p className='encrypted-text'> end-to-end encrypted</p>
          </div>

</div>

    </>
  )
}

export default NoteContainer