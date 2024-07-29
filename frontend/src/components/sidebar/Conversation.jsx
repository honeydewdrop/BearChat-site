import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

// functional component to display a single conversation item
const Conversation = ({ conversation, lastIdx, emoji }) => {
  // hook to manage the selected conversation state
  const { selectedConversation, setSelectedConversation } = useConversation();
  
  // check if this conversation is the currently selected one
  const isSelected = selectedConversation?._id === conversation._id;
  
  // hook to access online users from the socket context
  const { onlineUsers } = useSocketContext();
  
  // check if the conversation's user is online
  const isOnline = onlineUsers.includes(conversation._id);
  
  return (
    <>
      {/* conversation item with conditional styling */}
      <div
        className={`flex gap-2 items-center hover:bg-slate-400 rounded-sm p-2 py-2 cursor-pointer
          ${isSelected ? "bg-amber-300" : ""}`}
        onClick={() => setSelectedConversation(conversation)} // set the selected conversation on click
      >
        {/* user avatar with online status indicator */}
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className='w-12 rounded-full'>
            <img
              src={conversation.profilepic}
              alt="user avatar"
            />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-mono text-black'>{conversation.fullName}</p>
            <span className='text-xl'>({emoji})</span> {/* display emoji */}
          </div>
        </div>
      </div>

      {/* divider between conversations, not shown if this is the last conversation */}
      {!lastIdx && <div className='divider my-0 py-0 h1-1' />}
    </>
  );
}

export default Conversation;

// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//     <div className = 'flex gap-2 items-center hover:bg-slate-400 rounded-sm p-2 py-2 cursor-pointer'>
//     <div className='avatar online'>
//     <div className='w-12 rounded-full'>
//         <img src ="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="user avatar" 
//         />
//     </div>
//     </div>

//         <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//             <p className='font-mono text-black'>John Doe</p>
//                 <span className='text-xl'>🐜</span>
//         </div>
//         </div>
//         </div>
//     <div className='divider my-0 py-0 h1-1'/>
//     </>
//   );
// }

// export default Conversation;