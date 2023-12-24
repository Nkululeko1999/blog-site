// export const getUsers = 'SELECT * FROM users';
// export const getUserById = `SELECT * FROM users WHERE id = $1`;
export const getUserByEmail = 'SELECT * FROM users WHERE email = $1'; 
export const checkEmailExists = 'SELECT * FROM users WHERE email = $1';
export const registerUser = 'INSERT INTO users (username, email, password, user_role, profile_pic, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, $6) RETURNING *';