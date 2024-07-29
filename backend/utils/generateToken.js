import jwt from "jsonwebtoken";

// Function to generate a JWT token and set it as an HTTP-only cookie
const generateTokenandSetCookie = (userId, res) => {
    // Generate a JWT token with the userId as the payload
    // The token expires in 15 days
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    // Set the JWT token as a cookie in the response
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // Cookie expiration time in milliseconds (15 days)
        httpOnly: true, // The cookie is accessible only by the web server
        sameSite: "strict", // The cookie will only be sent in a first-party context
        secure: process.env.NODE_ENV !== "development" // The cookie will be sent only over HTTPS in production
    });
};

// Export the function for use in other parts of the application
export default generateTokenandSetCookie;
