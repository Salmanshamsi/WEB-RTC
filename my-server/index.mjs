import express from "express";
import bodyParser from "body-parser";
import { Server } from "socket.io";

const app = express();
const io = new Server({
  cors: true,
});


app.use(bodyParser.json());
const emailToSocketMapping = new Map();

io.on("connection", (socket) => {
  console.log("User connected: ", socket.id);

  socket.on("join-room", (data) => {
    const { emailId, roomId } = data;
    console.log(`User ${emailId} joined room ${roomId}`);
    socket.join(roomId);
    socket.broadcast.to(roomId).emit("user-joined", { emailId });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
  });
});

app.listen(8000, () => console.log("HTTP server running at PORT : 8000"));
io.listen(8001);
