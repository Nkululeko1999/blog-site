import express from "express";
import { comment, createPost, deletePost, likePost, numOfComment, numOfLikes, 
    removePostLike } from "../controllers/core.controllers.js";

const core_router = express();

core_router.post('/create-post', createPost);
core_router.delete('/delete-post/:post_id', deletePost);
core_router.post('/like-post/:user_id/:post_id', likePost);
core_router.delete('/remove-like/:like_id/:user_id/:post_id', removePostLike);
core_router.get('/number-likes/:post_id', numOfLikes);
core_router.post('/comment-post/:user_id/:post_id', comment);
core_router.get('/number-comments', numOfComment);

export default core_router;