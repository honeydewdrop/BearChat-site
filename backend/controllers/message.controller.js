import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js"; // Ensure `io` is imported

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body; // messagne is assigned as the request body
    const { id: receiverId } = req.params; // id is set to request params and renamed into receiverId
    const senderId = req.user._id;

    // Find or create a conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId], // if there isn't already a convo, create one with the participants being the sender and receiver
      });
    }

    // Create and save the new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message, 
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    } // add the new message into the message array

    await Promise.all([conversation.save(), newMessage.save()]);

    // Emit the new message via socket.io
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params; // id set to req params then renamed to userTochatId
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); // get the conversation with the correct sender and receiverId and add the messages you get into it

    if (!conversation) return res.status(200).json([]); // if no conversation then there is nothing thatll come up
    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
