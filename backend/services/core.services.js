import { pool } from "../configurations/database/database_config.js";
import { errorHandler } from "../middleware/error/error.middleware.js";
import { createPostQuery, deletePostQuery, getPostByIdQuery, likePostQuery, removeLikeQuery } from "../queries/posts/core.queries.js";

export const newPostService = async (req, res, next) => {
    const { user_id, title, content, post_img } = req.body;

    try {
        await pool.query(createPostQuery, [user_id, title, content, post_img]);
        errorHandler(res, next, true, 200, 'Post Successfully created');
    } catch (error) {
        errorHandler(res, next, false, 500, 'Internal Server Error');
    }
}

export const getPostById = async (post_id) => {
    let postFound;
    try {
        const result = await pool.query(getPostByIdQuery, [post_id]);
        postFound = result.rows[0]? true : false;
        // console.log('Post Found:', JSON.stringify(postFound, null, 2));

        return postFound;
    } catch (error) {
        console.log(error.message);
    }
};


export const deletePostService = async (post_id) => {
    let result;
    try {
        result = (await pool.query(deletePostQuery, [post_id]))? true: false;
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Result of Delete Post: ${result}`);
    return result;
}

export const likePostService = async (req) => {
    const {user_id, post_id} = req.params;
    let likedPost;
    try {
        likedPost = (await pool.query(likePostQuery, [user_id, post_id])) ? true : false;
    } catch (error) {
        console.log(error.message);
    }

    return likedPost;
}

export const removePostLikeService = async (req) => {
    const {like_id, user_id, post_id} = req.params;
    let result;
    try {
        result = (await pool.query(removeLikeQuery, [like_id, user_id, post_id]))? true: false;
    } catch (error) {
        console.log(error.message);
    }
    console.log(`Result of Delete Post: ${result}`);
    return result;
}