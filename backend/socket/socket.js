import { Server } from "socket.io";
import http from 'http';
import express from 'express';

// Create a new Express application
const app = express();

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Create a new Socket.IO server and configure CORS settings
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"], // Allow requests from this origin
        methods: ["GET", "POST"] // Allow these HTTP methods
    }
});

// Function to get the socket ID of a receiver based on their user ID
export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

// Object to store the mapping of user IDs to socket IDs
const userSocketMap = {}; // { userId: socketId }

// Event listener for new socket connections
io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    // Get the user ID from the socket handshake query
    const userId = socket.handshake.query.userId;

    // If the user ID is defined, store the socket ID in the userSocketMap
    if (userId != "undefined") {
        userSocketMap[userId] = socket.id;

        // Emit an event to update the list of online users
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    } else {
        console.log("userId is undefined or invalid");
    }

    // Event listener for socket disconnections
    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);

        // Remove the user ID from the userSocketMap
        delete userSocketMap[userId];

        // Emit an event to update the list of online users
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

// Export the Express app, Socket.IO instance, and HTTP server for use in other parts of the application
export { app, io, server };
