import React from 'react'
import { GrSend } from "react-icons/gr";

const MessageInput = () => {
  return (
    <form className='px-4 my-4'>
    <div className='w-full relative'>
    <input type='text'
    className='border text-sm font-mono rounded-lg block w-full p-2.5 bg-white text-black'
    placeholder='Send a message'
    />
    <button type='submit' className='absolute text-amber-700 cursor-pointer inset-y-0 end-0 flex items-center pe-3'>
    <GrSend />
    </button>
    </div>
    </form>
  )
}

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