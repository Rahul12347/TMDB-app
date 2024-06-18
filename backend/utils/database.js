import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config({
    path:"../.env"
})

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;