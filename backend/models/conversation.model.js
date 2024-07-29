import mongoose from "mongoose";

// Define the schema for conversations
const convoSchema = new mongoose.Schema(
    {
        // Array of participant IDs, referencing the User model
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User' // Reference to the User model
            }
        ],
        // Array of message IDs, referencing the Message model
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Message', // Reference to the Message model
                default: [] // Default value is an empty array
            }
        ]
    },
    { 
        // Options to add createdAt and updatedAt fields automatically
        timestamps: true 
    }
);

// Create the Conversation model using the schema
const Conversation = mongoose.model("Conversation", convoSchema);

// Export the Conversation model for use in other parts of the application
export default Conversation;
