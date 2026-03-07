import mongoose from "mongoose";
import { DB_name } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host} \n`);
    } 
    catch (error) {
        console.log("Error WHILE CONNECTING TOMongoDB ,CHECK AGAIN:", error);
        process.exit(1); // Exit the process with an error code
    }
}

export default connectDB;