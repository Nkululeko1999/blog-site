import { checkEmailExists, getUserByEmail, registerUser } from "../queries/user/user.queries.js";
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
    await pool.query(registerUser, [username, email, hashedPassword, defaultUserRole, profile_pic, updated_at]);

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

  return user.rows[0];
}