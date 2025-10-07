import express from 'express';
import dotenv from "dotenv";
dotenv.config();

//app config
const port = process.env.PORT || 4000;
const app = express();
//databse config
import connectDb from './config/mongodb.js';
import UserRouter from './Routes/userRoutes.js';
await connectDb();
//built in middlewares
app.use(express.json());
//API ROUTES END POINTS CREATING 
app.get('/', (req, res) => {
    res.send("hi from server side :" + port);
})
app.use('/api/user',UserRouter)
app.listen(port,  () => {
   console.log("from server.js file mongodb connected")
    console.log("hi server connected");
})