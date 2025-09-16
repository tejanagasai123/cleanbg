import mongoose from "mongoose";
const connectDb = async () => {
        await mongoose.connect(process.env.MONGODB_URL).then(()=> console.log("dotenv",process.env.MONGODB_URL)).catch((error)=>{ console.log(`error occured at  connection of database: ${error.message}`);
        process.exit(1);}
        )
   
}
export default connectDb

