import { checkEmailExists, getUserByEmail, getUserByToken, saveUser, updatePasswordQuery, updateTokenAndExpDate } from "../queries/user/user.queries.js";
import { pool } from "../configurations/database/database_config.js";
import { errorHandler } from "../middleware/error/error.middleware.js";
import bcryptjs from "bcryptjs";


export const userExists = async (req) => {

  const {email} = req.body;
  let userFound;

  try {
      const result = await pool.query(checkEmailExists, [email]);
      userFound = result.rows.length > 0 ? true : false;

    } catch (error) {
      console.error('Error checking user existence:', error.message);
    }

    return userFound;
  }

export const checkMissingInfo = (req) => {
  const {email, password} = req.body;
  let missingInfo;

  try {
    missingInfo = (!email || !password) ? true : false;

  return missingInfo;

  } catch (error) {
    console.log(error.message); 
  }

  }

export const saveUserToDB = async (req, res, next) => {
  const {username, email, password, user_role, profile_pic, updated_at} = req.body;
  const defaultUserRole = user_role || "basic";
  const hashedPassword = bcryptjs.hashSync(password, 12);

  try {
    await pool.query(saveUser, [username, email, hashedPassword, defaultUserRole, profile_pic, updated_at]);

    errorHandler(res, next, true, 200, 'User Successfully created');

  } catch (error) {
    console.log(error.message);
    errorHandler(res, next, false, 500, 'Failed to Create User');
  }
}

export const getUserByEmailService = async (req, res, next) => {
  const {email} = req.body;
  let user;

  try {
     user = await pool.query(getUserByEmail, [email]);
  } catch (error) {
    console.log(error.message);
    errorHandler(res, next, false, 500, 'Failed to Get User By Email');
  }

  // console.log(user.rows[0]);
  return user.rows[0];
}

export const getUserByTokenService = async (req, res, next) => {
  const { token } = req.params;
  let user;

  try {
     user = await pool.query(getUserByToken, [token,  new Date()]);
  } catch (error) {
    console.log(error.message);
    errorHandler(res, next, false, 500, 'Failed to Get User By Token');
  }

  console.log(user.rows[0]);
  return user.rows[0];
}

export const updateTokenAndExpDateService = async (req, res, next, reset_token, reset_token_exp) => {
  const { email } = req.body;
  try {
    await pool.query(updateTokenAndExpDate, [reset_token, reset_token_exp, email]);
    errorHandler(res, next, true, 200, 'User Successfully Saved and Token Generated');
} catch (error) {
 console.log(error.message);
 errorHandler(res, next, false, 500, 'Internal Server Error');
}
}

export const updatePasswordService = async (password, token, next) => {
  try {
      await pool.query(updatePasswordQuery, [password, token]);
 } catch (error) {
   console.log(error.message);
   errorHandler(res, next, false, 500, 'Internal Server Error');
 }
}