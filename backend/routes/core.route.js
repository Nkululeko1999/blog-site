import express from "express";
import { createPost, deletePost, likePost, removePostLike } from "../controllers/core.controllers.js";

const core_router = express();

core_router.post('/create-post', createPost);
core_router.delete('/delete-post/:post_id', deletePost);
core_router.post('/like-post/:user_id/:post_id', likePost);
core_router.delete('/remove-like/:like_id/:user_id/:post_id', removePostLike);

export default core_router;