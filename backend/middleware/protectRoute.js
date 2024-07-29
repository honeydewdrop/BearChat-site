import jwt from "jsonwebtoken"
import User from "../models/user.model.js";
const protectRoute = async (req, res, next) => {
    try {
        // Get the JWT token from cookies
        const token = req.cookies.jwt;

        // If no token is found, return a 401 Unauthorized response
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - no token provided" });
        }

        // Verify the token using the JWT secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // If the token is invalid or verification fails, return a 401 Unauthorized response
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - invalid token" });
        }

        // Find the user by the ID encoded in the token, excluding the password field
        const user = await User.findById(decoded.userId).select("-password");

        // If no user is found, return a 404 Not Found response
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Attach the user object to the request object for use in subsequent middleware or route handlers
        req.user = user;

        // Proceed to the next middleware or route handler
        next();

    } catch (error) {
        // Log any errors and return a 500 Internal Server Error response
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export default protectRoute;