import mongoose from 'mongoose';

// Define the schema for users
const userSchema = new mongoose.Schema(
    {
        // Full name of the user
        fullName: {
            type: String, // Full name is a string
            required: true, // This field is required
        },
        // Unique username for the user
        username: {
            type: String, // Username is a string
            required: true, // This field is required
            unique: true // Username must be unique
        },
        // Password for the user account
        password: {
            type: String, // Password is a string
            required: true, // This field is required
            minlength: 8 // Minimum length of 8 characters
        },
        // Gender of the user
        gender: {
            type: String, // Gender is a string
            required: true, // This field is required
            enum: ["male", "female", "other"] // Only allowed values are "male", "female", and "other"
        },
        // URL of the profile picture
        profilepic: {
            type: String, // Profile picture URL is a string
            default: "", // Default value is an empty string
        }
    }, 
    { 
        // Options to add createdAt and updatedAt fields automatically
        timestamps: true 
    }
);

// Create the User model using the schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
export default User;
