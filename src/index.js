import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
});
connectDB();















/*
//  this is also a way to connect with database but we are using async await method to  database

import express from "express";
const app = express();

(async()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        app.on("error", (error) => {
            console.error("Error connecting to MongoDB:", error);
                throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})()
*/