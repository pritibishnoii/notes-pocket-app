import React, { useState } from 'react';
import './NoteChat.css';
import sendImg from '../../assets/send.png'

function NoteChat() {

    return (
        <div className='chat-box'>
            <div className="chat-screen">
                <div className="header">
                    <h1 className='circle'>MA</h1>
                    <h1 className='notes-title'>javascript </h1>
                </div>
                <div className="scroll-screen">
                    <div className="notesBox"></div>
                    <div className="notesBox"></div>
                    <div className="notesBox"></div>
                </div>

            <div className="input-area">
                    <textarea
                        placeholder="Enter your text here">
                    </textarea>
                    <div id="sendIcon"
                         >
                    <img src={sendImg} alt="send" className='send-msg' />
                    </div>
                   
            </div>
            </div>
        </div>

    )
}

export default NoteChat