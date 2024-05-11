export const saveGroupDataToLS = (data)=>{
    localStorage.setItem('notesGroupData', JSON.stringify(data))
}

export const saveChatDataToLS = (data)=>{
    localStorage.setItem('notesChatData', JSON.stringify(data))
}