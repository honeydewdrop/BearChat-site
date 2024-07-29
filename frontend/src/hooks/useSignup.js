import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    // state to track loading status
    const [loading, setLoading] = useState(false);
    // destructure setAuthUser from auth context
    const { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, confirmedPass, gender }) => {
        // validate input fields
        const success = handleInputErrors({ fullName, username, password, confirmedPass, gender });
        if (!success) return; // return if validation fails
        
        setLoading(true); // set loading to true
        try {
            // send POST request to signup endpoint with user data
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmedPass, gender })
            });

            const data = await res.json(); // parse response data
            if (data.error) {
                throw new Error(data.error); // throw error if response contains error
            }

            // save user data to local storage
            localStorage.setItem("chat-user", JSON.stringify(data));
            // update auth context with user data
            setAuthUser(data);

        } catch (error) {
            toast.error(error.message); // show error message
        } finally {
            setLoading(false); // set loading to false
        }
    };

    return { loading, signup }; // return signup function and loading status
};

export default useSignup;

// validate input fields for signup
function handleInputErrors({ fullName, username, password, confirmedPass, gender }) {
    // check if any field is empty
    if (!fullName || !username || !password || !confirmedPass || !gender) {
        toast.error('Please fill in all fields.');
        return false;
    }
    // check if passwords match
    if (password !== confirmedPass) {
        toast.error('Passwords do not match.');
        return false;
    }
    // check if password length is at least 6 characters
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long.');
        return false;
    }

    return true;
}
