import React, { useState } from 'react';
import NoteContainer from './Components/NoteContainer/NoteContainer.jsx';
import Note from './Components/Note/Note.jsx';
import Sidebar from './Components/Sidebar/Sidebar.jsx'
import NoteChat from './Components/NoteChat/NoteChat.jsx';


function App() {
  

  const [notesData, setNotesData] = useState([]); 



  return (
    <>
    
      <NoteContainer ></NoteContainer>
     
      
{/* <NoteChat></NoteChat> */}

    </>
  )
}

export default App;