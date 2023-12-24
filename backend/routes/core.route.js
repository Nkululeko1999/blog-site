import express from "express";
import { createPost, deletePost } from "../controllers/core.controllers.js";

const core_router = express();

core_router.post('/create-post', createPost);
core_router.delete('/delete-post/:post_id', deletePost);

export default core_router;