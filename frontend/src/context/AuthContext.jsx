import { createContext, useContext, useState } from "react";

// Create a context for authentication
export const AuthContext = createContext();

// Custom hook to use the AuthContext
export const useAuthContext = () => {
    return useContext(AuthContext);
}

// Provider component for AuthContext
export const AuthContextProvider = ({ children }) => {
    // Initialize authUser state from localStorage or set to null if not available
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    // Provide the authUser and setAuthUser function to the context consumers
    return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
}

// Exporting the custom hook for usage in other components
export default useAuthContext;
