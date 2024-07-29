import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getMessages, sendMessage } from "../controllers/message.controller.js";

// Create a new Express router
const router = express.Router();

// Route to get messages for a specific conversation
// The protectRoute middleware ensures the user is authenticated before accessing this route
// Calls the getMessages controller function when a GET request is made to /:id
router.get("/:id", protectRoute, getMessages);

// Route to send a message in a specific conversation
// The protectRoute middleware ensures the user is authenticated before accessing this route
// Calls the sendMessage controller function when a POST request is made to /send/:id
router.post("/send/:id", protectRoute, sendMessage);

// Export the router for use in other parts of the application
export default router;
