// export const getUsers = 'SELECT * FROM users';
// export const getUserById = `SELECT * FROM users WHERE id = $1`;
export const getUserByEmail = 'SELECT * FROM users WHERE email = $1'; 
export const checkEmailExists = 'SELECT * FROM users WHERE email = $1';
export const saveUser = 'INSERT INTO users (username, email, password, user_role, profile_pic, created_at, updated_at, first_name, last_name) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, $6, $7, $8) RETURNING *';
export const getUserByToken = 'SELECT * FROM users WHERE reset_token = $1 AND reset_token_exp > $2';
export const updatePasswordQuery = 'UPDATE users SET password = $1, reset_token = NULL, reset_token_exp = NULL WHERE reset_token = $2';
export const updateTokenAndExpDate = 'UPDATE users SET reset_token =$1, reset_token_exp = $2 WHERE email = $3';