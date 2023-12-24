import { errorHandler } from "../middleware/error/error.middleware.js"
import { deletePostService, getPostById, newPostService } from "../services/core.services.js";

export const createPost = async (req, res, next) => {
    try {
        await newPostService(req, res, next);
    } catch (error) {
        console.log(error.message);
        errorHandler(res, next, false, 500, 'Internal Server Error');
    }
} 

export const deletePost = async (req, res, next) => {
    const { post_id } = req.params;
    console.log(`Post Id: ${post_id}`);
    try {
        if(await getPostById(post_id)){
            await deletePostService(post_id);
            errorHandler(res, next, true, 200, 'Post Successfully Deleted');
        }
        else {
            errorHandler(res, next, false, 404, `No post of id ${post_id} found`);
        }

    } catch (error) {
        errorHandler(res, next, false, 500, 'Internal Server Error');
    }
}