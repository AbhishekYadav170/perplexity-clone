import { io } from "socket.io-client";

export const initializeSocketConnection = () => {
    const socket = io("https://perplexity-clone-pvgw.onrender.com", {
        withCredentials: true,
    })
    
    socket.on("connect", () => {
        console.log("Connected to Socket.IO server")
    })
}