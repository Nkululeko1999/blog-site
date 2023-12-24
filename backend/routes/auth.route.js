import express from "express";
import { login, register } from "../controllers/auth.controllers.js";

const auth_router = express();

auth_router.post('/register', register);
auth_router.post('/login', login);

export default auth_router;