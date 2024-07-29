import React from 'react';
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from '../../utils/extractTime'; // If not default export, use curly braces

// Functional component to display a single message
const Message = ({ message }) => {
  // Get the authenticated user's context
  const { authUser } = useAuthContext();
  // Get the selected conversation from the zustand store
  const { selectedConversation } = useConversation();
  // Check if the message is sent by the authenticated user
  const fromMe = message.senderId === authUser._id;
  // Format the message creation time
  const formattedTime = extractTime(message.createdAt);
  // Determine the CSS class for chat alignment
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  // Get the profile picture of the other participant in the conversation
  const profilepic = selectedConversation?.profilepic; // Provide a default image URL if needed
  // Determine the background color of the message bubble based on the sender
  const bubbleBgColor = fromMe ? 'bg-amber-500' : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          {/* Display the profile picture */}
          <img src={profilepic} alt="Profile" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {/* Display the message content */}
        {message.message}
      </div>
      <div className="chat-footer opacity-50">
        {/* Display the formatted creation time */}
        {formattedTime}
      </div>
    </div>
  );
}

// Export the Message component for use in other parts of the application
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