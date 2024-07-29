import { create } from 'zustand';

// create a Zustand store for managing conversation state
const useConversation = create((set) => ({
    // state for the currently selected conversation
    selectedConversation: null,

    // action to update the selected conversation
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),

    // state for storing messages of the selected conversation
    messages: [],

    // action to update the messages
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;
