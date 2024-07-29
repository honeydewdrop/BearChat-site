import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";

// Create a new Express router
const router = express.Router();

// Route to handle user signup
// Calls the signup controller function when a POST request is made to /signup
router.post("/signup", signup);

// Route to handle user login
// Calls the login controller function when a POST request is made to /login
router.post("/login", login);

// Route to handle user logout
// Calls the logout controller function when a POST request is made to /logout
router.post("/logout", logout);

// Export the router for use in other parts of the application
export default router;
