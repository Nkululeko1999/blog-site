import express from "express";
import dotenv from "dotenv";
import { client } from "./configurations/database/database_config.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

const connectDB = async () => {
    try {
        await client.connect()
        console.log("Successfully connected to database");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error.message);
    }
}

connectDB();