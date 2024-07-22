import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username, password) => {
    console.log("Username:", username);
    console.log("Password:", password);
    const success = handleInputErrors(username, password);
    if (!success) return;
    setLoading(true)
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      // Local storage
      localStorage.setItem("chat-user", JSON.stringify(data));
      // Context
      setAuthUser(data);

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;

function handleInputErrors(username, password) {
  console.log("Handle Errors - Username:", username);
  console.log("Handle Errors - Password:", password);
  if (!username || !password) {
    toast.error('Please fill in all fields.');
    return false;
  }

  return true;
}