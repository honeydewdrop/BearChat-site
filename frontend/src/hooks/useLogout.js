import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
    // state to track loading status
    const [loading, setLoading] = useState(false);
    // destructure setAuthUser function from auth context
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true); // set loading to true
        try {
            // send POST request to logout endpoint
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            const data = await res.json(); // parse response data
            if (data.error) {
                throw new Error(data.error); // throw error if response contains error
            }

            // remove user data from local storage
            localStorage.removeItem("chat-user");
            // clear user data from auth context
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message); // show error message
        } finally {
            setLoading(false); // set loading to false
        }
    };

    return { loading, logout }; // return loading status and logout function
};

export default useLogout;
