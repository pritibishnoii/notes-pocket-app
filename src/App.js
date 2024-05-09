import React, { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import AppContext from './Context/AppContext.js';
import Home from './Components/Home/Home.jsx';

function App() {
  const [popup, setPopup] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState(false);
  const [groups, setGroups] = useState([]);
  return (
    <>
      <AppContext.Provider
        value={
          {
            popup,
            setPopup,
            setSelectedColor,
            selectedColor,
            inputVal,
            setInputVal,
            error,
            setError,
            groups,
            setGroups,
          }
        }
      >
        <div className='app'>
          <Sidebar></Sidebar>
          
          <Home></Home>
        </div>
      </AppContext.Provider>



    </>
  )
}

export default App;