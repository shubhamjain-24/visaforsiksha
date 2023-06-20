import React from 'react'
import axios from 'axios'

const NewChat = () => {
    const[chat,setChat]=React.useState([]);
    const fetchChats=async()=>{
        const {data}=await axios.get('api/chat')
        setChat(data);
        console.log(data)
      }
    
      React.useEffect(()=>{
        fetchChats();
      },[])
    
  return (
 <>
 {chat.map((chat)=>{

return <div key={chat._id}>{chat.chatName}</div>
 })}
 </>
  )
}

export default NewChat