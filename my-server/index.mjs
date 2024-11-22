import express from "express";
import bodyParser from "body-parser";
import {Server} from "socket.io";

const io = new Server();
const app = express();

app.use(bodyParser.json());

io.on("connection",()=>{});

app.listen(8000, () => console.log("HTTP server running at PORT : 8000"));
io.listen(8001);



