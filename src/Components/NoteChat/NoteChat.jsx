import React from 'react';
import './NoteChat.css';
import sendImg   from '../../assets/send.png'

function NoteChat() {
    return (
        <div className='chat-box'>
            <div className="chat-screen">
                <div className="header">
                </div>
                <div className="scroll-screen">
                    <div className="notesBox"></div>
                    <div className="notesBox"></div>
                    <div className="notesBox"></div>
                    <div className="notesBox"></div>
                    <div className="notesBox"></div>
                    <div className="notesBox"></div>
                    <div className="notesBox"></div>
                    <div className="notesBox"></div>

                </div>

                <div className="input-area">
                    <div className="inputBox">
                        <input
                            placeholder="Enter your text here ........."
                            type="text" />
                        <img  src={sendImg} alt="send"  className='send-icon'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NoteChat