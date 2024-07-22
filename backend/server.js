import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";

import connecttoMongoDB from "../db/connecttoMongoDB.js"
import { app, server } from './socket/socket.js'
const PORT = process.env.PORT || 5000;
 
dotenv.config();

app.use(express.json()); // parse reqs from json payload
app.use(cookieParser()); // retreiving cookies for middleware

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

//  app.get("/", (req, res) => {
//     // root route http://localhost:5174/
//     res.send("Hello world!!");
//  });

//updated to socket serever
 server.listen(PORT, () => {
    connecttoMongoDB();
    console.log(`Server running on port ${PORT}`)
 });