import { userExists, checkMissingInfo, saveUserToDB } from "../services/auth.services.js";
import { errorHandler } from "../middleware/error/error.middleware.js";

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

