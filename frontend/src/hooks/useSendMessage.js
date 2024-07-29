import { useState } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessage = () => {
  // state to track loading status
  const [loading, setLoading] = useState(false);
  // destructure messages, setMessages, and selectedConversation from conversation state
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true); // set loading to true
    try {
      // send POST request to the messages endpoint with the message
      const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      const data = await res.json(); // parse response data
      if (data.error) throw new Error(data.error); // throw error if response contains error
      
      // add the new message to the list of messages
      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message); // show error message
    } finally {
      setLoading(false); // set loading to false
    }
  };

  return { sendMessage, loading }; // return sendMessage function and loading status
};

export default useSendMessage;
