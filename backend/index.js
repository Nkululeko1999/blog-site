import express from "express";
import dotenv from "dotenv";
import { pool } from "./configurations/database/database_config.js";
import auth_router from "./routes/auth.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

const connectDB = async () => {
    try {
        await pool.connect();
        console.log("Successfully connected to database");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.log(error.message);
    }
}

connectDB();

app.use('/api', auth_router);