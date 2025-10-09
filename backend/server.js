import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

//app config
const port = process.env.PORT || 4000;
const app = express();
import connectDb from './config/mongodb.js';

await connectDb();

//databse config
import UserRouter from './Routes/userRoutes.js';
//built in middlewares
app.use(express.json());
app.use(cors());
//API ROUTES END POINTS CREATING 
app.get('/', (req, res) => {
    res.send("hi from server side :" + port);
})
app.use('/api/user',UserRouter)
app.listen(port,  () => {
   console.log("from server.js file mongodb connected")
    console.log("hi server connected");
    
})