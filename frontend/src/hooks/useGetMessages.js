import { useEffect, useState } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useGetMessages = () => {
  // state to manage loading status
  const [loading, setLoading] = useState(false);
  // destructure messages and setter function from useConversation hook
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    // asynchronous function to fetch messages for the selected conversation
    const getMessages = async () => {
      setLoading(true); // set loading to true before starting fetch
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`); // make get request with selected conversation id
        const data = await res.json(); // parse response as json
        if (data.error) {
          throw new Error(data.error); // throw error if there's an error in the response
        }
        setMessages(data); // set messages state with fetched data
      } catch (error) {
        toast.error(error.message); // display error message as toast notification
      } finally {
        setLoading(false); // set loading to false after fetch is complete
      }
    };

    // call getMessages if there's a selected conversation
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]); // effect depends on selectedConversation id and setMessages function

  return { messages, loading }; // return messages and loading states
}

export default useGetMessages;
