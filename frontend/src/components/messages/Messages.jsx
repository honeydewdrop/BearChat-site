import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import Message from './Message.jsx';
import MessageSkeleton from '../skeletons/messageSkeleton.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message, index) => (
        <div 
          key={message._id} 
          ref={index === messages.length - 1 ? lastMessageRef : null}
        >
          <Message message={message} />
        </div>
      ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)} 
      {!loading && messages.length === 0 && ( // if no messages yet show this
        <p className='text-center font-mono'>Start the conversation</p>
      )}
    </div>
  );
}

export default Messages;
