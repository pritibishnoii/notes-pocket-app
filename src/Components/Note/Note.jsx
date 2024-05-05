import React from 'react'
import './Note.css'

function Note(  {showPopup,setShowPopup}) {
  const colors= [
      'B38BFA',
      'FF79F2',
      '43E6FC',
      'F19576',
      '0047FF',
      '6691FF'
  ]
  return (
   
    <>
     
    <div className='first-sec'  onClick={()=>setShowPopup(false)}>
    <div className="card">
      <p>Create Notes</p>
      <label htmlFor='note'>Create group name</label>
      <input type="text" id="note" />
      <p>Choose color</p>  
      <button>Create</button>
    </div>
    </div>
    </>
  )
}

export default Note