import React, { useRef, useContext } from 'react';

import addNotesButton from '../../assets/add-btn.png';
import AppContext from '../../Context/AppContext';

import '../../App.css';

/* 

[{
  "id": "dskfhe",
  "chatId": "dskfhe",
  "title": "Note 1",
  "color": "#B38BFA",
  "titleLetter": "JS", 100x100
}]

{
  "dskfhe": [{
    "id": "dskfhe",
    "content": "dfilsjvvsldkjero",
    "timestamp":  1715339854548
  }] 
}

*/


function Sidebar() {
  const { popup, setPopup, error, setError, availableColors: colors } = useContext(AppContext);
  const [titleText, setTitleText] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
 
  return (
    <>
      {/* displaying note title */}
      <div className="container">
        <div className="sidebar-contaianer">
          <h1 className="note-heading">Pocket Notes</h1>
          <div class="scroll-section">
            {groups.map((group, index) => (
              <div key={index} className='notes-title-section' >
                <h1 className='circle' style={{ backgroundColor: group.color }}>
                  {getTitleLetter(group.inputVal)}</h1>
                <h1 className='notes-title' >{group.inputVal.charAt(0).toUpperCase() + group.inputVal.slice(1)}</h1>
              </div>
            ))}
          </div>
          <img
            onClick={() => setPopup(true)}
            className="add-btn-img"
            src={addNotesButton}
            alt="add-btn" />
        </div>
      </div>


      {/* popup section  */}
      {
        popup && (
          <div className='pop-up'>
            <div className='transparent-bg' onClick={() => setPopup(false)}>
            </div>
            <div className="addnote-card" >
              <p className='create-group-tittle'>Create New group</p>
              <label className=' choose-grp-name create-group-tittle' htmlFor='note'>Group Name
                <input
                  onChange={(e) => setInputVal(e.target.value)}
                  type="text"
                  id="note"
                  placeholder='Enter  group name' /></label>
              <div className="choose-color-box">
                <label className=' choose-color  create-group-tittle'>Choose colour</label>
                <div className="color-box">
                  {
                    colors.map((color, index) => {
                      return (
                        <div
                          className={` ${'colorDiv'} ${colorRef.current === color && 'selected'}`}
                          key={index}
                          style={{ backgroundColor: color }}
                          onClick={() => {
                            setSelectedColor(color);
                            colorRef.current = color;
                          }}
                        ></div>
                      )
                    })
                  }
                </div>
              </div>
              <button
                onClick={createNoteTitle}
                className='create-btn'>Create</button>
              {error && (
                <label
                  className="error-text">
                  fill one or both fields
                </label>
              )}
            </div>

          </div>
        )
      }

    </>
  )
}

export default Sidebar;