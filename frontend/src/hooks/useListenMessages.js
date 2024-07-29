import React, { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import notifsound from "../assets/sounds/notifsound.mp3";

const useListenMessages = () => {
    // destructure socket from useSocketContext
    const { socket } = useSocketContext();
    // destructure messages and setter function from useConversation
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        // listen for "newMessage" event from socket
        socket?.on("newMessage", (newMessage) => {
            const sound = new Audio(notifsound); // create new audio instance for notification sound
            sound.play(); // play notification sound
            setMessages([...messages, newMessage]); // update messages state with new message
        });

        // cleanup function to remove the event listener when the component unmounts
        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]); // dependencies: socket, setMessages, messages

};

export default useListenMessages;
