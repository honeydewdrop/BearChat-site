import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import Message from './Message.jsx';
import MessageSkeleton from '../skeletons/messageSkeleton.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

// functional component to display a list of messages
const Messages = () => {
  const { messages, loading } = useGetMessages(); // hook to fetch messages and loading state
  useListenMessages(); // hook to listen for new incoming messages
  const lastMessageRef = useRef(); // ref to keep track of the last message element

  useEffect(() => {
    // scroll to the last message when messages change
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {/* render messages if not loading and messages are available */}
      {!loading && messages.length > 0 && messages.map((message, index) => (
        <div 
          key={message._id} 
          ref={index === messages.length - 1 ? lastMessageRef : null} // set ref to the last message
        >
          <Message message={message} /> {/* render individual message */}
        </div>
      ))}
      {/* render loading skeletons if loading */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {/* render a placeholder if there are no messages and not loading */}
      {!loading && messages.length === 0 && (
        <p className='text-center font-mono'>Start the conversation</p>
      )}
    </div>
  );
}

export default Messages;
