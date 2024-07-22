import React from 'react';
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from '../../utils/extractTime'; // if not default export use curly braces

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilepic = fromMe ? authUser.profilepic : selectedConversation?.profilepic;
  const profilepicUrl = profilepic || 'default-profile-pic-url.jpg'; // Provide a default image URL
  const bubbleBgColor = fromMe ? 'bg-amber-500' : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilepic} alt="user avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
      <div className="chat-footer opacity-50">{formattedTime}</div>
    </div>
  );
}

export default Message;


// import React from 'react'

// const Message = () => {
//   return (
//     <div className='chat chat-end'>
//         <div className='chat-image avatar'>
//             <div className='w-10 rounded-full'>
//                 <img
//                 alt='Tailwind CSS chat bubble component'
//                 src={
//                 "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//                 }
//                 />
//             </div>
//         </div>
//         <div className={'chat-bubble text-black bg-amber-200'}>What's up?</div>
//         <div className="chat-footer opacity-50">12:42</div>
//     </div>
//   )
// }

// export default Message;