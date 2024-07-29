import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import path from 'path';

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";

import connecttoMongoDB from "../db/connecttoMongoDB.js"
import { app, server } from './socket/socket.js'
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
 
dotenv.config();

app.use(express.json()); // parse reqs from json payload
app.use(cookieParser()); // retreiving cookies for middleware

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*", (req,res) => { // any route can render index.html

res.sendFile(path.join(__dirname,"frontend", "dist", "index.html"))
}
)

//updated to socket server

 server.listen(PORT, () => {

    connecttoMongoDB(); // accessibility to access DB info

    console.log(`Server running on port ${PORT}`); // print this to check if we made it
});