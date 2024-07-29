import React from 'react';
import Conversation from "./Conversation.jsx";
import useGetConversations from '../../hooks/useGetConversations.js';
import { getRandomEmoji } from '../../utils/emojis.js';

// functional component to display a list of conversations
const Conversations = () => {
  // hook to fetch conversations and loading state
  const { loading, conversations } = useGetConversations();
  
  // log the conversations for debugging purposes
  console.log("conversations:", conversations);
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {/* map over conversations to render each one */}
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id} // unique key for each conversation
          conversation={conversation} // pass conversation data to Conversation component
          emoji={getRandomEmoji()} // generate and pass a random emoji
          lastIdx={idx === conversations.length - 1} // flag to determine if this is the last conversation
        />
      ))}
      {/* display a loading spinner if data is still being fetched */}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
}

export default Conversations;

// import React from 'react'
// import Conversation from "./Conversation.jsx"
// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         </div>
//   );
// }

// export default Conversations;