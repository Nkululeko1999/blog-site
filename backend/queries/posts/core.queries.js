export const createPostQuery = `INSERT INTO posts (user_id, title, content, post_img, created_at) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP) RETURNING *`;
export const getPostByIdQuery = `SELECT * FROM posts WHERE post_id = $1`;
export const deletePostQuery = `DELETE FROM posts WHERE post_id = $1`;