import React, { useState, useRef } from 'react'
import './Note.css'


function Note({ showPopup, setShowPopup }) {
  const [selectedColor, setSelectedColor] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState(false);



  let tempColor = useRef()


  const colors = [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
  ]

  const addNotes = () => {

    if (selectedColor === '') setError(true);
    if (inputVal === '') setError(true);
    else {
      setShowPopup(false)
      // console.log(`add note --->${inputVal} ${selectedColor}`)


    }

  }


  return (

    <>

      <div className='transparent-bg' onClick={() => setShowPopup(false)}>
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
          onClick={addNotes}
          className='create-btn'>Create</button>
        {error && (
          <label
            className="error-text">
            Yet to fill one or both fields
          </label>
        )}
      </div>

    </>
  )
}

export default Note