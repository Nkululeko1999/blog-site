import { checkEmailExists, registerUser } from "../queries/user/user.queries.js";
import { pool } from "../configurations/database/database_config.js";
import { errorHandler } from "../middleware/error/error.middleware.js";


export const userExists = async (req) => {

  const {username} = req.body;
  let userFound;

  try {
      const result = await pool.query(checkEmailExists, [username]);
      userFound = result.rows.length > 0 ? true : false;

    } catch (error) {
      console.error('Error checking user existence:', error.message);
    }

    return userFound;
  }

export const checkMissingInfo = (req) => {
  const {username, email, password} = req.body;
  let missingInfo;

  try {
    missingInfo = (!username || !email || !password) ? true : false;

  return missingInfo;

  } catch (error) {
    console.log(error.message); 
  }

  }

export const saveUserToDB = async (req, res, next) => {
  const {username, email, password, user_role, profile_pic, updated_at} = req.body;
  const defaultUserRole = user_role || "basic";

  try {
    await pool.query(registerUser, [username, email, password, defaultUserRole, profile_pic, updated_at]);

    errorHandler(res, next, true, 200, 'User Successfully created');

  } catch (error) {
    console.log(error.message);
    errorHandler(res, next, false, 500, 'Failed to Create User');
  }
}