import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  // state to track loading status
  const [loading, setLoading] = useState(false);
  // destructure setAuthUser function from auth context
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    console.log("username:", username); // log username
    console.log("password:", password); // log password
    const success = handleInputErrors(username, password); // validate inputs
    if (!success) return; // exit if validation fails
    setLoading(true); // set loading to true

    try {
      // send POST request to login endpoint
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json(); // parse response data
      if (data.error) {
        throw new Error(data.error); // throw error if response contains error
      }

      // store user data in local storage
      localStorage.setItem("chat-user", JSON.stringify(data));
      // update auth context with user data
      setAuthUser(data);

    } catch (error) {
      toast.error(error.message); // show error message
    } finally {
      setLoading(false); // set loading to false
    }
  };

  return { loading, login }; // return loading status and login function
};

export default useLogin;

function handleInputErrors(username, password) {
  console.log("handle errors - username:", username); // log username for error handling
  console.log("handle errors - password:", password); // log password for error handling
  if (!username || !password) {
    toast.error('please fill in all fields.'); // show error if fields are empty
    return false; // return false to indicate failure
  }

  return true; // return true if no errors
}
