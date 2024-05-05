import React from 'react';
import './Sidebar.css';
import addNotesButton from '../../assets/add-btn.png';

function Sidebar() {
  return (
    <>
      <div className="container">
        <div className="sidebar-contaianer">

          <h1 className="note-heading">Pocket Notes</h1>

          <div class="scroll-section">
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
            <div className='notes-title-section'>
              <h1 className='circle'>MN</h1>
              <h1 className='note-title'>My Notes</h1>
            </div>
          </div>
        </div>
        <img className="add-btn-img" src={addNotesButton} alt="add-btn" srcset="" />
      </div>

    </>
  )
}

export default Sidebar;