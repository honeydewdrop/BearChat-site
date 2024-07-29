import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/users.controllers.js";

// Create a new Express router
const router = express.Router();

// Route to get users for the sidebar
// The protectRoute middleware ensures the user is authenticated before accessing this route
// Calls the getUsersForSidebar controller function when a GET request is made to the root path (/)
router.get("/", protectRoute, getUsersForSidebar);

// Export the router for use in other parts of the application
export default router;
