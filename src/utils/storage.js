export const saveGroupDataToLS = (data)=>{
    localStorage.setItem('notesGroupData', JSON.stringify(data))
}

export const saveChatDataToLS = (data)=>{
    localStorage.setItem('notesChatData', JSON.stringify(data))
}

export const getGroupDataFromLS = ()=>{
    return JSON.parse(localStorage.getItem('notesGroupData') || '[]');
}

export const getChatDataFromLS = ()=>{
    return JSON.parse(localStorage.getItem('notesChatData') || '{}');
}