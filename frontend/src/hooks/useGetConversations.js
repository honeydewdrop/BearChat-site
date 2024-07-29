import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useGetConversations = () => {
  // state to manage loading status
  const [loading, setLoading] = useState(false);
  // state to store conversations data
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // asynchronous function to fetch conversations
    const getConversations = async () => {
      setLoading(true); // set loading to true before starting fetch
      try {
        const res = await fetch('/api/users'); // make a get request to fetch conversations
        const data = await res.json(); // parse response as json
        if (data.error) {
          throw new Error(data.error); // throw error if there's an error in the response
        }
        setConversations(data); // set conversations state with fetched data
      } catch (error) {
        toast.error(error.message); // display error message as toast notification
      } finally {
        setLoading(false); // set loading to false after fetch is complete
      }
    };
    
    getConversations(); // call the function to fetch conversations
  }, []); // empty dependency array means this effect runs once on mount

  return { loading, conversations }; // return loading and conversations states
}

export default useGetConversations;
