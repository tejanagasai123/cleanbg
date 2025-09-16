import mongoose from "mongoose";
const userschema = new mongoose.Schema({

    UserId:{type:String,require:true , unique:true},
    Email:{type:String,requrie:true,unique:true},
    FirstName:{type:String,require:true,unique:true},
    LastName:{type:String,require:true,unique:true},
    USerCredits:{type:NUmber , require:true,unique:true}
})

const userModel = mongoose.models.user || mongoose.model('user',userSchema);
export default userModel;