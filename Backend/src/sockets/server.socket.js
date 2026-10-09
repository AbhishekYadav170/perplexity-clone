import { Server } from "socket.io";

let io;

export function initSocket(httpServer) {
  io = new Server(httpServer, {
    // cors: {
    //     origin: process.env.CLIENT_URL || "http://localhost:5173",
    //     credentials: true,
    // }

    cors: {
      origin: [
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://perplexity-clone-psi-six.vercel.app",
      ],
      credentials: true,
    },
  });

  console.log("socket.io server is RUNNING");

  io.on("connection", (socket) => {
    console.log("A user connected:" + socket.id);
  });
}

export function getIO() {
  if (!io) {
    throw new Error("Socket.io not initialized");
  }

  return io;
}
