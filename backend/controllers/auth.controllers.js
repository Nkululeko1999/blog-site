import { userExists, checkMissingInfo, saveUserToDB, getUserByEmailService } from "../services/auth.services.js";
import { errorHandler } from "../middleware/error/error.middleware.js";
import bcryptjs from "bcryptjs";

export const register = async (req, res, next) => {
  const userFound = await userExists(req);
  const missingInfo = await checkMissingInfo(req);

  try {
    if(userFound === true){
      errorHandler(res, next, false, 409, 'User Already Exists');
    }
    else{
      if(missingInfo === true){
        errorHandler(res, next, false, 422, 'Required Information Missing');
      }else{
        await saveUserToDB(req, res, next);
      }
    }
  } catch (error) {
    errorHandler(res, next, false, 500, 'Internal Server Error');
  } 
}

export const login = async (req, res, next) => {
  const userFound = await userExists(req);
  const missingInfo = await checkMissingInfo(req);
  const {password} = req.body;

  try {
    if(missingInfo === true){
      errorHandler(res, next, false, 422, 'Required Information Missing');
    }
    else{
      if(userFound === true){
        const user = await getUserByEmailService(req, res, next);
        const savedPassword = user.password; 
        
        const passwordsMatch = bcryptjs.compareSync(password, savedPassword);

        if (passwordsMatch) {
            errorHandler(res, next, true, 200, 'Login Successful');
        } else {
            errorHandler(res, next, true, 200, 'Login Failed. Wrong login Details. Try to reset password');
        }
      }else{
        errorHandler(res, next, false, 409, 'User Not Found. Please register for an account');
      }
    }
  } catch (error) {
    errorHandler(res, next, false, 500, 'Internal Server Error');
  }
} 