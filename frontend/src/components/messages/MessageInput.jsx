import { useState } from 'react';
import { GrSend } from 'react-icons/gr';
import useSendMessage from '../../hooks/useSendMessage';

// functional component for the message input field
const MessageInput = () => {
  const [message, setMessage] = useState(''); // state to hold the current message input
  const { loading, sendMessage } = useSendMessage(); // hook to handle sending messages and loading state

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent default form submission behavior
    if (!message) return; // do nothing if the message is empty
    await sendMessage(message); // send the message
    setMessage(""); // clear the input field after sending
  };

  return (
    <form className="px-4 my-4" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm font-mono rounded-lg block w-full p-2.5 bg-white text-black"
          placeholder="send a message" // placeholder text for the input field
          value={message} // bind input value to state
          onChange={(e) => setMessage(e.target.value)} // update state on input change
        />
        <button
          type='submit'
          className="absolute text-amber-700 cursor-pointer inset-y-0 right-0 flex items-center pr-3"
        >
          {/* display a loading spinner if loading, otherwise show send icon */}
          {loading ? <div className="loading loading-spinner"></div> : <GrSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

// import React from 'react'
// import { GrSend } from "react-icons/gr";

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-4'>
//     <div className='w-full'>
//     <input type='text'
//     className='border text-sm font-mono rounded-lg block w-full p-2.5 bg-white text-black'
//     placeholder='Send a message'
//     />
//     <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//     <GrSend />
//     </button>
//     </div>
//     </form>
//   )
// }

// export default MessageInput;