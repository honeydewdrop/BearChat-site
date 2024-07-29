import mongoose from "mongoose";

// Define the schema for messages
const messageSchema = new mongoose.Schema(
    {
        // ID of the user sending the message, referencing the User model
        senderId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to an ObjectId from the User collection
            ref: "User", // Reference to the User model
            required: true // This field is required
        },
        // ID of the user receiving the message, referencing the User model
        receiverId: {
            type: mongoose.Schema.Types.ObjectId, // Reference to an ObjectId from the User collection
            ref: "User", // Reference to the User model
            required: true // This field is required
        },
        // The message content
        message: {
            type: String, // The message is a string
            required: true // This field is required
        }
        // Note: createdAt and updatedAt fields will be added automatically by mongoose due to the timestamps option
    }, 
    { 
        // Options to add createdAt and updatedAt fields automatically
        timestamps: true 
    }
);

// Create the Message model using the schema
const Message = mongoose.model("Message", messageSchema);

// Export the Message model for use in other parts of app
export default Message;
