export const createPostQuery = `INSERT INTO posts (user_id, title, content, post_img, created_at) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *`;
export const getPostByIdQuery = `SELECT * FROM posts WHERE post_id = $1`;
export const deletePostQuery = `DELETE FROM posts WHERE post_id = $1`;
export const likePostQuery = `INSERT INTO likes (user_id, post_id, created_at) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *`;
export const removeLikeQuery = `DELETE FROM likes WHERE like_id = $1 AND user_id = $2 AND post_id = $3`;
export const likeCountQuery = `SELECT COUNT(*) AS like_count FROM likes WHERE post_id = $1`;
export const createCommentQuery = `INSERT INTO comments (user_id, post_id, comment, created_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP) RETURNING *`;
export const commentCountQuery = `SELECT COUNT(*) AS comment_count FROM comments WHERE comment_id >= $1`;