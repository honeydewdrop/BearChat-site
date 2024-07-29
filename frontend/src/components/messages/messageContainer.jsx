import { useEffect } from 'react';
import MessageInput from "./MessageInput.jsx";
import Messages from './Messages';
import { PiChats } from "react-icons/pi";
import { GiPolarBear } from "react-icons/gi";
import useConversation from "../../zustand/useConversation";
import useAuthContext from '../../context/AuthContext.jsx';

// functional component to display the message container
const messageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function for logout or when component unmounts
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {/* check if there is a selected conversation */}
      {!selectedConversation ? (
        <NoChatSelected /> // render component if no chat is selected
      ) : (
        <>
          {/* header showing the name of the selected conversation */}
          <div className='bg-amber-700 px-4 py-2 mb-2'>
            <span className='text-black text-sm font-mono'>messaging </span>
            <span className='text-amber-400 font-mono'>{selectedConversation.fullName}</span>
          </div>
          {/* display messages and input field */}
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default messageContainer;

// functional component to show when no chat is selected
const NoChatSelected = () => {
  const { authUser } = useAuthContext();

  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg font-mono md:text-xl text-amber-700 flex flex-col items-center gap-2'>
        {/* greeting message with user’s name */}
        <p>hello {authUser.fullName}</p>
        {/* icons for visual appeal */}
        <GiPolarBear className='size-10 text-4x1 md:text-8x1 text-center' />
        <p>to start messaging, select a chat</p>
        <PiChats className='size-10 text-3x1 md:text-6x1 text-center' />
      </div>
    </div>
  );
}


// import React from 'react'
// import MessageInput from "./MessageInput.jsx";
// import Messages from './Messages';

// const messageContainer = () => {
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
//         <>
//         <div className='bg-amber-700 px-4 py-2 mb-2'>
//             <span className='text-black text-sm font-mono'>Messaging</span> <span className= 'text-amber-400 font-mono'>John Doe</span>
//         </div>
//         <Messages />
//         <MessageInput />
//         </>
//         </div>
//   )
// }

// export default messageContainer;