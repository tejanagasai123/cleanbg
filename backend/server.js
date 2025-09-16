import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import connectDb from './config/mongodb.js';
await connectDb();
const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hi from server side :" + port);
})

app.listen(port,  () => {
   console.log("dotenv",process.env.MONGODB_URL)
    console.log("hi server connected");
})