import React, { useRef, useContext } from 'react';
import '../../App.css';
import addNotesButton from '../../assets/add-btn.png';
import AppContext from '../../Context/AppContext';


function Sidebar() {
  const { selectedColor, setSelectedColor, popup, setPopup, error, setError, inputVal, setInputVal, groups, setGroups } = useContext(AppContext)

  let colorRef = useRef()
  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ]
  const getTitleLetter = (word) => {
    let splitWord = word.trim().split(" ");
    if (splitWord.length === 1) {
      return splitWord[0].slice(0, 2).toUpperCase();
    } else {
      const firstIndex = 0
      const secondIndex = splitWord.length - 1   // return 1
      const firstLetter = splitWord[firstIndex][0] || "";
      const secondLetter = splitWord[secondIndex][0] || "";
      return firstLetter.toUpperCase() + secondLetter.toUpperCase();
    }
  }

  const createNoteTitle = () => {
    if (selectedColor === '' || inputVal.trim() === '') {
      setError(true)
      return;
    };
    // localStorage.setItem('groupdata', 'groups')
    setPopup(false)
    setGroups([...groups, { inputVal: inputVal, color: selectedColor }]);
  }


 
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