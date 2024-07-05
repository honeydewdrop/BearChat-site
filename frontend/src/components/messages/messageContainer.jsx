import React from 'react'
import MessageInput from "./MessageInput.jsx";
import Messages from './Messages';
import { PiChats } from "react-icons/pi";
import { GiPolarBear } from "react-icons/gi";

const messageContainer = () => {
  const noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {noChatSelected ? ( <NoChatSelected /> ) : (
        <>
        <div className='bg-amber-700 px-4 py-2 mb-2'>
            <span className='text-black text-sm font-mono'>Messaging</span> <span className= 'text-amber-400 font-mono'>John Doe</span>
        </div>
        <Messages />
        <MessageInput />
        </>
      )}
        </div>
  )
}

export default messageContainer;

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg font-mono md:text-xl text-amber-700 flex flex-col
      items-center gap-2'>
        <p>Hello John Doe </p>
        <GiPolarBear className='size-10 text-4x1 md:text-8x1 text-center' />        
        <p>To start messaging, select a chat</p>
        <PiChats className='size-10 text-3x1 md:text-6x1 text-center' />
      </div>
      </div>
  )
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