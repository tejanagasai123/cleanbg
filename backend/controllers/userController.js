import { Webhook } from "svix"
import userModel from "../models/userModel.js";

const clerkwebhooks = async (req,res)=>
{
   try {
    const webhook = new Webhook(process.env.CLERKSIGNIN_SECRATE);
    await webhook.verify(JSON.stringify(req.body),{
        "svix-id":req.headers['svix-id'],
         "svix-timestamp":req.headers["svix-timestamp"],
        "svix-signature":req.headers["svix-signature"]
    })

        const {data,type} = req.body;
        switch (type) {
            case "user.created":
                {
                const UserData=
                {
                 UserId:data.id,
                  Email:data.email_addresses[0].email_address,
                   FirstName:data.first_name,
                    LastName:data.last_name,
                    photo:data.image_url
                }
                await userModel.create(UserData);
                break;

                }
                 case "user.updated":
                {
                const UserData=
                {
                  Email:data.email_addresses[0].email_address,
                   FirstName:data.first_name,
                    LastName:data.last_name,
                    photo:data.image_url
                }
                await userModel.findOneAndUpdate({UserId:data.id},UserData);
                res.json({});
                break;

                }
                 case "user.deleted":
                {
                await userModel.findOneAndDelete({UserId:data.id});
                res.json({});
                break;

                }

                
        
            default:
                res.json({reason:"your request not accepted please check your request "})
                break;
        }
    
   } catch (error) {
console.log(error.message)
res.send({sucess:false,message:error.message})
   }
}
export default clerkwebhooks;