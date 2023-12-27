import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { pool } from "./configurations/database/database_config.js";
import auth_router from "./routes/auth.route.js";
import bodyParser from "body-parser";
import core_router from "./routes/core.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    allowedHeaders: 'Content-Type, Authorization'
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());

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
app.use('/api', core_router);