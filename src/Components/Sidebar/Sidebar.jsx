import React, { useState, useRef } from 'react';
import './Sidebar.css';
import addNotesButton from '../../assets/add-btn.png';
function Sidebar() {


  const [popup, setPopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState(false);
  const [groups, setGroups] = useState([]);



  let tempColor = useRef()


  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ]




  const createNoteTitle = () => {

    if (selectedColor === '' || inputVal.trim()==='') {
      setError(true)
      return;
    };
    setPopup(false)
    const newGroup = { inputVal: inputVal, color: selectedColor };
    console.log(newGroup)
    setGroups([...inputVal, newGroup]);
    console.log(setGroups([...inputVal, newGroup]))
   

  }



return (
  <>
    <div className="container">
      <div className="sidebar-contaianer">

        <h1 className="note-heading">Pocket Notes</h1>

        <div class="scroll-section">
          {groups.map((group, index) => (

            <div key={index} className='notes-title-section'>
              <h1 className='circle' style={{ backgroundColor: group.color }}>
                {`${group.inputVal}`}</h1>
              <h1 className='notes-title'>{group.inputVal}</h1>
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
        <div>
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
                        className={` ${'colorDiv'} ${tempColor.current === color && 'selected'}`}
                        key={index}
                        style={{ backgroundColor: color }}
                        onClick={() => {
                          setSelectedColor(color);
                          tempColor.current = color;
                          console.log(tempColor)
                          console.log(color)

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