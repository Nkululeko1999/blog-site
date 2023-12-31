import { userExists, checkMissingInfo, saveUserToDB, getUserByEmailService, getUserByTokenService, updatePasswordService, updateTokenAndExpDateService } from "../services/auth.services.js";
import { errorHandler } from "../middleware/error/error.middleware.js";
import bcryptjs from "bcryptjs";
import "dotenv/config";
import { resetPasswordLink, sendEmail, signupEmailTemplate } from "./email.controllers.js";
import crypto from "crypto";


export const register = async (req, res) => {
  const userFound = await userExists(req);
  const missingInfo = await checkMissingInfo(req);

  try {
    if(userFound === true){
      errorHandler(res, false, 409, 'User Already Exists');
    }
    else{
      if(missingInfo === true){
        errorHandler(res, false, 422, 'Required Information Missing');
      }else{

        const emailTemplate = await signupEmailTemplate();
        const emailSubject = 'Travel Blog Signup';
        await saveUserToDB(req, res);
        await sendEmail(req, emailTemplate, emailSubject);
        
      }
    }
  } catch (error) {
    errorHandler(res, false, 500, 'Internal Server Error');
  } 
}

export const login = async (req, res) => {
  const userFound = await userExists(req);
  const missingInfo = await checkMissingInfo(req);
  const {password} = req.body;

  try {
    if(missingInfo === true){
      errorHandler(res, false, 422, 'Required Information Missing');
    }
    else{
      if(userFound === true){
        const user = await getUserByEmailService(req, res);
        const savedPassword = user.password;       
        const passwordsMatch = bcryptjs.compareSync(password, savedPassword);

        errorHandler(res, passwordsMatch,
          passwordsMatch ? 200 : 409,
          passwordsMatch ? 'Login Successful' : 'Login Failed. Wrong login Details. Try to reset password'
        );
        
      }else{
        errorHandler(res, false, 409, 'User Not Found. Please register for an account');
      }
    }
  } catch (error) {
    errorHandler(res, false, 500, 'Internal Server Error');
  }
} 

export const generateToken = () => {
  return crypto.randomBytes(20).toString('hex');
}

export const resetPassword = async (req, res) => {
  try {
    const user = await getUserByEmailService(req);
    if(!user){
      errorHandler(res, false, 404, 'User Nof Found');
    }

    const resetToken = generateToken();
    const reset_token_expiry = new Date(Date.now() + 10 * 60 * 1000);
    const resetPasswordUrl = process.env.RESET_PASS_URL;

    await updateTokenAndExpDateService(req, res, resetToken, reset_token_expiry);

    const resetLink = `${resetPasswordUrl}/${resetToken}`;

    const emailTemplate = await resetPasswordLink(resetLink);
    const emailSubject = 'Reset Password';
    await sendEmail(req, emailTemplate, emailSubject);

  } catch (error) {
    errorHandler(res, false, 500, 'Internal Server Error');
  }

}

export const resetPasswordWithToken = async (req, res) => { 
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const user = getUserByTokenService(req, res);
    if (!user) {
      errorHandler(res, false, 401, 'Invalid or expired token');
    }

    const hashedPassword = await bcryptjs.hash(newPassword, 12);

    await updatePasswordService(hashedPassword, token);

    errorHandler(res, true, 200, 'Password reset successful');
  } catch (error) {
    console.error('Error:', error.message);
    errorHandler(res, false, 500, 'Internal Server Error');
  }
}