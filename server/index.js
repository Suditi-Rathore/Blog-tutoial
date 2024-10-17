import express from 'express'
import { createServer } from 'http';
import dotenv from 'dotenv';
import { connectToDatabase } from './utils/database/index.js';

const app = express();
dotenv.config();
connectToDatabase();
const httpServer = createServer(app);


app.get('/',(req,res)=>{
    res.send("Server Side Blog Tutorial");
})

// app.use('/',router);


httpServer
 .listen(process.env.PORT,()=>{
    console.log("Server Connected at port: ",process.env.PORT);
 })
 .on("error",(error)=>{
    console.log("Error starting the server: ",error);
 })

