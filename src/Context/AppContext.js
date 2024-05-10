import React from "react";

/* 

{
    "notesGroupData": [{
        "id": "dskfhe",
        "title": "Note 1",
        "color": "#B38BFA",
        "titleLetter": "JS", 100x100
    }],
    "notesChatData": {
        "dskfhe": [{
            "id": "dskfhe",
            "content": "dfilsjvvsldkjero",
            "timestamp":  1715339854548
        }] 
    },
    "availableColors": [
        "#B38BFA",
        "#FF79F2",
        "#43E6FC",
        "#F19576",
        "#0047FF",
        "#6691FF",
    ]
}


*/

const AppContext = React.createContext({
  notesGroupData: [],
  setNotesGroupData: (_v)=>{},
  notesChatData: {},
  setNotesChatData: (_v)=>{},
  availableColors: [
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",       
    "#F19576",
    "#0047FF",
    "#6691FF", 
  ],
  createNoteGroup: (_v1, _v2)=>{},
  popup: false,
  setPopup: (e)=>{},
  error: false,
  setError: (e)=>{}
});
export default AppContext;
