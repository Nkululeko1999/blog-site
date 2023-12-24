import express from "express";
import { login, register, resetPassword, resetPasswordWithToken } from "../controllers/auth.controllers.js";

const auth_router = express();

auth_router.post('/register', register);
auth_router.post('/login', login);
auth_router.post('/reset-password', resetPassword);
auth_router.post('/reset-password/:token', resetPasswordWithToken);

export default auth_router;