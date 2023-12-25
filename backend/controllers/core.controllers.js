import { errorHandler } from "../middleware/error/error.middleware.js"
import { deletePostService, getPostById, likePostService, newPostService, numOfLikeService, removePostLikeService } from "../services/core.services.js";

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

export const likePost = async (req, res, next) => {
    try {
        (await likePostService(req))? errorHandler(res, next, true, 200, 'Liked Post') :
        errorHandler(res, next, 400, `Could not like Post`);
    } catch (error) {
        console.log(error.message);
        errorHandler(res, next, false, 500, 'Internal Server Error');
    }
}

export const removePostLike = async (req, res, next) => {
    try {
        (await removePostLikeService(req))? errorHandler(res, next, true, 200, 'Liked Removed') :
        errorHandler(res, next, 400, `Could not remove like`);
    } catch (error) {
        console.log(error.message);
        errorHandler(res, next, false, 500, 'Internal Server Error');
    }
}

export const numOfLikes = async (req, res, next) => {
    try {
        const result = await numOfLikeService(req);
        const likeCount = result.rows[0].like_count;
        errorHandler(res, next, true, 200, `${likeCount}`);
    } catch (error) {
        console.log(error.message);
        errorHandler(res, next, false, 500, 'Internal Server Error');
    }
}