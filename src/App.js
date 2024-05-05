import React ,{useState} from 'react';
import NoteContainer from './Components/NoteContainer/NoteContainer.jsx';
import Note from './Components/Note/Note.jsx'



function App() {
  const [showPopup,setShowPopup] = useState(false);

  return (
    <>
     <NoteContainer showPopup={showPopup}  setShowPopup={setShowPopup} ></NoteContainer>
     {
      showPopup &&  <Note showPopup={showPopup}  setShowPopup={setShowPopup} />
     }
   
    </>
  )
}

export default App;