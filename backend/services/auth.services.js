import { checkEmailExists, getUserByEmail, getUserByToken, saveUser, updatePasswordQuery, updateTokenAndExpDate } from "../queries/user/user.queries.js";
import { pool } from "../configurations/database/database_config.js";
import { errorHandler } from "../middleware/error/error.middleware.js";
import bcryptjs from "bcryptjs";


export const userExists = async (req) => {

  const {email} = req.body;
  let userFound;

  const result = await pool.query(checkEmailExists, [email]);
  userFound = result.rows.length > 0 ? true : false;

  return userFound;
  }

export const checkMissingInfo = (req) => {
  const {first_name, last_name, email, password, confirm_password} = req.body;
  let missingInfo;

  missingInfo = (!email || !password || !first_name || !last_name || !confirm_password) ? true : false;

  return missingInfo;
  }

export const saveUserToDB = async (req, res) => {
  const {first_name, last_name, username, email, password, user_role, profile_pic, updated_at} = req.body;
  const defaultUserRole = user_role || "basic";
  const hashedPassword = bcryptjs.hashSync(password, 12);

  try {
    await pool.query(saveUser, [username, email, hashedPassword, defaultUserRole, profile_pic, updated_at, first_name, last_name]);

    errorHandler(res, true, 200, 'User Successfully created');

  } catch (error) {
    console.log(error.message);
    errorHandler(res, false, 500, 'Failed to Create User');
  }
}

export const getUserByEmailService = async (req, res) => {
  const {email} = req.body;
  let user;

  try {
     user = await pool.query(getUserByEmail, [email]);
  } catch (error) {
    console.log(error.message);
    errorHandler(res, false, 500, 'Failed to Get User By Email');
  }

  // console.log(user.rows[0]);
  return user.rows[0];
}

export const getUserByTokenService = async (req, res) => {
  const { token } = req.params;
  let user;

  try {
     user = await pool.query(getUserByToken, [token,  new Date()]);
  } catch (error) {
    console.log(error.message);
    errorHandler(res, false, 500, 'Failed to Get User By Token');
  }

  console.log(user.rows[0]);
  return user.rows[0];
}

export const updateTokenAndExpDateService = async (req, res, reset_token, reset_token_exp) => {
  const { email } = req.body;
  try {
    await pool.query(updateTokenAndExpDate, [reset_token, reset_token_exp, email]);
    errorHandler(res, true, 200, 'User Successfully Saved and Token Generated');
} catch (error) {
 console.log(error.message);
 errorHandler(res, false, 500, 'Internal Server Error');
}
}

export const updatePasswordService = async (password, token) => {
  try {
      await pool.query(updatePasswordQuery, [password, token]);
 } catch (error) {
   console.log(error.message);
   errorHandler(res, false, 500, 'Internal Server Error');
 }
}