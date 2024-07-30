import { createContext, useState, useEffect, useContext } from "react";
import useAuthContext from "./AuthContext";
import io from "socket.io-client";

// Create a context for socket connections
const SocketContext = createContext();

// Custom hook to use the SocketContext
export const useSocketContext = () => {
    return useContext(SocketContext);
}

// Provider component for SocketContext
export const SocketContextProvider = ({ children }) => {
    // State to hold the socket instance
    const [socket, setSocket] = useState(null);
    // State to keep track of online users
    const [onlineUsers, setOnlineUsers] = useState([]);
    // Access the authenticated user from AuthContext
    const { authUser } = useAuthContext();

    useEffect(() => {
        // Check if authUser exists before creating a socket connection
        if (authUser) {
            // Create a new socket connection
            const newSocket = io("https://bearchat-site.onrender.com/login", {
                query: {
                    userId: authUser._id,
                }
            });

            setSocket(newSocket);

            // Listen for updates on online users
            newSocket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            // Cleanup function to close the socket connection when the component unmounts
            return () => {
                newSocket.close();
                setSocket(null);
            };
        } else {
            // If authUser is not available, close the existing socket connection
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]); // Dependency array to run effect when authUser changes

    return (
        // Provide the socket and onlineUsers states to the context consumers
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};
